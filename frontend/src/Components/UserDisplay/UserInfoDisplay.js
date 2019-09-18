import React from 'react';
import InventoryList from './InventoryList.js'
import { AppContext } from '../Context/AppContext.js';


class UserInfoDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: {},
        }
    }

    render() {
        return (
            <div>
                <h2>User Info</h2>
                <ul>
                    <li>Name: {this.context.state.userData.name}</li>
                    <li>Cooldown: {this.context.state.userData.cooldown}</li>
                    <li>Encumbrance: {this.context.state.userData.encumbrance}</li>
                    <li>Strength: {this.context.state.userData.strength}</li>
                    <li>Speed: {this.context.state.userData.speed}</li>
                    <li>Gold: {this.context.state.userData.gold}</li>
                    <li>Inventory: 
                        <InventoryList inventory={this.context.state.userData.inventory} />
                    </li>  
                </ul>
            </div>
        );
    }
}

UserInfoDisplay.contextType = AppContext;

export default UserInfoDisplay;
