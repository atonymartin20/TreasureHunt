import os
import requests
import time
from room import Room
from dotenv import load_dotenv
load_dotenv()

key = os.getenv("KEY")
init_headers = {
    'Authorization': f"Token {key}",
}


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

    def update(self, response, current_room):
        self.name = response["name"]
        self.currentRoom = current_room
        self.cooldown = response["cooldown"]
        self.encumbrance = response["encumbrance"]
        self.strength = response["strength"]
        self.speed = response["speed"]
        self.gold = response["gold"]
        self.inventory = response["inventory"]
        self.status = response["status"]

    def travel(self, direction, showRooms = True, flying = False):
        # Need to rewrite this some. Commenting out for now, since we're not tracking room numbers during movement yet.
        nextRoom = self.currentRoom.getRoomInDirection(direction)
        if nextRoom is not None:
            if nextRoom is not "?":
                move_json = {"direction": direction, "next_room_id": str(nextRoom.room_id)}
            else:
                move_json = {"direction":direction}

            if flying:
                move_response = requests.post("https://lambda-treasure-hunt.herokuapp.com/api/adv/fly/", json=move_json, headers=init_headers)
            else:
                move_response = requests.post("https://lambda-treasure-hunt.herokuapp.com/api/adv/move/", json=move_json, headers=init_headers)
            # print(f"DEBUG::move_response::{move_response.json()}")
            
            # Check to make sure we did move. Otherwise, print error
            if move_response.status_code == 200:
                nextRoom = Room(move_response.json())
                self.currentRoom = nextRoom

                # Print any messages
                if len(nextRoom.messages) > 0:
                    for msg in nextRoom.messages:
                        print(msg)

                # Print the room
                if (showRooms):
                    nextRoom.printRoomDescription(self)

                time.sleep(nextRoom.cooldown)
            else:
                print(f"ERROR::travel::{move_response.json()}")
                time.sleep(move_response.json().cooldown)
        else:
            print("You cannot move in that direction.")
# class Player:
#     def __init__(self, name, startingRoom):
#         self.name = name
#         self.currentRoom = startingRoom

        
#     def travel(self, direction, showRooms = False):
#         nextRoom = self.currentRoom.getRoomInDirection(direction)
#         if nextRoom is not None:
#             self.currentRoom = nextRoom
#             if (showRooms):
#                 nextRoom.printRoomDescription(self)
#         else:
#             print("You cannot move in that direction.")