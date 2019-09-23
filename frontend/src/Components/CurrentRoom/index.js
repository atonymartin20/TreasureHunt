import React from 'react';
import { AppContext } from '../Context/AppContext.js';
import { CurrentRoomDiv, CurrentRoomTitleBar, CurrentRoomH2, CurrentRoomLi, CurrentRoomSpan } from '../StyledComponents';
import InventoryList from './InventoryList.js'

class CurrentRoom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: {},
        }
    }

    render() {
        return (
            <CurrentRoomDiv>
                <CurrentRoomTitleBar>
                    <CurrentRoomH2>{this.context.state.currentRoomData.title}</CurrentRoomH2>
                    <CurrentRoomH2>{this.context.state.currentRoomData.coordinates}</CurrentRoomH2>
                </CurrentRoomTitleBar>
                <ul>
                    <CurrentRoomLi><CurrentRoomSpan>Room ID:</CurrentRoomSpan>&nbsp;&nbsp;{this.context.state.currentRoomData.room_id}</CurrentRoomLi>
                    <CurrentRoomLi><CurrentRoomSpan>Description:</CurrentRoomSpan>&nbsp;&nbsp;{this.context.state.currentRoomData.description}</CurrentRoomLi>
                    <CurrentRoomLi><CurrentRoomSpan>Players:</CurrentRoomSpan> 
                        <InventoryList inventoryPlayers={this.context.state.currentRoomData.players} />
                    </CurrentRoomLi>  
                    <CurrentRoomLi><CurrentRoomSpan>Items:</CurrentRoomSpan> 
                        <InventoryList inventoryItems={this.context.state.currentRoomData.items} />
                    </CurrentRoomLi>
                    <CurrentRoomLi><CurrentRoomSpan>Messages:</CurrentRoomSpan> 
                        <InventoryList inventoryMessages={this.context.state.currentRoomData.messages} />
                    </CurrentRoomLi>
                </ul>
            </CurrentRoomDiv>
        );
    }
}

CurrentRoom.contextType = AppContext;

export default CurrentRoom;
