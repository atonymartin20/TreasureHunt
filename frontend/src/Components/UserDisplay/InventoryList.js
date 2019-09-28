import React from 'react';
import { InventoryDropButton, InventoryTransmogButton, InventorySellButton, InventoryEquipButton, UserInfoSpan } from '../StyledComponents';
import { AppContext } from '../Context/AppContext.js';

class InventoryList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: {},
            disableAllButtons: false,
        }
    }

    UpdateOnSell({item}) {
        this.setState({
            disableAllButtons: true,
        })
        this.context.SellItem({item})
        setTimeout(() => {
            this.context.GetUserData();
        }, 6500)
        setTimeout(() => {
            this.setState({
                disableAllButtons: false,
            })
        }, 11000)
    }

    UpdateOnDrop({item}) {
        this.setState({
            disableAllButtons: true,
        })
        this.context.DropItem({item});
        setTimeout(() => {
            this.context.GetUserData();
        },this.context.state.cooldown + 1000)
        setTimeout(() => {
            this.context.GetInitalRoomData();
        },this.context.state.cooldown + 8800)
        setTimeout(() => {
            this.setState({
                disableAllButtons: false,
            })
        }, 11000)
    }

    Transmog = ({item}) => {
        this.setState({
            disableAllButtons: true,
        })
        this.context.TransmogItem({item})
        setTimeout(() => {
            this.context.GetUserData();
        }, 11000)
        setTimeout(() => {
            this.context.GetInitalRoomData();
        },14000)
        setTimeout(() => {
            this.setState({
                disableAllButtons: false,
            })
        }, 15000) // Disables transmog button for 11 seconds
    }

    HideButton = ({item}) => {
        if (/(?:boots)/.test(item) || /(?:jacket)/.test(item)) {
            return false
        }
        else {
            return true
        }
    }
    render() {
        if (this.context.state.userData.inventory) {
            if (this.context.state.currentRoomData.room_id === 1) {
                return (
                    <ul>
                        {this.context.state.userData.inventory.map(item => {
                            return (
                                <li key={Math.random()}><UserInfoSpan>{item}</UserInfoSpan><InventorySellButton onClick={() => {this.UpdateOnSell({item})}} disabled={this.state.disableAllButtons === true}>Sell</InventorySellButton><InventoryEquipButton onClick={() => {this.UpdateOnSell({item})}} disabled={this.state.disableAllButtons === true} hidden = {this.HideButton({item})}>Equip</InventoryEquipButton></li>
                            )
                        })}
                    </ul>
                )
            }

            if (this.context.state.currentRoomData.room_id === 495) {
                return (
                    <ul>
                        {this.context.state.userData.inventory.map(item => {
                            return <li key={Math.random()}><UserInfoSpan>{item}</UserInfoSpan><InventoryTransmogButton onClick={() => {this.Transmog({item})}} disabled={this.state.disableAllButtons === true}>Transmogrify</InventoryTransmogButton><InventoryEquipButton onClick={() => {this.UpdateOnSell({item})}} disabled={this.state.disableAllButtons === true} hidden = {this.HideButton({item})}>Equip</InventoryEquipButton></li>
                        })}
                    </ul>
                )
            }
            else {

                return (
                    <ul>
                        {this.context.state.userData.inventory.map(item => {
                            return <li key={Math.random()}><UserInfoSpan>{item}</UserInfoSpan><InventoryDropButton onClick={() => {this.UpdateOnDrop({item})}} disabled={this.state.disableAllButtons === true} >Drop</InventoryDropButton><InventoryEquipButton onClick={() => {this.UpdateOnSell({item})}} disabled={this.state.disableAllButtons === true} hidden = {this.HideButton({item})}>Equip</InventoryEquipButton></li>
                        })}
                    </ul>);
    
            }
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