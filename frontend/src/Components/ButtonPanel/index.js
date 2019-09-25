import React from 'react';
import { AppContext } from '../Context/AppContext.js';
import { ButtonPanelDiv, MovementButton, MineButton } from '../StyledComponents';

class ButtonPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            northAvailable: true,
            southAvailable: true,
            westAvailable: true,
            eastAvailable: true,
            disableMovementButtons: false,
            disableMineButton: false,
        }
    }

    componentDidMount() {
        this.UpdateRoomData();
    }

    componentDidUpdate() {
        this.UpdateRoomData();
    }

    MoveNorth = () => {
        this.setState({
            disableMovementButtons: true
        })
        this.context.MoveNorth()
        setTimeout(() => {
            this.setState({
                disableMovementButtons: false
            })
        }, 6000)
    }
    
    MoveSouth = () => {
        this.setState({
            disableMovementButtons: true
        })
        this.context.MoveSouth()
        setTimeout(() => {
            this.setState({
                disableMovementButtons: false
            })
        }, 6000)
    }

    MoveWest = () => {
        this.setState({
            disableMovementButtons: true
        })
        this.context.MoveWest()
        setTimeout(() => {
            this.setState({
                disableMovementButtons: false
            })
        }, 6000)
    }

    MoveEast = () => {
        this.setState({
            disableMovementButtons: true
        })
        this.context.MoveEast()
        setTimeout(() => {
            this.setState({
                disableMovementButtons: false
            })
        }, 6000)
    }

    MineCoin = () => {
        this.setState({
            disableMineButton: true
        })
        // call context mining function
        setTimeout(() => {
            this.setState({
                disableMineButton: false
            })
        }, 15000) // Disables button for  15 seconds
    }

    UpdateRoomData = () => {
        if (this.context.state.currentRoomData.exits) {
            if (this.context.state.currentRoomData.exits.includes("n") && this.state.northAvailable === false) {
                this.setState({
                    northAvailable: true
                })
            }

            if (this.context.state.currentRoomData.exits.includes("n") === false && this.state.northAvailable === true) {
                this.setState({
                    northAvailable: false
                })
            }

            if (this.context.state.currentRoomData.exits.includes("s") && this.state.southAvailable === false) {
                this.setState({
                    southAvailable: true
                })
            }

            if (this.context.state.currentRoomData.exits.includes("s") === false && this.state.southAvailable === true) {
                this.setState({
                    southAvailable: false
                })
            }

            if (this.context.state.currentRoomData.exits.includes("w") && this.state.westAvailable === false) {
                this.setState({
                    westAvailable: true
                })
            }

            if (this.context.state.currentRoomData.exits.includes("w") === false && this.state.westAvailable === true) {
                this.setState({
                    westAvailable: false
                })
            }

            if (this.context.state.currentRoomData.exits.includes("e") && this.state.eastAvailable === false) {
                this.setState({
                    eastAvailable: true
                })
            }

            if (this.context.state.currentRoomData.exits.includes("e") === false && this.state.eastAvailable === true) {
                this.setState({
                    eastAvailable: false
                })
            }
        }
    }
    
    render() {
        // If context.state.currentRoomData has been grabbed.
        if (this.context.state.currentRoomData) {
            // If you are in the Mine - Room 250
            if (this.context.state.currentRoomData.room_id === 250) {
                // render regular buttons plus a mine button
                return (
                    <ButtonPanelDiv>
                        <MovementButton onClick={this.MoveNorth} disabled={this.state.northAvailable === false || this.state.disableMovementButtons === true}>Move North</MovementButton>
                        <MovementButton onClick={this.MoveSouth} disabled={this.state.southAvailable === false || this.state.disableMovementButtons === true}>Move South</MovementButton>
                        <MovementButton onClick={this.MoveWest} disabled={this.state.westAvailable === false || this.state.disableMovementButtons === true}>Move West</MovementButton>
                        <MovementButton onClick={this.MoveEast} disabled={this.state.eastAvailable === false || this.state.disableMovementButtons === true}>Move East</MovementButton>
                        <MineButton onClick={this.MineCoin} disabled={this.state.disableMineButton === true}>Mine Coin</MineButton>
                    </ButtonPanelDiv>
                );
            }
        }
        // If context hasn't been set yet return null
        else {
            return null
        }
        return (
            <ButtonPanelDiv>
                <MovementButton onClick={this.MoveNorth} disabled={this.state.northAvailable === false || this.state.disableMovementButtons === true}>Move North</MovementButton>
                <MovementButton onClick={this.MoveSouth} disabled={this.state.southAvailable === false || this.state.disableMovementButtons === true}>Move South</MovementButton>
                <MovementButton onClick={this.MoveWest} disabled={this.state.westAvailable === false || this.state.disableMovementButtons === true}>Move West</MovementButton>
                <MovementButton onClick={this.MoveEast} disabled={this.state.eastAvailable === false || this.state.disableMovementButtons === true}>Move East</MovementButton>
            </ButtonPanelDiv>
        );
    }
}

ButtonPanel.contextType = AppContext;

export default ButtonPanel;
