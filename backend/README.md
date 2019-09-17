# Treasure Hunt!

Traverse a maze while building a map, getting treasure, finding special features and mining Lambda Coins.

(All files under traverse/)
---

## Requirements:
- Python3
- requests

- backend/traverse/.env with `KEY=<your api key here>`

Run `pipenv install` and `pipenv shell` or just run the application using `python3 backend/traverse/adv.py`


## Game Use:
After starting the game, you will be presented with a menu of options to select from:
```
1: Manual Walk          - This will let you manually walk around the map using directional commands [n, s, e, w or q to quit]
2: Automatic Walk       - If there are rooms left to explore, automatic walk will take you there
3: Go to Store (1)      - Find the path to the store and automatically walk to it.
4: Go to nearest unknown (?)    - If there are any unexplored directions left, this will take you to them.
5: Go to _____          - Go to a room number of your choice.
6: Go to mine           - Go to the mining room
7: Mine It!             - Mine a Lambda Coin. Menu will be presented again once completed
q: Quit                 - Quit the game
Your command:
```

---

## Files:

### adv.py
This is the main part of the program that puts everything together.
- Loads roomGraph and map variables from existing files, or starts new ones
- checkRoom(current_room) - Checks room for various options. Items in room, picks up items, pray at shrines, sell/drop items, etc.
- menu() - This holds the menu system and routes what each option does.
- walk() - Function for manually walking through the map
- bft() - Breadth-first traversal for moving to unknown rooms, or specific known rooms
- auto() - Automatically traverse the map, calling upon bft() as needed for pathfinding

### map.py
This file is auto-generated to store the map{} dictionary, which is used for bfs traversal and tracking. This may be missing for the first run.

### map.txt
This file is auto-generated to display a graphical representation of the discovered map.

### miner.py
This file is responsible for mining when in the correct room.
- proof_of_work(last_proof, difficulty) - Finds a new hash, sending to valid_proof for validation
- valid_proof(last_proof, proof, difficulty) - Checks to make sure the hash has <difficulty> number of preceeding 0's
- mine() - Gets the last proof & difficulty from the server, submits found proof for new blocks

### player.py
This holds the Player class
- __init__(self, name, startingRoom, cooldown = None, encumbrance = None, strength = None, speed = None,  gold = None, inventory = None, status = None)
    Player:
    ```
        self.name
        self.currentRoom
        self.cooldown
        self.encumbrance
        self.strength
        self.speed
        self.gold
        self.inventory
        self.status
        ```
- update(self, response, current_room) - updates the Player with new data from server
- travel(self, direction, roomGraph, showRooms = True, flying = False) - Performs the needed actions to travel to another room by walking or flying

### room.py
This holds the Room class
- __init__(self, room_info)
    Room:
    ```
        self.room_id
        self.title
        self.description
        self.players
        self.terrain
        self.items
        self.exits
        self.cooldown
        self.visited
        self.coordinates
        self.errors
        self.messages

        self.x
        self.y

        self.n_to = "?" if "n" in self.exits else None
        self.s_to = "?" if "s" in self.exits else None
        self.e_to = "?" if "e" in self.exits else None
        self.w_to = "?" if "w" in self.exits else None
    ```
- __str__(self) - Nicely prints the room:
    ```
    0: A brightly lit room [NORMAL]
    You are standing in the center of a brightly lit room. You notice a shop to the west and exits to the north, south and east.
    People: ['player204', 'player199']
    Exits: [n, s, w, e]
    ```
- printRoomDescription(self) - Prints the room description
- getExits(self) - Gets a list of exit directions from a room
- getExitsString(self) - Prints a formatted list of exits
- connectRooms(self, direction, connectingRoom) - Makes the connection from roomA to roomB
- getRoomInDirection(self, direction) - Finds the room connected to (self) in the desired direction
- getCoords(self) - Gives the current coordinates

### roomGraph.py
This file is auto-generated to store the roomGraph{} dictionary, which is used for bfs traversal and tracking. This may be missing for the first run.

### utils.py
Queue() - The queue class used by breadth-first search
bfs(start_room, dest, map) - Produces a path from start_room to dest using the specified map
update_graph(roomGraph, map, current_room, prev_room=None, dir=None, prev_dir=None) - Updates the working graph with the new room's data
printMessages(data) - Prints out messages recieved from actions like movement, picking items up, or mining.

### world.py
This holds the world class
def __init__(self)
    World:
    ```
    self.startingRoom = None
    self.rooms = {}
    self.roomGrid = []
    self.gridSize = 0
    self.shopRoom = [1]     # Don't know if there is more than one
    self.shrineRoom = []    # Don't know if there is more than one
    self.pirateRoom = [467]
    ```
loadGraph(self, roomGraph) - Loads the graph into the world. This is what allows for persistence between starts
printRooms(self) - Prints a graphical representation of the world into map.txt
