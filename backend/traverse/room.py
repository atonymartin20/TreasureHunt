# Implement a class to hold room information. This should have name and
# description attributes.
class Room:
    def __init__(self, room_info):
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
        self.room_id = int(room_info['room_id'])
        self.title = room_info['title']
        self.description = room_info['description']
        self.players = room_info['players']
        self.terrain = room_info['terrain']
        self.items = room_info['items']
        self.exits = room_info['exits']
        self.cooldown = room_info['cooldown']
        self.visited = {}
        self.coordinates = room_info['coordinates']
        self.errors = room_info['errors']
        self.messages = room_info['messages']

        self.x = eval(room_info['coordinates'])[0]
        self.y = eval(room_info['coordinates'])[1]

        self.n_to = "?" if "n" in self.exits else None
        self.s_to = "?" if "s" in self.exits else None
        self.e_to = "?" if "e" in self.exits else None
        self.w_to = "?" if "w" in self.exits else None
        
    def __str__(self):
        roomStr =  "\n-------------------\n"
        roomStr += f"{self.room_id}: {self.title} [{self.terrain}]\n"
        roomStr += f"   {self.description}\n"
        if len(self.players) > 0:
            roomStr += f"People: {self.players}\n"
        if len(self.items) > 0:
            roomStr += f"{self.items}\n"
        roomStr += f"{self.getExitsString()}\n"
        roomStr += f"Waiting {self.cooldown} seconds...\n"
        return roomStr


    def printRoomDescription(self, player=None):
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
            return self.n_to
        elif direction == "s":
            return self.s_to
        elif direction == "e":
            return self.e_to
        elif direction == "w":
            return self.w_to
        else:
            return None
    def getCoords(self):
        return [self.x, self.y]