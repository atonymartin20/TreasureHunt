import React from 'react';
import { AppContext } from '../Context/AppContext.js';
import { ButtonPanelDiv } from '../StyledComponents';

class ButtonPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // userData: {},
        }
    }

    render() {
        return (
            <ButtonPanelDiv>
                <h1>Button Panel Div</h1>
            </ButtonPanelDiv>
        );
    }
}

ButtonPanel.contextType = AppContext;

export default ButtonPanel;
