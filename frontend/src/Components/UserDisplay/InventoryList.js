import React from 'react';
import { InventoryDropButton, InventorySellButton, UserInfoSpan } from '../StyledComponents';
import { AppContext } from '../Context/AppContext.js';

class InventoryList extends React.Component {
    UpdateOnSell({item}) {
        this.context.SellItem({item})
        setTimeout(() => {
            this.context.GetUserData();
        }, 6500)
    }
    UpdateOnDrop({item}) {
        this.context.DropItem({item});
        setTimeout(() => {
            this.context.GetUserData();
        },6500)
    }
    render() {
        if (this.context.state.userData.inventory) {
            if (this.context.state.currentRoomData.room_id === 1) {
                return (
                    <ul>
                        {this.context.state.userData.inventory.map(item => {
                            return <li key={Math.random()}><UserInfoSpan>{item}</UserInfoSpan><InventorySellButton onClick={() => {this.UpdateOnSell({item})}}>Sell</InventorySellButton></li>
                        })}
                    </ul>
                )
            }
            else {
                return (
                    <ul>
                        {this.context.state.userData.inventory.map(item => {
                            return <li key={Math.random()}><UserInfoSpan>{item}</UserInfoSpan><InventoryDropButton onClick={() => {this.UpdateOnDrop({item})}}>Drop</InventoryDropButton></li>
                            // return <li key={Math.random()}><UserInfoSpan>{item}</UserInfoSpan><InventoryDropButton onClick={() => {props.dropItem({item})}}>Drop</InventoryDropButton></li>
    
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