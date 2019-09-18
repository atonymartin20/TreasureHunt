import React from 'react';
import { AppContext } from '../Context/AppContext.js';
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
            <div>
                <h2>Current Room Info:</h2>
                <ul>
                    <li>Coordinates: {this.context.state.userInitData.coordinates}</li>
                    <li>Room ID: {this.context.state.userInitData.room_id}</li>
                    <li>Title: {this.context.state.userInitData.title}</li>
                    <li>Description: {this.context.state.userInitData.description}</li>
                    <li>Cooldown: {this.context.state.userInitData.cooldown}</li>
                    <li>Elevation: {this.context.state.userInitData.elevation}</li>
                    <li>Terrain: {this.context.state.userInitData.terrain}</li>
                    <li>Players: 
                        <InventoryList inventoryPlayers={this.context.state.userInitData.players} />
                    </li>  
                    <li>Items: 
                        <InventoryList inventoryItems={this.context.state.userInitData.items} />
                    </li>
                    <li>Exits: 
                        <InventoryList inventoryExits={this.context.state.userInitData.exits} />
                    </li>
                    <li>Errors: 
                        <InventoryList inventoryErrors={this.context.state.userInitData.errors} />
                    </li>
                    <li>Messages: 
                        <InventoryList inventoryMessages={this.context.state.userInitData.messages} />
                    </li>

                </ul>
            </div>
        );
    }
}

CurrentRoom.contextType = AppContext;

export default CurrentRoom;
