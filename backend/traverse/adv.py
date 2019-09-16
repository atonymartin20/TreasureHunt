import os
from os import path
import time
import requests
from dotenv import load_dotenv
from room import Room
from player import Player
from world import World
from utils import Queue, bfs, update_graph, printMessages
from miner import mine

import random

load_dotenv()
key = os.getenv("KEY")

# Test Key and get initial data
init_headers = {
    'Authorization': f"Token {key}"
}
init_response = requests.get(
    'https://lambda-treasure-hunt.herokuapp.com/api/adv/init/', headers=init_headers)
init_data = init_response.json()
time.sleep(init_data["cooldown"])
print(f"INIT::{init_data}")

# Load world
world = World()
if path.exists("roomGraph.py"):
    from roomGraph import roomGraph
    print(f"{len(roomGraph)} rooms have been visited")
    newGraph = {}
    for key in roomGraph.keys():
        newGraph[int(key)] = {}
        newGraph[int(key)].update(roomGraph[key])
    roomGraph = newGraph
    world.loadGraph(roomGraph)
else:
    roomGraph={}

visited = set()

if path.exists("map.py"):
    from map import map
    newMap = {}
    for key in map.keys():
        newMap[int(key)] = {}
        newMap[int(key)].update(map[key])
        visited.add(key)
    map = newMap
else:
    map = {}

print(map)

# Hack to fix the missing parts of roomGraph
for key in map.keys():
    for dir in map[key].keys():
        roomGraph[key]['visited'][dir] = map[key][dir]

currRoom = Room(init_response.json())
world.startingRoom = currRoom
world.printRooms()
player = Player("Name", world.startingRoom)

update_graph(roomGraph, map, currRoom)
currRoom.printRoomDescription(player)

# Check the room for various functions/items
def checkRoom(current_room):
    
    # Any items to pick up?
    if len(current_room.items) > 0:
        # Don't need to pick up items
        
        for item in current_room.items:
            # Pick up everything BUT treasure!
            if "treasure" not in item:
                item_json = {"name": item}
                item_response = requests.post(
                    'https://lambda-treasure-hunt.herokuapp.com/api/adv/take/', json=item_json, headers=init_headers)
                item_data = item_response.json()
                print(f"ITEM FOUND!!: {item}")
                time.sleep(item_data['cooldown'])

                # examine the item
                item_json = {"name": item}
                item_response = requests.post(
                    'https://lambda-treasure-hunt.herokuapp.com/api/adv/examine/', json=item_json, headers=init_headers)
                item_data = item_response.json()
                # print(f"DEBUG::examine item_data::{item_data}")
                printMessages(item_data)
                time.sleep(item_data['cooldown'])

                # Can it be worn?
                if item_data['itemtype'] != "TREASURE":
                    item_response = requests.post(
                        'https://lambda-treasure-hunt.herokuapp.com/api/adv/wear/', json=item_json, headers=init_headers
                    )
                    item_data = item_response.json()
                    printMessages(item_data)
                    time.sleep(item_data['cooldown'])
        


    # Is the room a shop?
    # print(f"DEBUG::room title::{current_room.title}")
    if current_room.title == "Shop":
        # print(f"DEBUG::room is a shop")
        # Add to the world.shopRoom if needed
        if current_room.room_id not in world.shopRoom:
            world.shopRoom.append(current_room.room_id)

        # Check current inventory for treasure to sell
        if len(player.inventory) > 0:
            # print(f"DEBUG::inventory::{player.inventory}")
            for item in player.inventory:
                # examine the item
                item_json = {"name": item}
                item_response = requests.post(
                    'https://lambda-treasure-hunt.herokuapp.com/api/adv/examine/', json=item_json, headers=init_headers)
                item_data = item_response.json()
                # print(f"DEBUG::examine item_data::{item_data}")
                time.sleep(item_data['cooldown'])

                # If it is a treasure, sell it
                if item_data['itemtype'] == "TREASURE":
                    item_json = {"name": item, "confirm": "yes"}
                    item_response = requests.post(
                        'https://lambda-treasure-hunt.herokuapp.com/api/adv/sell/', json=item_json, headers=init_headers)
                    item_data = item_response.json()

                    # print(f"DEBUG::sell data::{item_data}")
                    printMessages(item_data)                
                    time.sleep(item_data['cooldown'])

    # Is the room a shrine?
    if "Shrine" in current_room.title or "Grave" in current_room.title or "Peak" in current_room.title:
        print(f"SHRINE: Praying to {current_room.title}")
        # Add to the world.shrineRoom if needed
        if current_room.room_id not in world.shrineRoom:
            world.shrineRoom.append(current_room.room_id)

        # Pray at the shrine to earn new powers
            shrine_response = requests.post(
                'https://lambda-treasure-hunt.herokuapp.com/api/adv/pray/', headers=init_headers)
            shrine_data = shrine_response.json()
            # print(f"DEBUG::shrine_data::{shrine_data}")
            printMessages(shrine_data)
            time.sleep(shrine_data['cooldown'])

    # Update the player, check to see if encumbered
    status_response = requests.post("https://lambda-treasure-hunt.herokuapp.com/api/adv/status/", headers=init_headers)
    player.update(status_response.json(), current_room)
    time.sleep(status_response.json()["cooldown"])

    if player.encumbrance >= player.strength:
        print("Carrying too much! Need to go sell!")
        return False

    return True

