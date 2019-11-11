# Treasure Hunt!

Traverse a maze while building a map, getting treasure, finding special features and mining Lambda Coins.

---

## Requirements:
- React
- Context API
- React-Router-Dom
- Axios
- Styled-Components
- frontend/.env with `KEY=<your api key here>`

## Game Use:
Upon starting the game, you will be presented with a treasure map, a legend, a button panel, and a side bar with important information.

## Files:

### src/Components

#### ButtonPanel
The button panel contains all of the movement buttons along with room specific buttons.

- Movement Buttons - Change depending on if you can walk, fly, or dash.  Buttons will automatically disable if the player cannot move in a certain direction.

- Mine Coin Button - The mine coin button will appear when the player is at the mine.  Once the button is clicked, MineCoin() runs.

- Pray Button - This button renders when at a shrine location.  When praying at a shrine, the player will gain the ability at that shrine.

- Name Change Button and Input - This input and name change button will only render when at Pirate Ry's Shop.  Typing a new name into the input and then hitting the name change button will change the player's name into the chosen name.

#### Context
This file contains the majority of the state management and functions in the entire application.

State:
- currentLocation - Contains the currentLocation in the map.  Updated through GetInitialRoomData() and whenever one of the movement functions is called.
- userData - Contains information about the user.  This is updated through GetUserData().
- currentRoomData - This contains all of the information about the current room.  Updated through GetInitialRoomData() and whenever one of the movement functions is called.
- wiseExplorer - If wiseExplore is true, then the cooldowns whenever moving are reduced by 50%.  This checks the if the map has 500 nodes.  If so then wiseExplorer is active.
- cooldown - This holds the value for the current cooldown.  This is updated through every function and makes sure the server has waited at least the proper amount of time before sending another request and erroring out.
- coinCount - This shows how many Lambda Coins the player currently has.  This is updated in CoinBalance().
- carriedItem - This checks if the ghostFriend is currently carrying an item.  This is updated in GhostCarryItem(), GhostReceiveItem(), and UpdateCarriedItem(). 
- flying - Shows if the player has activated flight or not.  If true, the player can travel quicker.  This is updated at PrayAtAltar().
- ghostFriend  - Shows if the player has found their ghost friend.  If true, then the player can have their ghostly companion hold an item for them.  This is updated at PrayAtAltar().
- dash - Shows if the player has activated the dash ability or not.  When true, the player can travel quicker.  This is updated at PrayAtAltar().
- equippedJacket - Shows if the player is currently wearing a jacket.  When wearing a jacket, the player can gain additional strength and speed.  This can be updated through DropItem(), and EquipEquipment().
- equippedBoots - Shows if the player is currently wearing a pair of boots.  When wearing a pair of boots, the player can gain additional strength and speed.  This can be updated through DropItem(), and EquipEquipment().

Functions:
- GetInitialRoomData() - Runs when the app loads.  Gathers the initial room data.
- GetUserData() - Runs when the app loads.  Gathers the inital player data.
- CoinBalance() - Runs when the app loads.  Gathers the amount of Lambda Coins the player has.
- FlyWest(), FlyEast(), FlySouth(), FlyNorth() - These run while flying is active.  Flying allows the player to travel faster than they can when just using the normal movement mechanic.  If the player has wiseExplorer active, then the movement cooldown is decreased by 50%.
- MoveWest(), MoveEast(), MoveSouth(), MoveNorth() - The traditional movement mechanic in the game.  If the player has wiseExplorer active, then the movement cooldown is decreased by 50%.
- DropItem() - Runs when the player drops an item in their inventory.  If the item is currently equipped, then the item is unequipped and then dropped.
- SellItem() - This checks to make sure the item being sold is a type of treasure.  If the item is not treasure, it alerts the user that the shopkeeper will only buy treasure.
- PickUpItem() - Picks up items that are located in the current room.
- PrayAtAltar() - Runs when the player prays at an altar.  Sets one of flying, ghost friend, or dash active dependent on prayer message from the altar.  Alerts the player that they will be able to move again in 50 seconds.
- RenameCharacter() - Allows the player to rename their character.  After the name change, the player is alerted that they will be able to move again in 25 seconds.
- TransmogItem() - This is only available at the transmogrifier. It will use an item, gold, and a Lambda Coin and turn it into wearable equipment.
- EquipEquipment() - Checks to make sure that the item is a jacket or boots.  If the item is one of these two options, the item is equipped.
- GhostCarryItem() - If Ghost Friend is active, then the user can hit the carry button on an item.  The item will then be carried by the ghost and will not weigh down the player.
- GhostReceiveItem() - If Ghost Friend is active, and the ghost is carrying one of your items, this can be used to retrieve your item from the ghost.

#### CurrentRoom
This contains the current room data shown in the home display.  The inventory list has rules depending on the ListType and displays data accordingly.

#### Map
Map contains both the map data and the legend panel code.

#### UserDisplay
This contains the current player data shown in the home display.  The inventory list has rules depending on what room the player is in and changes the display accordingly.

#### Views
This contains each of the views in the right-hand sidebar.

### src/Data
This contains the room data used in the mapping process.