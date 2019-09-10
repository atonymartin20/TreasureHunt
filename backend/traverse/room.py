# Implement a class to hold room information. This should have name and
# description attributes.
class Room:
    def __init__(self, title, description, terrain, room_id=0, coordinates=(60,60), players=[], items=[], exits= [], cooldown=None, errors=[], messages=[], x=None, y=None):
    # def __init__(self, title, description, id=0, coordinates=(60,60), exits=[],players=[], items=[], cooldown=None, errors=[], message=[], x=None, y=None):

        self.room_id = room_id
        self.title = title
        self.description = description
        self.coordinates = coordinates
        self.terrain = terrain
        self.players = players
        self.items = items
        self.exits = exits
        self.cooldown = cooldown
        self.errors = errors
        self.messages = messages
        self.n_to = None
        self.s_to = None
        self.e_to = None
        self.w_to = None
        self.x = x
        self.y = y

    def __str__(self):
        return f"\n-------------------\nCurrent Room = {self.room_id} {self.title}\n{self.description}\n{self.getExitsString()}\n"

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
        elif direction == "s":
            self.s_to = connectingRoom
            connectingRoom.n_to = self
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
