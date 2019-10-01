import React from 'react';
import { AppContext } from '../Context/AppContext.js';
import { ViewPanelDiv } from '../StyledComponents';

class FullRoom extends React.Component{
    render(){
        console.log(this.context.state.currentRoomData)
        return (
            <ViewPanelDiv>

            </ViewPanelDiv>
        )
    }
}

FullRoom.contextType = AppContext;

export default FullRoom;
