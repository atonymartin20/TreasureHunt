import React from 'react';
import InventoryList from './InventoryList.js'
import { AppContext } from '../Context/AppContext.js';
import { UserInfoDiv, UserInfoH2, UserInfoLi, UserInfoSpan } from '../StyledComponents';


class UserInfoDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: {},
        }
    }

    render() {
        return (
            <UserInfoDiv>
                <UserInfoH2>User Info:</UserInfoH2>
                <ul>
                    <UserInfoLi><UserInfoSpan>Name:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.userData.name}</UserInfoLi>
                    <UserInfoLi><UserInfoSpan>Cooldown:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.userData.cooldown}</UserInfoLi>
                    <UserInfoLi><UserInfoSpan>Encumbrance:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.userData.encumbrance}</UserInfoLi>
                    <UserInfoLi><UserInfoSpan>Strength:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.userData.strength}</UserInfoLi>
                    <UserInfoLi><UserInfoSpan>Speed:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.userData.speed}</UserInfoLi>
                    <UserInfoLi><UserInfoSpan>Gold:</UserInfoSpan>&nbsp;&nbsp;{this.context.state.userData.gold}</UserInfoLi>
                    <UserInfoLi><UserInfoSpan>Inventory:</UserInfoSpan>
                        <InventoryList inventory={this.context.state.userData.inventory} />
                    </UserInfoLi>  
                </ul>
            </UserInfoDiv>
        );
    }
}

UserInfoDisplay.contextType = AppContext;

export default UserInfoDisplay;
