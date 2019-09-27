import React from 'react';
import InventoryList from './InventoryList.js'
import { AppContext } from '../Context/AppContext.js';
import { UserInfoDiv, UserInfoH2, UserInfoLi, UserInfoSpan } from '../StyledComponents';

class UserInfoDisplay extends React.Component {
    render() {
        if(this.context.state.flying === 'activated') {
            return (
                <UserInfoDiv>
                    <UserInfoH2>Player: {this.context.state.userData.name}</UserInfoH2>
                    <ul>
                        <UserInfoLi><UserInfoSpan>Encumbrance:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.userData.encumbrance}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Strength:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.userData.strength}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Gold:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.userData.gold}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Coins Mined:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.coinCount}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Flying:</UserInfoSpan>&nbsp;&nbsp;activated</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Inventory:</UserInfoSpan><InventoryList /></UserInfoLi>
                    </ul>
                </UserInfoDiv>
            );
        }
        else {
            console.log(this.context.state.flying, localStorage.getItem('flight'))
            return (
                <UserInfoDiv>
                    <UserInfoH2>Player: {this.context.state.userData.name}</UserInfoH2>
                    <ul>
                        <UserInfoLi><UserInfoSpan>Encumbrance:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.userData.encumbrance}</UserInfoLi>
                        <UserInfoLi><UserInfoSpan>Strength:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.userData.strength}</UserInfoLi>
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
