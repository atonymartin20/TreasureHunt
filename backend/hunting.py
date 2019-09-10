import os
import time
import requests
from utils import Stack, Queue

key = "314ec772ed9d2974590b9b02a56b022a47c1815c"

headers = {
    'Authorization': f"Token {key}",
    'Content-Type': 'application/json',
}
init_response = requests.get(
    'https://lambda-treasure-hunt.herokuapp.com/api/adv/init/', headers=headers)
init_data = init_response.json()
init_response = requests
print(init_data)
print(init_data['cooldown'])

def buildMap(key, graph=None):
    # Return map of rooms with all data
    # Build request header
    headers = {
        'Authorization': f"Token {key}",
        'Content-Type': 'application/json',
    }

    # Initial get request
    init_response = requests.get(
        'https://lambda-treasure-hunt.herokuapp.com/api/adv/init/', headers=headers)
    init_data = init_response.json()

    # Print Initial get request with breakdowns
    print(f"Initializing game response. \nCurrent_room: {init_data['room_id']}, \nRoom title: {init_data['title']}, \nDescription: {init_data['description']}, \nCoordinates: {init_data['coordinates']}, EXITS: {init_data['exits']}, Cooldown: {init_data['cooldown']}, Errors: {init_data['errors']}, Message: {init_data['messages']}")

    # Use time.sleep to use cooldown
    time.sleep(init_data['cooldown'])

    # Track player's current room
    current_room = init_data['room_id']
    print(f"You are in {current_room}")

    # If graph is none/not entered. Create map
    if graph == None:
        map = {
            0: { 'n': 10, 's': 2, 'e': 4, 'w': 1, 'title': init_data['title'], 'coords': init_data['coordinates']}, # Initial room
            1: { 'n': None, 's': None, 'e': 0, 'w': None, 'title': 'A brightly lit room', 'coords': '(59,60)'}, # Initial move west -> SHOP
            2: { 'n': 0, 's': '?', 'e': '?', 'w': None, 'title': 'A dark room', 'coords': '(60,59)'}, # Initial move south
            4: { 'n': '?', 's': None, 'e': '?', 'w': 0, 'title': 'A misty room', 'coords': '(61,60)'}, # Initial move east
            10: { 'n': '?', 's': 0, 'e': '?', 'w': '?', 'title': 'A misty room', 'coords': '(60,61)'}, # Initial move north
        }
    else:
        # If graph entered set map to graph
        map = graph

    # Create Stack
    stack = Stack()
    stack.push(current_room)
    last_room = 0

    # while loop when map doesn't have 500 rooms
    while len(map) < 500:

        # Set movement direction to move based on unexplored paths in current_room
        move_to = ''

        for key, value in map[current_room].items():
        # If path is unexplored move to it
            if value == '?':
                move_to = key
                break

        print(f"Next move is: {move_to}")

        # If path is unexplored move to it
        if move_to:
            # Create move data object
            data_move = { 'direction': f'{key}' }
            print(f"Data object is move.  Data: {data_move}\nHeaders: {headers}")

            # Send move_request
            move_response = requests.post('https://lambda-treasure-hunt.herokuapp.com/api/adv/move/', headers=headers, data=move)
            print(f"Move response looks like: {move_response}")
            # Parse response
            json_response = move_response.json()
            print(f"JSON response: {json_response}")

            # Set move direction to room_id
            map[current_room][move_to] = json_response['room_id']
            # Set last room to current_room
            last_room = current_room

            # Set current_room to room_id
            current_room = json_response['room_id']

            # if current_room not in map
            if current_room not in map:
                # Create new object in map
                map[current_room] = {'n': None, 's': None,
                                  'e': None, 'w': None, 'title': json_response['title']}

                # Set exits 
                for item in data['exits']:
                    map[current_room][item] = '?'

            # Add previous room to current room based on direction
            if move_to == 'n':
                map[current_room]['s'] = last_room
            elif move_to == 's':
                map[current_room]['n'] = last_room
            elif move_to == 'e':
                map[current_room]['w'] = last_room
            elif move_to == 'w':
                map[current_room]['e'] = last_room

            if len(map) == 500:
                break

            else:
                # Cooldown activated
                time.sleep(data['cooldown'])

        # If all unexplored exits found BFS to find nearest
        else:
            # Return dead ends
            return f"Found dead end. Find nearest unexplored exit."
            
    return map


updated_map = buildMap(key)
print(updated_map)

# Build BFS for treasure hunt.
def find_closest_unexplored(current_room, map):
    """
    Returns object { "room": integer, "path": list, updated_map: dict }

    :param int curr_room: Current room player is in  
    :param dict graph: Graph of the world map to traverse -- REMOVE
    :param dict map: Dictionary containing found rooms and exits  
    """
    # `graph` needs to be replaced with call to move on server
    # DOWNSIDE TO BFS: cool down will make this take ages -- can only check one direction at a time plus have to move back.
    # Need to set a timeout to prevent penalties for hitting server too quickly
    # USE time.sleep(res.cooldown) to force it to wait for the cooldown period before hitting the server again
    # If we can send back next room, 50% reduction : {"direction":"s", "next_room_id": "0"}
    visited = {}
    q = Queue()
    q.enqueue({"room": curr_room, "path": []})
    path_found = False
    chosen_path = None

    while not path_found:

        check = q.dequeue()
        curr_path = check["path"]
        curr_room2 = check["room"]

        # check all directions of current room
        # if next room has "?", make new path
        # if not, append and keep checking
        for key, value in map[curr_room2].items():
            # key: direction, value: room number
            if value == '?':
                curr_path.append(key)
                chosen_path = curr_path
                path_found = True
                break

            if value != None and value not in visited:
                path_copy = list(curr_path)
                path_copy.append(key)
                visited[value] = {"room": value, "path": path_copy}
                q.enqueue(visited[value])

    for direction in chosen_path:
        # Sets the next room to be the direction we'll traverse in
        next_room = graph[curr_room][1][direction]

        if next_room not in map:
            # updates map[curr_room][direction] to next_room to mark as visited
            map[curr_room][direction] = next_room
            # Adds the next room to map as well
            map[next_room] = {'n': '?', 's': '?', 'e': '?', 'w': '?'}

            # Checks for non-valid exits to update in map so only viable un-explored exits are marked '?'
            if 'n' not in graph[next_room][1]:
                map[next_room]['n'] = None
            if 's' not in graph[next_room][1]:
                map[next_room]['s'] = None
            if 'e' not in graph[next_room][1]:
                map[next_room]['e'] = None
            if 'w' not in graph[next_room][1]:
                map[next_room]['w'] = None

            # Sets the curr_room to next_room
            if direction == 'n':
                map[next_room]['s'] = curr_room
            if direction == 's':
                map[next_room]['n'] = curr_room
            if direction == 'e':
                map[next_room]['w'] = curr_room
            if direction == 'w':
                map[next_room]['e'] = curr_room

            curr_room = next_room

        else:
            curr_room = next_room

    return {"room": curr_room, "path": chosen_path, "updated_map": map}
