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
- GetInitialRoomData() 
- 
#### CurrentRoom

#### Map

#### TopBar

#### UserDisplay

#### Views

### src/Data

### src/Images

### App.js

### index.js

### adv.py
