import React from 'react';
import { AppContext } from '../Context/AppContext.js';
import { ButtonPanelDiv, MovementButton, MineButton, PrayButton, NameChangeInput, NameChangeButton } from '../StyledComponents';

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
            disablePrayButton: false,
            disableNameChangeButton: false,
            newName: '',
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
        this.context.MineOneCoin()
        setTimeout(() => {
            this.setState({
                disableMineButton: false
            })
        }, 15000) // Disables button for 15 seconds
    }
    
    Pray = () => {
        this.setState({
            disablePrayButton: true
        })
        this.context.PrayAtAltar()
        setTimeout(() => {
            this.setState({
                disablePrayButton: false
            })
        }, 10000) // Disables pray button for 10 seconds
    }

    NameChange = () => {
        this.setState({
            disableNameChangeButton: true
        })
        this.context.RenameCharacter()
        setTimeout(() => {
            this.setState({
                disableNameChangeButton: false
            })
        }, 10000) // Disables name change button for 10 seconds
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
                // render movement buttons plus a mine button
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
            // Else if you are at the Pirate Ry's Name Change shop - Room 467
            else if (this.context.state.currentRoomData.room_id === 467) {
                // render movement buttons plus a name change button and a name change input field
                return (
                    <ButtonPanelDiv>
                        <MovementButton onClick={this.MoveNorth} disabled={this.state.northAvailable === false || this.state.disableMovementButtons === true}>Move North</MovementButton>
                        <MovementButton onClick={this.MoveSouth} disabled={this.state.southAvailable === false || this.state.disableMovementButtons === true}>Move South</MovementButton>
                        <MovementButton onClick={this.MoveWest} disabled={this.state.westAvailable === false || this.state.disableMovementButtons === true}>Move West</MovementButton>
                        <MovementButton onClick={this.MoveEast} disabled={this.state.eastAvailable === false || this.state.disableMovementButtons === true}>Move East</MovementButton>
                        <NameChangeInput />
                        <NameChangeButton onClick={this.NameChange} disable={this.state.disableNameChangeButton === true}>Change Name</NameChangeButton>
                    </ButtonPanelDiv>
                );
            }
            // Else if you are at a shrine - Rooms 461, 22, 499
            else if (this.context.state.currentRoomData.room_id === 22 || this.context.state.currentRoomData.room_id === 461 || this.context.state.currentRoomData.room_id === 499) {
                // render movement buttons plus Pray button
                return (
                    <ButtonPanelDiv>
                        <MovementButton onClick={this.MoveNorth} disabled={this.state.northAvailable === false || this.state.disableMovementButtons === true}>Move North</MovementButton>
                        <MovementButton onClick={this.MoveSouth} disabled={this.state.southAvailable === false || this.state.disableMovementButtons === true}>Move South</MovementButton>
                        <MovementButton onClick={this.MoveWest} disabled={this.state.westAvailable === false || this.state.disableMovementButtons === true}>Move West</MovementButton>
                        <MovementButton onClick={this.MoveEast} disabled={this.state.eastAvailable === false || this.state.disableMovementButtons === true}>Move East</MovementButton>
                        <PrayButton onClick={this.Pray} disable={this.state.disablePrayButton === true}>Pray</PrayButton>
                    </ButtonPanelDiv>
                );
            }
            // Else if just a regular node
            else {
                // render movement buttons
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
        // If context hasn't been set yet return null
        else {
            return null
        }
    }
}

ButtonPanel.contextType = AppContext;

export default ButtonPanel;
