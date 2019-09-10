import os
import time
import requests
import random

from room import Room
from player import Player
from world import World
from dotenv import load_dotenv #Loads .env file
load_dotenv()

key = os.getenv("KEY")

# Test Key and get initial data
init_headers = {
    'Authorization': f"Token {key}",
}
init_response = requests.get(
    'https://lambda-treasure-hunt.herokuapp.com/api/adv/init/', headers=init_headers)
init_data = init_response.json()
print(f"Init_data: {init_data}")
print(f"Init_data['title']: {init_data['title']}")

def create_new_room(room_stats):
    current_room = Room(room_stats['title'], room_stats['description'], room_stats['terrain'], room_stats['room_id'], room_stats['coordinates'], room_stats['players'], room_stats['items'], room_stats['exits'], room_stats['cooldown'], room_stats['errors'], room_stats['messages'], eval(room_stats['coordinates'])[0], eval(room_stats['coordinates'])[1])
    return current_room

def create_graph(room):
    roomGraph[room.room_id] = {
        'room_id': current_room.room_id,
        'title': room.title,
        'description': room.description,
        'coordinates': room.coordinates,
        'terrain': room.terrain,
        'items': room.items,
        'exits': room.exits,
        'cooldown': room.cooldown,
        'errors': room.errors,
        'messages': room.messages,
        'visited': {},
        'x': room.x,
        'y': room.y,
    }
    for i in current_room.exits:
        value = {i: '?'}
        roomGraph[current_room.room_id]['visited'].update(value)
    return roomGraph

def update_graph(current_room, prev_room, direction, prev_direction):
    value = {}
    if roomGraph.get(current_room.room_id) == None:
      roomGraph[current_room.room_id] = {
        'room_id': current_room.room_id,
        'title': current_room.title,
        'description': current_room.description,
        'coordinates': current_room.coordinates,
        'terrain': current_room.terrain,
        'items': current_room.items,
        'exits': current_room.exits,
        'cooldown': current_room.cooldown,
        'errors': current_room.errors,
        'messages': current_room.messages,
        'visited': {},
        'x': current_room.coordinates.split(',')[0][1:],
        'y': current_room.coordinates.split(',')[1][:-1],
      }

      for i in current_room.exits:
         value = {i: '?'}
         roomGraph[current_room.room_id]['visited'].update(value)

    value = {prev_direction: prev_room.room_id}
    roomGraph[current_room.room_id]["visited"].update(value)

    value = {direction: current_room.room_id}
    roomGraph[prev_room.room_id]["visited"].update(value)

def move_direction(direction_to_move, current_room):
    move_response = requests.post("https://lambda-treasure-hunt.herokuapp.com/api/adv/move/", json={"direction":direction_to_move}, headers={"Authorization": f"Token {key}"})

    prev_room = current_room
    current_room = create_room(move_response.json())

    update_graph(current_room, prev_room, direction_to_move, reverseDirection[direction_to_move])

    return [current_room, prev_room]

# Load world

max_rooms = 500
min_cooldown = 10
world = World()
# world.loadGraph(roomGraph)
roomGraph = {}
current_room = create_new_room(init_data)
prev_room = current_room
room_graph = create_graph(current_room)

player = Player("Name", world.startingRoom)
world.startingRoom = current_room




# Traversal Path
traversalPath = []
path = []
visited = {}
reverseDirection = {'n': 's', 's': 'n', 'w': 'e', 'e': 'w' }

#add starting room to visited
print(f"{current_room}")
print(f"Visited: {visited}")
print(f"Visited: visited[player.currentRoom.room_id]: {visited[player.currentRoom.room_id]}")
visited[player.currentRoom.room_id] = roomGraph[player.currentRoom.room_id]['visited']
time.sleep(min_cooldown)

status_response = requests.post("https://lambda-treasure-hunt.herokuapp.com/api/adv/status/", headers={"Authorization": f"Token {token}"})

player.update(status_resposne.json())
time.sleep(min_cooldown)

#  While loop runs while all rooms haven't been visited
while len(visited) < len(max_rooms)-1:
    #  If current room hasn't been visited
    if player.currentRoom.room_id not in visited:
    #  Add current Room to roomsPath and roomsDictionary
        visited[player.currentRoom.room_id] = roomGraph[player.currentRoom.room_id]['visited']
        prev_direction = path[-1]
        del visited[player.currentRoom.id][prev_direction]

    while '?' not in visited[player.currentRoom.room_id].values():
        if len(path) > 0:
        #  Pop off path
            prev_direction = path.pop(0)
        #  Add to traversalPath
        traversalPath.append(prev_direction)
        player.travel(prev_direction)

    unexplored = []
    for key, value in visited[player.currentRoom.room_id].items():
        if value == '?':
            unexplored.append(key)
            break
    
    direction_to_move = unexplored[0]

    rooms = move_direction(direction_to_move, current_room)
    current_room = rooms[0]
    prev_room = rooms[1]

    world.loadGraph(roomGraph)

    if direction_to_move in visited[player.currentRoom.room_id]:
        traversalPath.append(direction_to_move)
        path.append(direction_array[direction_to_move])
        player.travel(direction_to_move)

    time.sleep(current_room.cooldown)