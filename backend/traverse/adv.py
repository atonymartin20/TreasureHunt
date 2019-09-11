import os
import time
import requests
import random
import json
from room import Room
from player import Player
from world import World
from dotenv import load_dotenv #Loads .env file
load_dotenv()

from utils import bfs

# Let's keep the maps we found
import os.path
from os import path
if path.exists("roomGraph.py"):
    from roomGraph import roomGraph
if path.exists("map.py"):
    from map import map


key = os.getenv("KEY")

# Test Key and get initial data
init_headers = {
    'Authorization': f"Token {key}",
}
init_response = requests.get(
    'https://lambda-treasure-hunt.herokuapp.com/api/adv/init/', headers=init_headers)
init_data = init_response.json()
time.sleep(init_data["cooldown"])
print(f"INIT::{init_data}")


def create_graph(room):
    roomGraph[room.room_id] = {
        'room_id': room.room_id,
        'title': room.title,
        'description': room.description,
        'coordinates': room.coordinates,
        'players': room.players,
        'terrain': room.terrain,
        'items': room.items,
        'exits': room.exits,
        'cooldown': room.cooldown,
        'errors': room.errors,
        'messages': room.messages,
        'visited': {},
        'x': room.x,
        'y': room.y
    }
    # print(f"DEBUG: {roomGraph[room.room_id]}")
    for i in current_room.exits:
        value = {i: '?'}
        roomGraph[current_room.room_id]['visited'].update(value)
    return roomGraph


def update_graph(current_room, prev_room, direction, prev_direction):
    value = {}
    if roomGraph.get(current_room.room_id) == None:
        # Removed duplicate code, calling to existing function instead
        create_graph(current_room)

    value = {prev_direction: prev_room.room_id}
    roomGraph[current_room.room_id]["visited"].update(value)
    # print(f"DEBUG::update_graph:curr_room::{value}")

    value = {direction: current_room.room_id}
    roomGraph[prev_room.room_id]["visited"].update(value)
    # print(f"DEBUG::update_graph:prev_room::{value}")

    # print(f"DEBUG::roomGraph::{roomGraph[current_room.room_id]}")

    with open("roomGraph.py", "w") as file:
        file.write("roomGraph = ")
        file.write(json.dumps(roomGraph))


max_rooms = 500
min_cooldown = 10
world = World()

# Load in saved data
if path.exists("roomGraph.py"):
    world.loadGraph(roomGraph)
    world.printRooms()
else:
    roomGraph = {}

visited = set()

if path.exists("map.py"):
    for key in map.keys():
        visited.add(key)
else:
    map = {}

current_room = Room(init_response.json())
prev_room = current_room
room_graph = create_graph(current_room)

player = Player("Name", current_room)
world.startingRoom = current_room

print(current_room)


# Traversal Path
traversalPath = []
path = []

reverseDirection = {'n': 's', 's': 'n', 'w': 'e', 'e': 'w' }
roomId = None
prevId = None
dir = None

#add starting room to visited
visited.update( {player.currentRoom.room_id: roomGraph[player.currentRoom.room_id]['visited']})

status_response = requests.post("https://lambda-treasure-hunt.herokuapp.com/api/adv/status/", headers=init_headers)
print(f"DEBUG::status_response::{status_response.json()}")
player.update(status_response.json(), current_room)
time.sleep(status_response.json()["cooldown"])


#  While loop runs while all rooms haven't been visited
while len(visited) < max_rooms:
    roomId = player.currentRoom.room_id
    
    # Check for items in room to pick up - TODO
    if len(player.currentRoom.items) > 0:
        for item in player.currentRoom.items:
            item_json = {"name": item}
            item_response = requests.post(
                'https://lambda-treasure-hunt.herokuapp.com/api/adv/take/', json=item_json, headers=init_headers)
            item_data = item_response.json()
            print(f"TREASURE!!: {item_data}")

    #  If current room hasn't been visited
    if roomId not in map:
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
        map[roomId][reverseDirection[dir]] = prevId

    # Find a direction to move in
    dir = next((dir for dir, val in map[roomId].items() if val == "?"), None)

    # Is there a direction to move to?
    if dir is not None:
        prevId = roomId
        prevRoom = player.currentRoom
        traversalPath.append(dir)
        player.travel(dir)

        # Update graph here
        update_graph(player.currentRoom, prevRoom, dir, reverseDirection[dir])
    else:
        # Find nearest ? to backtrack to
        bfs_rooms = bfs(roomId, map)
        if bfs_rooms is None:
            break

        # Translate room ID numbers to path
        for i in range(len(bfs_rooms) -1):
            newpath = []
            next((newpath.append(dir) for dir, val in map[bfs_rooms[i]].items() if val == bfs_rooms[i+1]))
            traversalPath = traversalPath + newpath

            for move in newpath:
                player.travel(move)

                # Shouldn't need to update graph here, back-tracking to nearest ?
                # update_graph(player.currentRoom, prevRoom, dir, reverseDirection[dir])

            prevId = None

    with open("map.py", "w") as file:
        file.write("map = ")
        file.write(json.dumps(map))

    # Just for testing
    if roomId == 0:
        exit(0)
    # print(f"DEBUG::map::{map}")

