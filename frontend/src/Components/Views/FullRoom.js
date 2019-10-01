import React from 'react';
import { AppContext } from '../Context/AppContext.js';
import { ViewPanelDiv, CurrentRoomTitleBar, CurrentRoomH2, CurrentRoomLi, CurrentRoomSpan } from '../StyledComponents';
import InventoryList from '../CurrentRoom/InventoryList.js';

class FullRoom extends React.Component{
    render(){
        console.log(this.context.state.currentRoomData)
        return (
            <ViewPanelDiv>

            </ViewPanelDiv>
        )
    }
}

// {room_id: 343, title: "A misty room", description: "You are standing on grass and surrounded by a dens…u can barely make out the exits in any direction.", coordinates: "(53,53)", elevation: 0, …}
// cooldown: 1
// coordinates: "(53,53)"
// description: "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction."
// elevation: 0
// errors: []
// exits: (2) ["s", "w"]
// items: ["regular egg"]
// messages: []
// players: []
// room_id: 343
// terrain: "NORMAL"
// title: "A misty room"
// __proto__: Object
FullRoom.contextType = AppContext;

export default FullRoom;
