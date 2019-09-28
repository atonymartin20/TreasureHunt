import React from 'react';
import { InventoryDropButton, InventoryTransmogButton, InventorySellButton, UserInfoSpan } from '../StyledComponents';
import { AppContext } from '../Context/AppContext.js';

class InventoryList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: {},
            disableDropButton: false,
            disableSellButton: false,
            disableTransmogButton: false,
        }
    }
    UpdateOnSell({item}) {
        this.setState({
            disableSellButton: true
        })
        this.context.SellItem({item})
        setTimeout(() => {
            this.context.GetUserData();
        }, 6500)
        setTimeout(() => {
            this.setState({
                disableSellButton: false
            })
        }, 11000)
    }

    UpdateOnDrop({item}) {
        this.setState({
            disableDropButton: true
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
                disableDropButton: false
            })
        }, 11000)
    }

    Transmog = ({item}) => {
        this.setState({
            disableTransmogButton: true,
        })
        this.context.TransmogItem({item})
        setTimeout(() => {
            this.context.GetUserData();
        }, this.context.state.cooldown + 1000)
        setTimeout(() => {
            this.context.GetInitalRoomData();
        },this.context.state.cooldown + 8800)
        setTimeout(() => {
            this.setState({
                disableTransmogButton: false,
            })
        }, 11000) // Disables transmog button for 11 seconds
    }
    render() {
        if (this.context.state.userData.inventory) {
            if (this.context.state.currentRoomData.room_id === 1) {
                return (
                    <ul>
                        {this.context.state.userData.inventory.map(item => {
                            return <li key={Math.random()}><UserInfoSpan>{item}</UserInfoSpan><InventorySellButton onClick={() => {this.UpdateOnSell({item})}} disabled={this.state.disableSellButton === true}>Sell</InventorySellButton></li>
                        })}
                    </ul>
                )
            }

            if (this.context.state.currentRoomData.room_id === 495) {
                return (
                    <ul>
                        {this.context.state.userData.inventory.map(item => {
                            return <li key={Math.random()}><UserInfoSpan>{item}</UserInfoSpan><InventoryTransmogButton onClick={() => {this.Transmog({item})}} disabled={this.state.disableTransmogButton === true}>Transmogrify</InventoryTransmogButton></li>
                        })}
                    </ul>
                )
            }
            else {
                return (
                    <ul>
                        {this.context.state.userData.inventory.map(item => {
                            return <li key={Math.random()}><UserInfoSpan>{item}</UserInfoSpan><InventoryDropButton onClick={() => {this.UpdateOnDrop({item})}} disabled={this.state.disableDropButton === true}>Drop</InventoryDropButton></li>
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