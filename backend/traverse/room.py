# Implement a class to hold room information. This should have name and
# description attributes.
class Room:
    # def __init__(self, title, description, terrain, room_id=0, coordinates=(60,60), players=[], items=[], exits= [], cooldown=None, errors=[], messages=[], x=None, y=None):
    def __init__(self, room_stats):
        # print(f"DEBUG::Room::{room_stats}")
        self.room_id = room_stats['room_id']
        self.title = room_stats['title']
        self.description = room_stats['description']
        self.coordinates = room_stats['coordinates']
        self.terrain = room_stats['terrain']
        self.players = room_stats['players'] if room_stats['players'] else []
        self.items = room_stats['items']
        self.exits = room_stats['exits']
        self.cooldown = room_stats['cooldown']
        self.errors = room_stats['errors']
        self.messages = room_stats['messages']

        self.n_to = "?" if "n" in self.exits else None
        self.s_to = "?" if "s" in self.exits else None
        self.e_to = "?" if "e" in self.exits else None
        self.w_to = "?" if "w" in self.exits else None
        self.x = eval(self.coordinates)[0]
        self.y = eval(self.coordinates)[1]

    def __str__(self):
        return f"\n-------------------\nCurrent Room = {self.room_id}\n{self.title}\n{self.description}\n{self.getExitsString()}\nPlayers: {self.players}\nItems: {self.items}"

    def printRoomDescription(self, player):
        print(str(self))

    def getExits(self):
        exits = []
        if self.n_to is not None:
            exits.append("n")
        if self.s_to is not None:
            exits.append("s")
        if self.w_to is not None:
            exits.append("w")
        if self.e_to is not None:
            exits.append("e")
        return exits

    def getExitsString(self):
        return f"Exits: [{', '.join(self.getExits())}]"

    def connectRooms(self, direction, connectingRoom):
        if direction == "n":
            self.n_to = connectingRoom
            connectingRoom.s_to = self
            #print(f"DEBUG::connectRooms::n_to = {self.n_to} connecting.s_to = {connectingRoom.s_to}")
        elif direction == "s":
            self.s_to = connectingRoom
            connectingRoom.n_to = self
            #print(f"DEBUG::connectRooms::s_to = {self.s_to} connecting.n_to = {connectingRoom.n_to}")
        elif direction == "e":
            self.e_to = connectingRoom
            connectingRoom.w_to = self
        elif direction == "w":
            self.w_to = connectingRoom
            connectingRoom.e_to = self
        else:
            print("INVALID ROOM CONNECTION")
            return None

    def getRoomInDirection(self, direction):
        if direction == "n":
            print( f"Room: {self.room_id} {direction} {self.n_to}")
            return self.n_to
        elif direction == "s":
            print( f"Room: {self.room_id} {direction} {self.s_to}")
            return self.s_to
        elif direction == "e":
            print( f"Room: {self.room_id} {direction} {self.e_to}")
            return self.e_to
        elif direction == "w":
            print( f"Room: {self.room_id} {direction} {self.w_to}")
            return self.w_to
        else:
            return None

    def getCoords(self):
        return [self.x, self.y]
