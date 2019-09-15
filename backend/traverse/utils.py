import json


# Queue needed for bfs
class Queue():
    def __init__(self):
        self.queue = []

    def __repr__(self):
        return f"Queue: {self.queue}"

    def enqueue(self, value):
        self.queue.append(value)

    def dequeue(self):
        if self.size() > 0:
            return self.queue.pop(0)
        else:
            return None

    def size(self):
        return len(self.queue)


# Main pathfinding using bfs
def bfs(start_room, dest, map):
    print(f"DEBUG::bfs start_room::{start_room}")
    print(f"DEBUG::bfs dest::{dest}")
    visited = set()
    q = Queue()

    q.enqueue([start_room])

    while q.size() > 0:
        # dequeue the path
        path = q.dequeue()
        node = path[-1]

        if node != "?" and node not in visited:
            print(f"Checking node {node}")
            visited.add(node)
            # Check if it contains the destination

            if dest in map[node].values():
                
                if dest != "?":
                    # add the last one
                    path.append(dest)
                print(f"DEBUG::bfs::{path}")
                return path

            for neighbor in map[node].values():
                # print(f"Neighbor found: {neighbor}")
                copy_path = path.copy()
                copy_path.append(neighbor)
                q.enqueue(copy_path)

    return None


# Update the graph
def update_graph(roomGraph, map, current_room, prev_room=None, dir=None, prev_dir=None):
    if roomGraph.get(current_room.room_id) is None:
        roomGraph[current_room.room_id] = {
            'room_id':      current_room.room_id,
            'title':        current_room.title,
            'description':  current_room.description,
            'coordinates':  current_room.coordinates,
            'players':      current_room.players,
            'terrain':      current_room.terrain,
            'items':        current_room.items,
            'exits':        current_room.exits,
            'cooldown':     current_room.cooldown,
            'errors':       current_room.errors,
            'messages':     current_room.messages,
            'visited':      {},
            'x':            current_room.x,
            'y':            current_room.y
        }

        
        if map.get(current_room.room_id) is None:
            map[current_room.room_id] = {}

        for x in current_room.exits:
            value = {x: '?'}
            roomGraph[current_room.room_id]['visited'].update(value)
            if map[current_room.room_id].get(x) is None:
                map[current_room.room_id].update(value)

        

    if prev_room is not None:
        value = {prev_dir: prev_room.room_id}
        roomGraph[current_room.room_id]['visited'].update(value)
        map[current_room.room_id].update(value)

        value = {dir: current_room.room_id}
        roomGraph[prev_room.room_id]['visited'].update(value)
        map[prev_room.room_id].update(value)

    with open("roomGraph.py", "w") as file:
        file.write("roomGraph = ")
        file.write(json.dumps(roomGraph))

    with open("map.py", "w") as file:
        file.write("map = ")
        file.write(json.dumps(map))


# Print messages recieved
def printMessages(data):
    if len(data['messages']) > 0:
        for msg in data['messages']:
            print(f"-- {msg}")

    if len(data['errors']) > 0:
        for err in data['errors']:
            print(f"xx {err}")


