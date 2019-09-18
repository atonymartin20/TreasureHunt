import React from 'react';
import { AppContext } from '../Context/AppContext.js';


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
                    <li>Cooldown: {this.context.state.userData.speed}</li>
                    <li>Elevation: {this.context.state.userData.gold}</li>
                    <li>Players: 
                        {/* <InventoryList inventory={this.context.state.userData.inventory} /> */}
                    </li>  
                    <li>Items: 
                        {/* <InventoryList inventory={this.context.state.userData.inventory} /> */}
                    </li>
                    <li>Exits: 
                        {/* <InventoryList inventory={this.context.state.userData.inventory} /> */}
                    </li>
                    <li>Errors: 
                        {/* <InventoryList inventory={this.context.state.userData.inventory} /> */}
                    </li>
                    <li>Messages: 
                        {/* <InventoryList inventory={this.context.state.userData.inventory} /> */}
                    </li>
                    <li>Terrain: {this.context.state.userData.gold}</li>

                </ul>
            </div>
        );
    }
}

CurrentRoom.contextType = AppContext;

export default CurrentRoom;
