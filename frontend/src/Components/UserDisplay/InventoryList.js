import React from 'react';

function InventoryList(props) {
    let inventoryHasItems = props.inventory
    
    if (inventoryHasItems) {
        return (
            <ul>
                {inventoryHasItems.map(item => {
                    return <li key={Math.random()}>{item}</li>
                })}
            </ul>);
    }
    else {
        return(
            <span>&nbsp;&nbsp;No items in inventory</span>
        );
    }
}

export default InventoryList