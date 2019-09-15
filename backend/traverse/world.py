from room import Room
import random
import math

class World:
    def __init__(self):
        self.startingRoom = None
        self.rooms = {}
        self.roomGrid = []
        self.gridSize = 0
        self.shopRoom = [1]     # Don't know if there is more than one
        self.shrineRoom = []    # Don't know if there is more than one
        self.pirateRoom = [467]

    def loadGraph(self, roomGraph):
        #{"0": 
        #  {"room_id": 0, 
        #   "title": "A brightly lit room", 
        #   "description": "You are standing in the center of a brightly lit room.", 
        #   "coordinates": "(60,60)", 
        #   "players": ["player204"],
        #   "terrain": "NORMAL",
        #   "items": [],
        #   "exits": ["n", "s", "e", "w"],
        #   "cooldown": 1.0,
        #   "errors": [],
        #   "messages": [],
        #   "visited": {"n": "?", "s": "?", "e": "?", "w": "?"},
        #   "x": 60,
        #   "y": 60},
        numRooms = len(roomGraph)
        rooms = [None] * numRooms
        gridSize = 1

        newGraph = {}
        for key in roomGraph.keys():
            # Convert non-int keys to int
            newId = int(key)
            newGraph[newId] = {}
            newGraph[newId].update(roomGraph[key])
            
        roomGraph = newGraph

        for i in roomGraph.keys():
            try:
                x = roomGraph[i]['x']
                y = roomGraph[i]['y']
            except:
                print(f"ERROR::loadGraph::{roomGraph[i]}")
            gridSize = max(gridSize, x, y)

            self.rooms[i] = Room(roomGraph[i])
            # self.rooms[i].printRoomDescription()

        self.roomGrid = []
        gridSize += 1
        self.gridSize = gridSize

        for i in range(0, gridSize):
            self.roomGrid.append([None] * gridSize)
        
        for roomID in roomGraph.keys():
            room = self.rooms[roomID]
            self.roomGrid[room.x][room.y] = room
            if 'n' in roomGraph[roomID]['visited'] and roomGraph[roomID]['visited']['n'] != "?":
                self.rooms[roomID].connectRooms('n', self.rooms[roomGraph[roomID]['visited']['n']])
            if 's' in roomGraph[roomID]['visited'] and roomGraph[roomID]['visited']['s'] != "?":
                self.rooms[roomID].connectRooms('s', self.rooms[roomGraph[roomID]['visited']['s']])
            if 'e' in roomGraph[roomID]['visited'] and roomGraph[roomID]['visited']['e'] != "?":
                self.rooms[roomID].connectRooms('e', self.rooms[roomGraph[roomID]['visited']['e']])
            if 'w' in roomGraph[roomID]['visited'] and roomGraph[roomID]['visited']['w'] != "?":
                self.rooms[roomID].connectRooms('w', self.rooms[roomGraph[roomID]['visited']['w']])
        
        self.startingRoom = self.rooms[roomID]


    def printRooms(self):
        rotatedRoomGrid = []
        for i in range(0, len(self.roomGrid)):
            rotatedRoomGrid.append([None] * len(self.roomGrid))
        for i in range(len(self.roomGrid)):
            for j in range(len(self.roomGrid[0])):
                rotatedRoomGrid[len(self.roomGrid[0]) - j - 1][i] = self.roomGrid[i][j]
        f = open("map.txt", "w")
        f.write("#####")
        print("#####")
        str = ""
        for row in rotatedRoomGrid:
            allNull = True
            for room in row:
                if room is not None:
                    allNull = False
                    break
            if allNull:
                continue
            # PRINT NORTH CONNECTION ROW
            str += "#"
            for room in row:
                if room is not None and room.n_to is not None:
                    str += "  |  "
                else:
                    str += "     "
            str += "#\n"
            # PRINT ROOM ROW
            str += "#"
            for room in row:
                if room is not None and room.w_to is not None:
                    str += "-"
                else:
                    str += " "
                if room is not None:
                    str += f"{room.room_id}".zfill(3)
                else:
                    str += "   "
                if room is not None and room.e_to is not None:
                    str += "-"
                else:
                    str += " "
            str += "#\n"
            # PRINT SOUTH CONNECTION ROW
            str += "#"
            for room in row:
                if room is not None and room.s_to is not None:
                    str += "  |  "
                else:
                    str += "     "
            str += "#\n"
        f.write(str)
        f.write("#####")
        f.close()
        print(str)
        print("#####")