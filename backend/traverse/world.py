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
        rooms = [None] * numRooms
        gridSize = 1
        for i in range(0, numRooms):
            # x = roomGraph[i][0][0]
            x = int(roomGraph[i]["coordinates"].split(',')[0][1:])
            y = int(roomGraph[i]["coordinates"].split(',')[1][:-1])
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
            x = int(roomGraph[roomID]["coordinates"].split(',')[0][1:])
            y = int(roomGraph[roomID]["coordinates"].split(',')[1][:-1])
            self.roomGrid[x][y] = room

            # if 'n' in roomGraph[roomID][1]:
            #     self.rooms[roomID].connectRooms('n', self.rooms[roomGraph[roomID][1]['n']])
            if 'n' in graph[roomID]["visited"] and graph[roomID]["visited"]["n"] != "?":
                self.rooms[roomID].connectRooms('n', self.rooms[graph[roomID]["visited"]["n"]])
            # if 's' in roomGraph[roomID][1]:
            #     self.rooms[roomID].connectRooms('s', self.rooms[roomGraph[roomID][1]['s']])
            if 's' in graph[roomID]["visited"] and graph[roomID]["visited"]["s"] != "?":
                self.rooms[roomID].connectRooms('s', self.rooms[graph[roomID]["visited"]["s"]])
            # if 'e' in roomGraph[roomID][1]:
            #     self.rooms[roomID].connectRooms('e', self.rooms[roomGraph[roomID][1]['e']])
            if 'e' in graph[roomID]["visited"] and graph[roomID]["visited"]["e"] != "?":
                self.rooms[roomID].connectRooms('e', self.rooms[graph[roomID]["visited"]['e']])
            # if 'w' in roomGraph[roomID][1]:
            #     self.rooms[roomID].connectRooms('w', self.rooms[roomGraph[roomID][1]['w']])
            if 'w' in graph[roomID]["visited"] and graph[roomID]["visited"]["w"] != "?":
                self.rooms[roomID].connectRooms('w', self.rooms[graph[roomID]["visited"]['w']])
        self.startingRoom = self.rooms[0]

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


