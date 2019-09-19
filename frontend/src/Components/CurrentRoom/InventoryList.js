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
            let playerSpan = ''
            inventoryHasPlayers.map(player => {
                return playerSpan += `${player}, ${'\xa0'} `
            })

            const removeTrailingComma = (string) => {
                let n = string.lastIndexOf(",");
                let a = string.substring(0, n);
                return a;
            }
            return (
                <span>&nbsp;&nbsp;{removeTrailingComma(playerSpan)}</span>
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
            let exitSpan = ''
            inventoryHasExits.map(exit => {
                let upper = exit.toUpperCase();
                return exitSpan += `${upper}, ${'\xa0'} `
            })

            const removeTrailingComma = (string) => {
                let n = string.lastIndexOf(",");
                let a = string.substring(0, n);
                return a;
            }
            return (
                <span>&nbsp;&nbsp;{removeTrailingComma(exitSpan)}</span>
            );
        }
        else {
            return(
                <span>&nbsp;&nbsp;No exits</span>
            );
        }
    }
    else if (inventoryHasErrors) {
        if (inventoryHasErrors.length === 1) {
            let errorSpan = ''
            inventoryHasErrors.map(error => {
                return errorSpan += `${error}`
            })

            return (
                <span>&nbsp;&nbsp;{errorSpan}</span>
            );
        }
        else if (inventoryHasErrors.length > 0) {
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
        if (inventoryHasMessages.length === 1) {
            let messageSpan = ''
            inventoryHasMessages.map(message => {
                return messageSpan += `${message}`
            })

            return (
                <span>&nbsp;&nbsp;{messageSpan}</span>
            );
        }
        else if (inventoryHasMessages.length > 0) {
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