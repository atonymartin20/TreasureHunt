import React from 'react';
import { AppContext } from '../Context/AppContext.js';
import { ViewPanelDiv } from '../StyledComponents';

class FullPlayer extends React.Component{
    render(){
        console.log(this.context.state.userData)
        return (
            <ViewPanelDiv>

            </ViewPanelDiv>
        )
    }
}

FullPlayer.contextType = AppContext;

export default FullPlayer;
