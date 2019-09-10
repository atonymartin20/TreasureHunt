from room import Room
import random
import math

class World:
    def __init__(self):
        self.startingRoom = None
        self.rooms = {}
        self.roomGrid = []
        self.gridSize = 0

    def loadGraph(self, roomGraph):
        numRooms = len(roomGraph)
        print(f"DEBUG::numRooms::{numRooms}")
        print(f"DEBUG::roomGraph::{roomGraph}")
        rooms = [None] * numRooms
        gridSize = 1

        # Can't use for i in range here, the room graph's dictionary goes by room_id, so you might have 72, 54, 108
        # for i in range(0, numRooms):
        for i in roomGraph.keys():
            print(f"DEBUG::i::{i}")
            # x = roomGraph[i][0][0]
            # x = int(roomGraph[i]["coordinates"].split(',')[0][1:])
            # y = int(roomGraph[i]["coordinates"].split(',')[1][:-1])
            print(f"DEBUG::roomGraph[i]::{roomGraph[i]}")
            x = roomGraph[i]["x"]
            y = roomGraph[i]["y"]
            # gridSize = max(gridSize, roomGraph[i][0][0], roomGraph[i][0][1])
            gridSize = max(gridSize, x, y)
            self.rooms[i] = Room(roomGraph[i]['room_id'], roomGraph[i]['title'], roomGraph[i]['description'], roomGraph[i]['coordinates'], roomGraph[i]['exits'])
        self.roomGrid = []
        gridSize += 1
        self.gridSize = gridSize

        for i in range(0, gridSize):
            self.roomGrid.append([None] * gridSize)
        
        for roomID in roomGraph:
            room = self.rooms[roomID]
            # x = int(roomGraph[roomID]["coordinates"].split(',')[0][1:])
            # y = int(roomGraph[roomID]["coordinates"].split(',')[1][:-1])
            x = roomGraph[roomID]["x"]
            y = roomGraph[roomID]["y"]
            self.roomGrid[x][y] = room

            # if 'n' in roomGraph[roomID][1]:
            #     self.rooms[roomID].connectRooms('n', self.rooms[roomGraph[roomID][1]['n']])
            if 'n' in roomGraph[roomID]["visited"] and roomGraph[roomID]["visited"]["n"] != "?":
                self.rooms[roomID].connectRooms('n', self.rooms[roomGraph[roomID]["visited"]["n"]])
            # if 's' in roomGraph[roomID][1]:
            #     self.rooms[roomID].connectRooms('s', self.rooms[roomGraph[roomID][1]['s']])
            if 's' in roomGraph[roomID]["visited"] and roomGraph[roomID]["visited"]["s"] != "?":
                self.rooms[roomID].connectRooms('s', self.rooms[roomGraph[roomID]["visited"]["s"]])
            # if 'e' in roomGraph[roomID][1]:
            #     self.rooms[roomID].connectRooms('e', self.rooms[roomGraph[roomID][1]['e']])
            if 'e' in roomGraph[roomID]["visited"] and roomGraph[roomID]["visited"]["e"] != "?":
                self.rooms[roomID].connectRooms('e', self.rooms[roomGraph[roomID]["visited"]['e']])
            # if 'w' in roomGraph[roomID][1]:
            #     self.rooms[roomID].connectRooms('w', self.rooms[roomGraph[roomID][1]['w']])
            if 'w' in roomGraph[roomID]["visited"] and roomGraph[roomID]["visited"]["w"] != "?":
                self.rooms[roomID].connectRooms('w', self.rooms[roomGraph[roomID]["visited"]['w']])
        print(f"DEBUG::self.rooms::{self.rooms}")

        # Doesn't like this, since there really isn't an order to a dictionary. It's handled in adv.py
        # self.startingRoom = self.rooms[0]

    def printRooms(self):
        rotatedRoomGrid = []
        for i in range(0, len(self.roomGrid)):
            rotatedRoomGrid.append([None] * len(self.roomGrid))
        for i in range(len(self.roomGrid)):
            for j in range(len(self.roomGrid[0])):
                rotatedRoomGrid[len(self.roomGrid[0]) - j - 1][i] = self.roomGrid[i][j]
        
        f = open("mapDesign.txt", "w")
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


