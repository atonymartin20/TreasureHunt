import React from 'react';
import { CurrentRoomItemPickUpButton } from '../StyledComponents';
import { AppContext } from '../Context/AppContext.js';

class InventoryList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: {},
            disablePickUpButton: false,
        }
    }

    UpdateOnPickUp({item}) {
        this.setState({
            disablePickUpButton: true
        })
        this.context.PickUpItem({item});
        setTimeout(() => {
            this.context.GetInitalRoomData();
        },this.context.state.cooldown + 5600)
        setTimeout(() => {
            this.context.GetUserData();
        },this.context.state.cooldown + 500)
        setTimeout(() => {
            this.setState({
                disablePickUpButton: false
            })
        }, 10000)
    }
    render() {
        // Checks to see if this.context.state.currentRoomData has been filled in yet.
        if(Object.keys(this.context.state.currentRoomData).length !== 0) {
            // Checks ListType being passed through props
            if (this.props.ListType === "players") {
                if ((this.context.state.currentRoomData.players).length > 5) {
                    let playerSpan = ''
                    for(let i = 0; i < 5; i++) {
                        playerSpan += `${this.context.state.currentRoomData.players[i]}, `
                    }
                    let remainingPlayers = this.context.state.currentRoomData.players.length - 5;
                    return (
                        <span>&nbsp;&nbsp;{playerSpan} and {remainingPlayers} more players.</span>
                    )
                }
                else if ((this.context.state.currentRoomData.players).length > 0) {
                    let playerSpan = ''
                    this.context.state.currentRoomData.players.map(player => {
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
            // Checks ListType being passed through props
            else if (this.props.ListType === "items") {
                if (Object.keys(this.context.state.currentRoomData.items).length > 0) {
                    return (
                        <ul>
                            {this.context.state.currentRoomData.items.map(item => {
                                return <li key={Math.random()}>{item}<CurrentRoomItemPickUpButton onClick={() => {this.UpdateOnPickUp({item})}} disabled={this.state.disablePickUpButton === true}>Pick Up</CurrentRoomItemPickUpButton></li>
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

            // Checks ListType being passed through props
            else if (this.props.ListType === "messages") {
                if ((this.context.state.currentRoomData.messages).length > 0) {
                    return (
                        <ul>
                            {this.context.state.currentRoomData.messages.map(message => {
                                return <li key={Math.random()}>{message}</li>
                            })}
                        </ul>
                    );
                }
                else if ((this.context.state.currentRoomData.messages).length === 1) {
                    let messageSpan = ''
                    this.context.state.currentRoomData.messages.map(message => {
                        return messageSpan += `${message}`
                    })
                        
                    return (
                        <span>&nbsp;&nbsp;{messageSpan}</span>
                        );
                }
                else {
                    return(
                        <span>&nbsp;&nbsp;No messages</span>
                    );
                }
            }

            // If the prop ListType doesn't match "players","items", or "messgaes" return null.
            else {
                return null
            }
        }

        // if this.context.state.currentRoomData hasn't been filled in yet return null
        else {
            return null
        }
    }
}

InventoryList.contextType = AppContext;

export default InventoryList;