import React from 'react';
import InventoryList from './InventoryList.js'
import { AppContext } from '../Context/AppContext.js';
import { UserInfoDiv, UserInfoH2, UserInfoLi, UserInfoSpan } from '../StyledComponents';

class UserInfoDisplay extends React.Component {
    render() {
        // All 3 prayers
        if(this.context.state.flying && this.context.state.ghostFriend && this.context.state.dash) {
            return (
                <UserInfoDiv>
                    <UserInfoH2>Player: {this.context.state.userData.name}</UserInfoH2>
                    <ul>
                        <UserInfoLi><UserInfoSpan>Encumbrance:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.userData.encumbrance}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Strength:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.userData.strength}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Speed:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.userData.speed}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Gold:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.userData.gold}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Coins Mined:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.coinCount}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Flying:</UserInfoSpan>&nbsp;&nbsp;activated</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Ghost Friend:</UserInfoSpan>&nbsp;&nbsp;activated</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Dash:</UserInfoSpan>&nbsp;&nbsp;activated</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Inventory:</UserInfoSpan><InventoryList /></UserInfoLi>
                    </ul>
                </UserInfoDiv>
            );
        }

        // Flying and Dash
        else if (this.context.state.flying && this.context.state.dash) {
            return (
                <UserInfoDiv>
                    <UserInfoH2>Player: {this.context.state.userData.name}</UserInfoH2>
                    <ul>
                        <UserInfoLi><UserInfoSpan>Encumbrance:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.userData.encumbrance}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Strength:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.userData.strength}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Speed:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.userData.speed}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Gold:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.userData.gold}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Coins Mined:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.coinCount}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Flying:</UserInfoSpan>&nbsp;&nbsp;activated</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Dash:</UserInfoSpan>&nbsp;&nbsp;activated</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Inventory:</UserInfoSpan><InventoryList /></UserInfoLi>
                    </ul>
                </UserInfoDiv>
            );
        }

        // Flying and Ghost Friend
        else if(this.context.state.flying && this.context.state.ghostFriend) {
            return (
                <UserInfoDiv>
                    <UserInfoH2>Player: {this.context.state.userData.name}</UserInfoH2>
                    <ul>
                        <UserInfoLi><UserInfoSpan>Encumbrance:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.userData.encumbrance}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Strength:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.userData.strength}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Speed:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.userData.speed}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Gold:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.userData.gold}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Coins Mined:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.coinCount}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Flying:</UserInfoSpan>&nbsp;&nbsp;activated</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Ghost Friend:</UserInfoSpan>&nbsp;&nbsp;activated</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Inventory:</UserInfoSpan><InventoryList /></UserInfoLi>
                    </ul>
                </UserInfoDiv>
            );
        }

        // Ghost Friend and Dash
        else if(this.context.state.ghostFriend && this.context.state.dash) {
            return (
                <UserInfoDiv>
                    <UserInfoH2>Player: {this.context.state.userData.name}</UserInfoH2>
                    <ul>
                        <UserInfoLi><UserInfoSpan>Encumbrance:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.userData.encumbrance}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Strength:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.userData.strength}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Speed:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.userData.speed}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Gold:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.userData.gold}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Coins Mined:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.coinCount}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Ghost Friend:</UserInfoSpan>&nbsp;&nbsp;activated</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Dash:</UserInfoSpan>&nbsp;&nbsp;activated</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Inventory:</UserInfoSpan><InventoryList /></UserInfoLi>
                    </ul>
                </UserInfoDiv>
            );
        }

        // Flying only
        else if(this.context.state.flying) {
            return (
                <UserInfoDiv>
                    <UserInfoH2>Player: {this.context.state.userData.name}</UserInfoH2>
                    <ul>
                        <UserInfoLi><UserInfoSpan>Encumbrance:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.userData.encumbrance}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Strength:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.userData.strength}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Speed:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.userData.speed}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Gold:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.userData.gold}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Coins Mined:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.coinCount}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Flying:</UserInfoSpan>&nbsp;&nbsp;activated</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Inventory:</UserInfoSpan><InventoryList /></UserInfoLi>
                    </ul>
                </UserInfoDiv>
            );
        }

        // Ghost Friend only
        else if(this.context.state.ghostFriend) {
            return (
                <UserInfoDiv>
                    <UserInfoH2>Player: {this.context.state.userData.name}</UserInfoH2>
                    <ul>
                        <UserInfoLi><UserInfoSpan>Encumbrance:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.userData.encumbrance}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Strength:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.userData.strength}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Speed:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.userData.speed}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Gold:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.userData.gold}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Coins Mined:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.coinCount}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Ghost Friend:</UserInfoSpan>&nbsp;&nbsp;activated</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Inventory:</UserInfoSpan><InventoryList /></UserInfoLi>
                    </ul>
                </UserInfoDiv>
            );
        }

        // Dash only
        else if(this.context.state.dash) {
            return (
                <UserInfoDiv>
                    <UserInfoH2>Player: {this.context.state.userData.name}</UserInfoH2>
                    <ul>
                        <UserInfoLi><UserInfoSpan>Encumbrance:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.userData.encumbrance}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Strength:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.userData.strength}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Speed:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.userData.speed}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Gold:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.userData.gold}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Coins Mined:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.coinCount}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Dash:</UserInfoSpan>&nbsp;&nbsp;activated</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Inventory:</UserInfoSpan><InventoryList /></UserInfoLi>
                    </ul>
                </UserInfoDiv>
            );
        }

        // No prayers active
        else {
            return (
                <UserInfoDiv>
                    <UserInfoH2>Player: {this.context.state.userData.name}</UserInfoH2>
                    <ul>
                        <UserInfoLi><UserInfoSpan>Encumbrance:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.userData.encumbrance}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Strength:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.userData.strength}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Speed:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.userData.speed}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Gold:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.userData.gold}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Coins Mined:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.coinCount}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Inventory:</UserInfoSpan><InventoryList /></UserInfoLi>
                    </ul>
                </UserInfoDiv>
            );
        }

    }
}

UserInfoDisplay.contextType = AppContext;

export default UserInfoDisplay;
