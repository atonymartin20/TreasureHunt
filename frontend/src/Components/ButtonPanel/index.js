import React from 'react';
import { AppContext } from '../Context/AppContext.js';
import { ButtonPanelDiv, MovementButton } from '../StyledComponents';

class ButtonPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            northAvailable: false,
            southAvailable: false,
            westAvailable: false,
            eastAvailable: false
        }
    }
    
    DisableButtons = () => {
        let disabledNorth = document.getElementById('north_button');
        let disabledSouth = document.getElementById('south_button');
        let disabledEast = document.getElementById('east_button');
        let disabledWest = document.getElementById('west_button');
        if (this.state.northAvailable === false) {
            disabledNorth.disabled = true
        }
        if (this.state.southAvailable === false) {
            disabledSouth.disabled = true
        }
        if (this.state.westAvailable === false) {
            disabledWest.disabled = true
        }
        if (this.state.eastAvailable === false) {
            disabledEast.disabled = true
        }
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

    TestFunction = () => {
        console.log('On Click works.  Now time to add context.')
    }

    async RunFunctions() {
        await this.UpdateRoomData();
        await this.DisableButtons();

    }
    render() {
        this.RunFunctions();
        console.log(this.state);
        return (
            <ButtonPanelDiv>
                <MovementButton id="north_button" onClick={this.TestFunction}>North</MovementButton>
                <MovementButton id="south_button" onClick={this.TestFunction}>South</MovementButton>
                <MovementButton id="west_button" onClick={this.TestFunction}>West</MovementButton>
                <MovementButton id="east_button" onClick={this.TestFunction}>East</MovementButton>

            </ButtonPanelDiv>
        );
    }
}

ButtonPanel.contextType = AppContext;

export default ButtonPanel;
