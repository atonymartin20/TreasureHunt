import React from 'react';
import { AppContext } from '../Context/AppContext.js';
import { CurrentRoomDiv, CurrentRoomH2, CurrentRoomLi, CurrentRoomSpan } from '../StyledComponents';
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
                <CurrentRoomH2>Current Room Info:</CurrentRoomH2>
                <ul>
                    <CurrentRoomLi><CurrentRoomSpan>Coordinates:</CurrentRoomSpan>&nbsp;&nbsp;{this.context.state.userInitData.coordinates}</CurrentRoomLi>
                    <CurrentRoomLi><CurrentRoomSpan>Room ID:</CurrentRoomSpan>&nbsp;&nbsp;{this.context.state.userInitData.room_id}</CurrentRoomLi>
                    <CurrentRoomLi><CurrentRoomSpan>Title:</CurrentRoomSpan>&nbsp;&nbsp;{this.context.state.userInitData.title}</CurrentRoomLi>
                    <CurrentRoomLi><CurrentRoomSpan>Description:</CurrentRoomSpan>&nbsp;&nbsp;{this.context.state.userInitData.description}</CurrentRoomLi>
                    <CurrentRoomLi><CurrentRoomSpan>Cooldown:</CurrentRoomSpan>&nbsp;&nbsp;{this.context.state.userInitData.cooldown}</CurrentRoomLi>
                    <CurrentRoomLi><CurrentRoomSpan>Elevation:</CurrentRoomSpan>&nbsp;&nbsp;{this.context.state.userInitData.elevation}</CurrentRoomLi>
                    <CurrentRoomLi><CurrentRoomSpan>Terrain:</CurrentRoomSpan>&nbsp;&nbsp;{this.context.state.userInitData.terrain}</CurrentRoomLi>
                    <CurrentRoomLi><CurrentRoomSpan>Players:</CurrentRoomSpan> 
                        <InventoryList inventoryPlayers={this.context.state.userInitData.players} />
                    </CurrentRoomLi>  
                    <CurrentRoomLi><CurrentRoomSpan>Items:</CurrentRoomSpan> 
                        <InventoryList inventoryItems={this.context.state.userInitData.items} />
                    </CurrentRoomLi>
                    <CurrentRoomLi><CurrentRoomSpan>Exits:</CurrentRoomSpan> 
                        <InventoryList inventoryExits={this.context.state.userInitData.exits} />
                    </CurrentRoomLi>
                    <CurrentRoomLi><CurrentRoomSpan>Errors:</CurrentRoomSpan> 
                        <InventoryList inventoryErrors={this.context.state.userInitData.errors} />
                    </CurrentRoomLi>
                    <CurrentRoomLi><CurrentRoomSpan>Messages:</CurrentRoomSpan> 
                        <InventoryList inventoryMessages={this.context.state.userInitData.messages} />
                    </CurrentRoomLi>

                </ul>
            </CurrentRoomDiv>
        );
    }
}

CurrentRoom.contextType = AppContext;

export default CurrentRoom;
