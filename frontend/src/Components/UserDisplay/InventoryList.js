import React from 'react';
import { InventoryDropButton, InventorySellButton, UserInfoSpan } from '../StyledComponents';

function InventoryList(props) {
    let inventoryHasItems = props.inventory
    let currentRoom = props.currentRoom
    if (inventoryHasItems) {
        if (currentRoom === 1) {
            return (
                <ul>
                    {inventoryHasItems.map(item => {
                        return <li key={Math.random()}><UserInfoSpan>{item}</UserInfoSpan><InventorySellButton onClick={() => {props.sellItem({item})}}>Sell</InventorySellButton></li>
                    })}
                </ul>
            )
        }
        else {
            return (
                <ul>
                    {inventoryHasItems.map(item => {
                        return <li key={Math.random()}><UserInfoSpan>{item}</UserInfoSpan><InventoryDropButton onClick={() => {props.dropItem({item})}}>Drop</InventoryDropButton></li>
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

export default InventoryList