# FILL THIS IN

revDirs = {"n": "s", "s": "n", "e": "w", "w": "e"}

roomId = None
currRoom = player.currentRoom
prevRoom = None
dir = None



# Menu 
def menu():
    print("1: Manual Walk")
    print("2: Automatic Walk")
    print("3: Go to Store (1)")
    print("4: Go to nearest unknown (?)")
    print("5: Go to _____")
    print("6: Go to mine")
    print("7: Mine It!")
    print("q: Quit")
    cmd = input("Your command: ").lower()

    if cmd == "q":
        exit(0)
    elif cmd == "1":
        walk()
    elif cmd == "2":
        auto()
    elif cmd == "3":
        bft(1)
    elif cmd == "4":
        bft("?")
    elif cmd == "5":
        dest = input("What room do you want to go to?: ")
        bft(int(dest))
    elif cmd == "6":
        bft(250)
    elif cmd == "7":
        mine()
    else:
        print("I did not understand that command.")


def walk():
    flying = False
    while True:
        currRoom = player.currentRoom
        # bfs(currRoom.room_id, map)

        cmds = input("-> ").lower().split(" ")
        if cmds[0] in ["n", "s", "e", "w"]:
            prevRoom = player.currentRoom
            dir = cmds[0]

            player.travel(dir, roomGraph)
            currRoom = player.currentRoom
            update_graph(roomGraph, map, currRoom, prevRoom, dir, revDirs[dir])
        elif cmds[0] == "pray":
            shrine_response = requests.post("https://lambda-treasure-hunt.herokuapp.com/api/adv/pray/", headers=init_headers)
            shrine_data = shrine_response.json()
            printMessages(shrine_data)
            if shrine_data.get('message') == "You notice your body starts to hover above the ground.":
                flying = True
            time.sleep(shrine_data['cooldown'])
        elif cmds[0] == "q":
            return
        else:
            print("I did not understand that command.")


def bft(dest):

    print(f"MAP:{map}")
    # Check for the room we're looking for:
    found = False
    for key in map:
        if dest in map[key].values():
            found = True

    if not found:
        print(f"Room {dest} not found!")
        return

    currRoom = player.currentRoom
    bfs_path = bfs(currRoom.room_id, dest, map)

    # Translate room ID numbers to a direction
    for i in range(len(bfs_path) -1):
        newpath = []
        next((newpath.append(dir) for dir, val in map[bfs_path[i]].items() if val == bfs_path[i+1]))

        for move in newpath:
            print(f"Moving {move} from {bfs_path[i]} to {bfs_path[i+1]}")
            player.travel(move, roomGraph)
            currRoom = player.currentRoom


        # Shouldn't need to update graph here, back-tracking to nearest ?
        # update_graph(roomGraph, map, player.currentRoom, prevRoom, dir, revDirs[dir])

        prevId = None

    return


def auto():
    prevId = None
    traversalPath = []
    max_rooms = 500
    #  While loop runs while all rooms haven't been visited
    while len(visited) < max_rooms:
        if len(roomGraph) % 10 == 0:
            world.printRooms()
        print(f"{len(roomGraph)} rooms have been visited.")
        roomId = player.currentRoom.room_id
        
        # Check the current room
        canMove = checkRoom(player.currentRoom)

        #  If current room hasn't been visited
        if roomId not in map.keys():
            map[roomId] = {}

            # Get exits
            exits = player.currentRoom.getExits()

            # Add exits to map queue
            for x in exits:
                map[roomId][x] = "?"

            visited.add(roomId)

        # If prevId is set, update map
        if prevId is not None:
            map[prevId][dir] = roomId
            map[roomId][revDirs[dir]] = prevId

        # Find a direction to move in
        # Little bit of a hack here, but let's get store logged if starting from 0!   
        if 1 not in map and roomId is 0:
            dir = "w"
        else:
            dir = next((dir for dir, val in map[roomId].items() if val == "?"), None)
        
        # Is there a direction to move to?
        if dir is not None and canMove:
            prevId = roomId
            prevRoom = player.currentRoom
            traversalPath.append(dir)
            player.travel(dir, roomGraph)

            # Update graph here
            update_graph(roomGraph, map, player.currentRoom, prevRoom, dir, revDirs[dir])
        else:
            if canMove is False:
                # We have to go back to the shop to sell!
                bfs_rooms = bfs(roomId, world.shopRoom, map)
            else:
                # Find nearest ? to backtrack to
                bfs_rooms = bfs(roomId, "?", map)

            if bfs_rooms is None:
                break

            # Translate room ID numbers to path
            for i in range(len(bfs_rooms) -1):
                newpath = []
                next((newpath.append(dir) for dir, val in map[bfs_rooms[i]].items() if val == bfs_rooms[i+1]))
                traversalPath = traversalPath + newpath

                for move in newpath:
                    player.travel(move, roomGraph)

                    # Shouldn't need to update graph here, back-tracking to nearest ?
                    # update_graph(player.currentRoom, prevRoom, dir, revDirs[dir])

                prevId = None

while True:
    menu()