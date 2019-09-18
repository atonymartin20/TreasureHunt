import React from 'react';

function InventoryList(props) {
    let inventoryHasItems = props.inventoryItems;
    let inventoryHasPlayers = props.inventoryPlayers;
    let inventoryHasExits = props.inventoryExits;
    let inventoryHasErrors = props.inventoryErrors;
    let inventoryHasMessages = props.inventoryMessages;

    if (inventoryHasItems) {
        if (inventoryHasItems.length > 0) {
            return (
                <ul>
                    {inventoryHasItems.map(item => {
                        return <li key={Math.random()}>{item}</li>
                    })}
                </ul>
            );
        }
        else {
            return(
                <span>&nbsp;&nbsp;No items</span>
            );
        }
    }
    else if (inventoryHasPlayers) {
        if (inventoryHasPlayers.length > 0) {
            return (
                <ul>
                    {inventoryHasPlayers.map(player => {
                        return <li key={Math.random()}>{player}</li>
                    })}
                </ul>
            );
        }
        else {
            return(
                <span>&nbsp;&nbsp;No players</span>
            );
        }
    }
    else if (inventoryHasExits) {
        if (inventoryHasExits.length > 0) {
            return (
                <ul>
                    {inventoryHasExits.map(exit => {
                        return <li key={Math.random()}>{exit}</li>
                    })}
                </ul>
            );
        }
        else {
            return(
                <span>&nbsp;&nbsp;No exits</span>
            );
        }
    }
    else if (inventoryHasErrors) {
        if (inventoryHasErrors.length > 0) {
            return (
                <ul>
                    {inventoryHasErrors.map(error => {
                        return <li key={Math.random()}>{error}</li>
                    })}
                </ul>
            );
        }
        else {
            return(
                <span>&nbsp;&nbsp;No errors</span>
            );
        }
    }
    else if (inventoryHasMessages) {
        if (inventoryHasMessages.length > 0) {
            return (
                <ul>
                    {inventoryHasMessages.map(message => {
                        return <li key={Math.random()}>{message}</li>
                    })}
                </ul>
            );
        }
        else {
            return(
                <span>&nbsp;&nbsp;No messages</span>
            );
        }
    }
    else {
        return null
    }
}

export default InventoryList