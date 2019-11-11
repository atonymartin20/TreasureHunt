import React from 'react';
import { AppContext } from '../Context/AppContext.js';
import { ViewPanelDiv, UserInfoH2, UserInfoLi, UserInfoSpan } from '../StyledComponents';
import FullPlayerInventoryList from './FullPlayerInventoryList.js';

class FullPlayer extends React.Component{
    render(){
        // All 3 prayers
        if(this.context.state.flying && this.context.state.ghostFriend && this.context.state.dash) {
            return (
                <ViewPanelDiv>
                    <UserInfoH2>Player: {this.context.state.userData.name}</UserInfoH2>
                    <ul>
                        <UserInfoLi><UserInfoSpan>Encumbrance:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.userData.encumbrance}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Strength:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.userData.strength}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Speed:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.userData.speed}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Cooldown:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.userData.cooldown}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Status:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.userData.status}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Messages:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.userData.messages}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Errors:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.userData.errors}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Gold:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.userData.gold}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Coins Mined:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.coinCount}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Flying:</UserInfoSpan>&nbsp;&nbsp;activated</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Ghost Friend:</UserInfoSpan>&nbsp;&nbsp;activated</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Dash:</UserInfoSpan>&nbsp;&nbsp;activated</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Carried Item:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.carriedItem}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Inventory:</UserInfoSpan><FullPlayerInventoryList /></UserInfoLi>
                    </ul>
                </ViewPanelDiv>
            );
        }

        // Flying and Dash
        else if (this.context.state.flying && this.context.state.dash) {
            return (
                <ViewPanelDiv>
                    <UserInfoH2>Player: {this.context.state.userData.name}</UserInfoH2>
                    <ul>
                        <UserInfoLi><UserInfoSpan>Encumbrance:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.userData.encumbrance}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Strength:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.userData.strength}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Speed:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.userData.speed}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Cooldown:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.userData.cooldown}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Status:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.userData.status}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Messages:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.userData.messages}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Errors:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.userData.errors}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Gold:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.userData.gold}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Coins Mined:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.coinCount}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Flying:</UserInfoSpan>&nbsp;&nbsp;activated</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Ghost Friend:</UserInfoSpan>&nbsp;&nbsp;false</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Dash:</UserInfoSpan>&nbsp;&nbsp;activated</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Carried Item:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.carriedItem}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Inventory:</UserInfoSpan><FullPlayerInventoryList /></UserInfoLi>
                    </ul>
                </ViewPanelDiv>
            );
        }

        // Flying and Ghost Friend
        else if(this.context.state.flying && this.context.state.ghostFriend) {
            return (
                <ViewPanelDiv>
                    <UserInfoH2>Player: {this.context.state.userData.name}</UserInfoH2>
                    <ul>
                        <UserInfoLi><UserInfoSpan>Encumbrance:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.userData.encumbrance}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Strength:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.userData.strength}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Speed:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.userData.speed}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Cooldown:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.userData.cooldown}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Status:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.userData.status}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Messages:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.userData.messages}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Errors:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.userData.errors}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Gold:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.userData.gold}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Coins Mined:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.coinCount}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Flying:</UserInfoSpan>&nbsp;&nbsp;activated</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Ghost Friend:</UserInfoSpan>&nbsp;&nbsp;activated</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Dash:</UserInfoSpan>&nbsp;&nbsp;false</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Carried Item:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.carriedItem}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Inventory:</UserInfoSpan><FullPlayerInventoryList /></UserInfoLi>
                    </ul>
                </ViewPanelDiv>
            );
        }

        // Ghost Friend and Dash
        else if(this.context.state.ghostFriend && this.context.state.dash) {
            return (
                <ViewPanelDiv>
                    <UserInfoH2>Player: {this.context.state.userData.name}</UserInfoH2>
                    <ul>
                        <UserInfoLi><UserInfoSpan>Encumbrance:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.userData.encumbrance}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Strength:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.userData.strength}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Speed:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.userData.speed}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Cooldown:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.userData.cooldown}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Status:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.userData.status}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Messages:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.userData.messages}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Errors:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.userData.errors}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Gold:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.userData.gold}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Coins Mined:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.coinCount}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Flying:</UserInfoSpan>&nbsp;&nbsp;false</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Ghost Friend:</UserInfoSpan>&nbsp;&nbsp;activated</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Dash:</UserInfoSpan>&nbsp;&nbsp;activated</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Carried Item:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.carriedItem}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Inventory:</UserInfoSpan><FullPlayerInventoryList /></UserInfoLi>
                    </ul>
                </ViewPanelDiv>
            );
        }

        // Flying only
        else if(this.context.state.flying) {
            return (
                <ViewPanelDiv>
                    <UserInfoH2>Player: {this.context.state.userData.name}</UserInfoH2>
                    <ul>
                        <UserInfoLi><UserInfoSpan>Encumbrance:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.userData.encumbrance}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Strength:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.userData.strength}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Speed:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.userData.speed}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Cooldown:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.userData.cooldown}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Status:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.userData.status}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Messages:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.userData.messages}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Errors:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.userData.errors}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Gold:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.userData.gold}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Coins Mined:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.coinCount}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Flying:</UserInfoSpan>&nbsp;&nbsp;activated</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Ghost Friend:</UserInfoSpan>&nbsp;&nbsp;false</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Dash:</UserInfoSpan>&nbsp;&nbsp;false</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Carried Item:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.carriedItem}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Inventory:</UserInfoSpan><FullPlayerInventoryList /></UserInfoLi>
                    </ul>
                </ViewPanelDiv>
            );
        }

        // Ghost Friend only
        else if(this.context.state.ghostFriend) {
            return (
                <ViewPanelDiv>
                    <UserInfoH2>Player: {this.context.state.userData.name}</UserInfoH2>
                    <ul>
                        <UserInfoLi><UserInfoSpan>Encumbrance:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.userData.encumbrance}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Strength:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.userData.strength}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Speed:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.userData.speed}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Cooldown:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.userData.cooldown}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Status:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.userData.status}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Messages:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.userData.messages}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Errors:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.userData.errors}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Gold:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.userData.gold}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Coins Mined:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.coinCount}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Flying:</UserInfoSpan>&nbsp;&nbsp;false</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Ghost Friend:</UserInfoSpan>&nbsp;&nbsp;activated</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Dash:</UserInfoSpan>&nbsp;&nbsp;false</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Carried Item:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.carriedItem}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Inventory:</UserInfoSpan><FullPlayerInventoryList /></UserInfoLi>
                    </ul>
                </ViewPanelDiv>
            );
        }

        // Dash only
        else if(this.context.state.dash) {
            return (
                <ViewPanelDiv>
                    <UserInfoH2>Player: {this.context.state.userData.name}</UserInfoH2>
                    <ul>
                        <UserInfoLi><UserInfoSpan>Encumbrance:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.userData.encumbrance}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Strength:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.userData.strength}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Speed:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.userData.speed}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Cooldown:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.userData.cooldown}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Status:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.userData.status}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Messages:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.userData.messages}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Errors:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.userData.errors}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Gold:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.userData.gold}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Coins Mined:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.coinCount}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Flying:</UserInfoSpan>&nbsp;&nbsp;false</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Ghost Friend:</UserInfoSpan>&nbsp;&nbsp;false</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Dash:</UserInfoSpan>&nbsp;&nbsp;activated</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Carried Item:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.carriedItem}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Inventory:</UserInfoSpan><FullPlayerInventoryList /></UserInfoLi>
                    </ul>
                </ViewPanelDiv>
            );
        }

        // No prayers active
        else {
            return (
                <ViewPanelDiv>
                    <UserInfoH2>Player: {this.context.state.userData.name}</UserInfoH2>
                    <ul>
                        <UserInfoLi><UserInfoSpan>Encumbrance:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.userData.encumbrance}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Strength:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.userData.strength}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Speed:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.userData.speed}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Cooldown:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.userData.cooldown}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Status:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.userData.status}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Messages:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.userData.messages}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Errors:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.userData.errors}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Gold:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.userData.gold}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Coins Mined:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.coinCount}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Flying:</UserInfoSpan>&nbsp;&nbsp;false</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Ghost Friend:</UserInfoSpan>&nbsp;&nbsp;false</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Dash:</UserInfoSpan>&nbsp;&nbsp;false</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Carried Item:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.carriedItem}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Inventory:</UserInfoSpan><FullPlayerInventoryList /></UserInfoLi>
                    </ul>
                </ViewPanelDiv>
            );
        }
    }
}

FullPlayer.contextType = AppContext;

export default FullPlayer;
