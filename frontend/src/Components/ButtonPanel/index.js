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
            disableAllButtons: false,
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
            disableAllButtons: true,
            disableMovementButtons: true
        })
        this.context.MoveNorth()
        setTimeout(() => {
            this.setState({
                disableAllButtons: false,
                disableMovementButtons: false
            })
        }, this.context.state.cooldown +500)
    }
    
    FlyNorth = () => {
        this.setState({
            disableAllButtons: true,
            disableMovementButtons: true
        })
        this.context.FlyNorth()
        setTimeout(() => {
            this.setState({
                disableAllButtons: false,
                disableMovementButtons: false
            })
        }, this.context.state.cooldown +500)
    }

    MoveSouth = () => {
        this.setState({
            disableAllButtons: true,
            disableMovementButtons: true
        })
        this.context.MoveSouth()
        setTimeout(() => {
            this.setState({
                disableAllButtons: false,
                disableMovementButtons: false
            })
        }, this.context.state.cooldown +500)
    }

    FlySouth = () => {
        this.setState({
            disableAllButtons: true,
            disableMovementButtons: true
        })
        this.context.FlySouth()
        setTimeout(() => {
            this.setState({
                disableAllButtons: false,
                disableMovementButtons: false
            })
        }, this.context.state.cooldown +500)
    }

    MoveWest = () => {
        this.setState({
            disableAllButtons: true,
            disableMovementButtons: true
        })
        this.context.MoveWest()
        setTimeout(() => {
            this.setState({
                disableAllButtons: false,
                disableMovementButtons: false
            })
        }, this.context.state.cooldown +500)
    }

    FlyWest = () => {
        this.setState({
            disableAllButtons: true,
            disableMovementButtons: true
        })
        this.context.FlyWest()
        setTimeout(() => {
            this.setState({
                disableAllButtons: false,
                disableMovementButtons: false
            })
        }, this.context.state.cooldown +500)
    }

    MoveEast = () => {
        this.setState({
            disableAllButtons: true,
            disableMovementButtons: true
        })
        this.context.MoveEast()
        setTimeout(() => {
            this.setState({
                disableAllButtons: false,
                disableMovementButtons: false
            })
        }, this.context.state.cooldown +500)
    }

    FlyEast = () => {
        this.setState({
            disableAllButtons: true,
            disableMovementButtons: true
        })
        this.context.FlyEast()
        setTimeout(() => {
            this.setState({
                disableAllButtons: false,
                disableMovementButtons: false
            })
        }, this.context.state.cooldown +500)
    }

    MineCoin = () => {
        this.setState({
            disableAllButtons: true,
            disableMineButton: true
        })
        this.context.MineOneCoin()
        setTimeout(() => {
            this.setState({
                disableAllButtons: false,
                disableMineButton: false
            })
        }, 15000) // Disables button for 15 seconds
    }
    
    Pray = () => {
        this.setState({
            disableAllButtons: true,
            disablePrayButton: true
        })
        this.context.PrayAtAltar()
        setTimeout(() => {
            this.setState({
                disableAllButtons: false,
                disablePrayButton: false
            })
        }, 50000) // Disables pray button for 50 seconds
    }

    NameChange = () => {
        this.setState({
            disableAllButtons: true,
            disableNameChangeButton: true
        })
        this.context.RenameCharacter()
        setTimeout(() => {
            this.setState({
                disableAllButtons: false,
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
            if(this.context.state.flying === 'activated') {
                if (this.context.state.currentRoomData.room_id === 250) {
                    // render movement buttons plus a mine button
                    return (
                        <ButtonPanelDiv>
                            <MovementButton onClick={this.FlyNorth} disabled={this.state.northAvailable === false || this.state.disableMovementButtons === true || this.state.disableAllButtons === true}>Move North</MovementButton>
                            <MovementButton onClick={this.FlySouth} disabled={this.state.southAvailable === false || this.state.disableMovementButtons === true || this.state.disableAllButtons === true}>Move South</MovementButton>
                            <MovementButton onClick={this.FlyWest} disabled={this.state.westAvailable === false || this.state.disableMovementButtons === true || this.state.disableAllButtons === true}>Move West</MovementButton>
                            <MovementButton onClick={this.FlyEast} disabled={this.state.eastAvailable === false || this.state.disableMovementButtons === true || this.state.disableAllButtons === true}>Move East</MovementButton>
                            <MineButton onClick={this.MineCoin} disabled={this.state.disableMineButton === true || this.state.disableAllButtons === true}>Mine Coin</MineButton>
                        </ButtonPanelDiv>
                    );
                }
                // if you are at the Pirate Ry's Name Change shop - Room 467
                if (this.context.state.currentRoomData.room_id === 467) {
                    // render movement buttons plus a name change button and a name change input field
                    return (
                        <ButtonPanelDiv>
                            <MovementButton onClick={this.FlyNorth} disabled={this.state.northAvailable === false || this.state.disableMovementButtons === true || this.state.disableAllButtons === true}>Move North</MovementButton>
                            <MovementButton onClick={this.FlySouth} disabled={this.state.southAvailable === false || this.state.disableMovementButtons === true || this.state.disableAllButtons === true}>Move South</MovementButton>
                            <MovementButton onClick={this.FlyWest} disabled={this.state.westAvailable === false || this.state.disableMovementButtons === true || this.state.disableAllButtons === true}>Move West</MovementButton>
                            <MovementButton onClick={this.FlyEast} disabled={this.state.eastAvailable === false || this.state.disableMovementButtons === true || this.state.disableAllButtons === true}>Move East</MovementButton>
                            <NameChangeInput />
                            <NameChangeButton onClick={this.NameChange} disabled={this.state.disableNameChangeButton === true || this.state.disableAllButtons === true}>Change Name</NameChangeButton>
                        </ButtonPanelDiv>
                    );
                }
                // if you are at a shrine - Rooms 461, 22, 499
                if (this.context.state.currentRoomData.room_id === 22 || this.context.state.currentRoomData.room_id === 461 || this.context.state.currentRoomData.room_id === 499) {
                    // render movement buttons plus Pray button
                    return (
                        <ButtonPanelDiv>
                            <MovementButton onClick={this.FlyNorth} disabled={this.state.northAvailable === false || this.state.disableMovementButtons === true || this.state.disableAllButtons === true}>Move North</MovementButton>
                            <MovementButton onClick={this.FlySouth} disabled={this.state.southAvailable === false || this.state.disableMovementButtons === true || this.state.disableAllButtons === true}>Move South</MovementButton>
                            <MovementButton onClick={this.FlyWest} disabled={this.state.westAvailable === false || this.state.disableMovementButtons === true || this.state.disableAllButtons === true}>Move West</MovementButton>
                            <MovementButton onClick={this.FlyEast} disabled={this.state.eastAvailable === false || this.state.disableMovementButtons === true || this.state.disableAllButtons === true}>Move East</MovementButton>
                            <PrayButton onClick={this.Pray} disabled={this.state.disablePrayButton === true || this.state.disableAllButtons === true}>Pray</PrayButton>
                        </ButtonPanelDiv>
                    );
                }

                // Else if just a regular node
                else {
                    // render movement buttons
                    return (
                        <ButtonPanelDiv>
                            <MovementButton onClick={this.FlyNorth} disabled={this.state.northAvailable === false || this.state.disableMovementButtons === true || this.state.disableAllButtons === true}>Move North</MovementButton>
                            <MovementButton onClick={this.FlySouth} disabled={this.state.southAvailable === false || this.state.disableMovementButtons === true || this.state.disableAllButtons === true}>Move South</MovementButton>
                            <MovementButton onClick={this.FlyWest} disabled={this.state.westAvailable === false || this.state.disableMovementButtons === true || this.state.disableAllButtons === true}>Move West</MovementButton>
                            <MovementButton onClick={this.FlyEast} disabled={this.state.eastAvailable === false || this.state.disableMovementButtons === true || this.state.disableAllButtons === true}>Move East</MovementButton>
                        </ButtonPanelDiv>
                    );
                }
            }
            else {
                if (this.context.state.currentRoomData.room_id === 250) {
                    // render movement buttons plus a mine button
                    return (
                        <ButtonPanelDiv>
                            <MovementButton onClick={this.MoveNorth} disabled={this.state.northAvailable === false || this.state.disableMovementButtons === true || this.state.disableAllButtons === true}>Move North</MovementButton>
                            <MovementButton onClick={this.MoveSouth} disabled={this.state.southAvailable === false || this.state.disableMovementButtons === true || this.state.disableAllButtons === true}>Move South</MovementButton>
                            <MovementButton onClick={this.MoveWest} disabled={this.state.westAvailable === false || this.state.disableMovementButtons === true || this.state.disableAllButtons === true}>Move West</MovementButton>
                            <MovementButton onClick={this.MoveEast} disabled={this.state.eastAvailable === false || this.state.disableMovementButtons === true || this.state.disableAllButtons === true}>Move East</MovementButton>
                            <MineButton onClick={this.MineCoin} disabled={this.state.disableMineButton === true || this.state.disableAllButtons === true}>Mine Coin</MineButton>
                        </ButtonPanelDiv>
                    );
                }
                // Else if you are at the Pirate Ry's Name Change shop - Room 467
                if (this.context.state.currentRoomData.room_id === 467) {
                    // render movement buttons plus a name change button and a name change input field
                    return (
                        <ButtonPanelDiv>
                            <MovementButton onClick={this.MoveNorth} disabled={this.state.northAvailable === false || this.state.disableMovementButtons === true || this.state.disableAllButtons === true}>Move North</MovementButton>
                            <MovementButton onClick={this.MoveSouth} disabled={this.state.southAvailable === false || this.state.disableMovementButtons === true || this.state.disableAllButtons === true}>Move South</MovementButton>
                            <MovementButton onClick={this.MoveWest} disabled={this.state.westAvailable === false || this.state.disableMovementButtons === true || this.state.disableAllButtons === true}>Move West</MovementButton>
                            <MovementButton onClick={this.MoveEast} disabled={this.state.eastAvailable === false || this.state.disableMovementButtons === true || this.state.disableAllButtons === true}>Move East</MovementButton>
                            <NameChangeInput />
                            <NameChangeButton onClick={this.NameChange} disabled={this.state.disableNameChangeButton === true || this.state.disableAllButtons === true}>Change Name</NameChangeButton>
                        </ButtonPanelDiv>
                    );
                }
                // Else if you are at a shrine - Rooms 461, 22, 499
                if (this.context.state.currentRoomData.room_id === 22 || this.context.state.currentRoomData.room_id === 461 || this.context.state.currentRoomData.room_id === 499) {
                    // render movement buttons plus Pray button
                    return (
                        <ButtonPanelDiv>
                            <MovementButton onClick={this.MoveNorth} disabled={this.state.northAvailable === false || this.state.disableMovementButtons === true || this.state.disableAllButtons === true}>Move North</MovementButton>
                            <MovementButton onClick={this.MoveSouth} disabled={this.state.southAvailable === false || this.state.disableMovementButtons === true || this.state.disableAllButtons === true}>Move South</MovementButton>
                            <MovementButton onClick={this.MoveWest} disabled={this.state.westAvailable === false || this.state.disableMovementButtons === true || this.state.disableAllButtons === true}>Move West</MovementButton>
                            <MovementButton onClick={this.MoveEast} disabled={this.state.eastAvailable === false || this.state.disableMovementButtons === true || this.state.disableAllButtons === true}>Move East</MovementButton>
                            <PrayButton onClick={this.Pray} disabled={this.state.disablePrayButton === true || this.state.disableAllButtons === true}>Pray</PrayButton>
                        </ButtonPanelDiv>
                    );
                }

                // Else if just a regular node
                else {
                    // render movement buttons
                    return (
                        <ButtonPanelDiv>
                            <MovementButton onClick={this.MoveNorth} disabled={this.state.northAvailable === false || this.state.disableMovementButtons === true || this.state.disableAllButtons === true}>Move North</MovementButton>
                            <MovementButton onClick={this.MoveSouth} disabled={this.state.southAvailable === false || this.state.disableMovementButtons === true || this.state.disableAllButtons === true}>Move South</MovementButton>
                            <MovementButton onClick={this.MoveWest} disabled={this.state.westAvailable === false || this.state.disableMovementButtons === true || this.state.disableAllButtons === true}>Move West</MovementButton>
                            <MovementButton onClick={this.MoveEast} disabled={this.state.eastAvailable === false || this.state.disableMovementButtons === true || this.state.disableAllButtons === true}>Move East</MovementButton>
                        </ButtonPanelDiv>
                    );
                }
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
