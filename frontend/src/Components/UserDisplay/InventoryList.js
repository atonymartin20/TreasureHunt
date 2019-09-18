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
            <ul>
                <li>No items</li>
            </ul>);
    }
}

export default InventoryList