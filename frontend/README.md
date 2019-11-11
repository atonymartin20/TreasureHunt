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
- currentLocation
- userData
- currentRoomData
- wiseExplorer
- cooldown
- coinCount
- carriedItem
- flying
- ghostFriend 
- dash
- equippedJacket
- equippedBoots

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
