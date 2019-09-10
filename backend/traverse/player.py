class Player:
    def __init__(self, name, startingRoom, cooldown = None, encumbrance = None, strength = None, speed = None,  gold = None, inventory = None, status = None):
        self.name = name
        self.currentRoom = startingRoom
        self.cooldown = cooldown
        self.encumbrance = encumbrance
        self.strength = strength
        self.speed = speed
        self.gold = gold
        self.inventory = inventory
        self.status = status

    def update(self, response):
        self.name = response["name"]
        self.cooldown = response["cooldown"]
        self.encumbrance = response["encumbrance"]
        self.strength = response["strength"]
        self.speed = response["speed"]
        self.gold = response["gold"]
        self.inventory = response["inventory"]
        self.status = response["status"]

    def travel(self, direction, showRooms = False):
        # Need to rewrite this some. Commenting out for now, since we're not tracking room numbers during movement yet.
        nextRoom = self.currentRoom.getRoomInDirection(direction)
        # if nextRoom is not None:
        #     self.currentRoom = nextRoom
        #     if (showRooms):
        #         nextRoom.printRoomDescription(self)
        # else:
        #     print("You cannot move in that direction.")
        self.currentRoom = nextRoom
        if (showRooms):
            nextRoom.printRoomDescription(self)
