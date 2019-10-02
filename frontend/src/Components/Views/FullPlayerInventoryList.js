import React from 'react';
import { InventoryListLi, InventoryEquipButton, UserInfoSpan, InventoryCarryButton, InventoryReceiveButton } from '../StyledComponents';
import { AppContext } from '../Context/AppContext.js';

class InventoryList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: {},
            disableAllButtons: false,
        }
    }

    UpdateOnCarry({item}) {
        this.setState({
            disableAllButtons: true,
        })
        this.context.GhostCarryItem({item})
        setTimeout(() => {
            this.context.UpdateCarriedItem();
        }, 6000)
        setTimeout(() => {
            this.context.GetUserData();
        }, this.context.state.cooldown + 1500)
        setTimeout(() => {
            this.setState({
                disableAllButtons: false,
            })
        }, 11000)
    }

    UpdateOnReceive() {
        this.setState({
            disableAllButtons: true,
        })
        this.context.GhostReceiveItem();
        setTimeout(() => {
            this.context.UpdateCarriedItem();
        }, 6000)
        setTimeout(() => {
            this.context.GetUserData();
        },this.context.state.cooldown + 1000)
        setTimeout(() => {
            this.setState({
                disableAllButtons: false,
            })
        }, 9000)
    }

    HideButton = ({item}) => {
        if (/(?:boots)/.test(item) || /(?:jacket)/.test(item)) {
            return false
        }
        else {
            return true
        }
    }

    EquipItem({item}) {
        this.setState({
            disableAllButtons: true,
        })
        this.context.EquipEquipment({item})
        setTimeout(() => {
            this.context.GetUserData();
        }, 8500)
        setTimeout(() => {
            this.setState({
                disableAllButtons: false,
            })
        }, 11000)
    }

    render() {
        if (this.context.state.userData.inventory) {
            return (
                <ul>
                    {this.context.state.userData.inventory.map(item => {
                        return <InventoryListLi key={Math.random()}><UserInfoSpan>{item}</UserInfoSpan><InventoryCarryButton onClick={() => {this.UpdateOnCarry({item})}} disabled={this.state.disableAllButtons === true} hidden={this.context.state.carriedItem === item}>Carry</InventoryCarryButton><InventoryReceiveButton onClick={() => {this.UpdateOnReceive()}} disabled={this.state.disableAllButtons === true} hidden={this.context.state.carriedItem !== item}>Receive</InventoryReceiveButton>
                        <InventoryEquipButton onClick={() => {this.EquipItem({item})}} disabled={this.state.disableAllButtons === true} hidden = {this.HideButton({item}) || this.context.state.equippedBoots === item || this.context.state.equippedJacket === item} >Equip</InventoryEquipButton><InventoryEquipButton disabled={true} hidden = {this.context.state.equippedJacket !== item && this.context.state.equippedBoots !== item}>Equipped</InventoryEquipButton></InventoryListLi>
                    })}
                </ul>
            );
        }
        else {
            return(
                <span>&nbsp;&nbsp;No items in inventory</span>
            );
        }
    }
}

InventoryList.contextType = AppContext;

export default InventoryList