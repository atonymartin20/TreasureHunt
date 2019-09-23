import React from 'react';
import { AppContext } from '../Context/AppContext.js';
import { ButtonPanelDiv, MovementButton } from '../StyledComponents';

class ButtonPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            northAvailable: true,
            southAvailable: true,
            westAvailable: true,
            eastAvailable: true,
        }
    }

    componentDidMount() {
        this.UpdateRoomData();
    }

    componentDidUpdate() {
        this.UpdateRoomData();
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
        return (
            <ButtonPanelDiv>
                <MovementButton onClick={this.context.MoveNorth} disabled={this.state.northAvailable === false}>North</MovementButton>
                <MovementButton onClick={this.context.MoveSouth} disabled={this.state.southAvailable === false}>South</MovementButton>
                <MovementButton onClick={this.context.MoveWest} disabled={this.state.westAvailable === false}>West</MovementButton>
                <MovementButton onClick={this.context.MoveEast} disabled={this.state.eastAvailable === false}>East</MovementButton>
            </ButtonPanelDiv>
        );
    }
}

ButtonPanel.contextType = AppContext;

export default ButtonPanel;
