import React from 'react';
import { AppContext } from '../Context/AppContext.js';
import { ViewPanelDiv, CurrentRoomTitleBar, CurrentRoomH2, CurrentRoomLi, CurrentRoomSpan } from '../StyledComponents';
import FullRoomInventoryList from './FullRoomInventoryList.js';

class FullRoom extends React.Component{
    render(){
        console.log(this.context.state.currentRoomData.exits)
        return (
            <ViewPanelDiv>
                <CurrentRoomTitleBar>
                    <CurrentRoomH2>{this.context.state.currentRoomData.title}</CurrentRoomH2>
                    <CurrentRoomH2>{this.context.state.currentRoomData.coordinates}</CurrentRoomH2>
                </CurrentRoomTitleBar>
                <ul>
                    <CurrentRoomLi><CurrentRoomSpan>Room ID:</CurrentRoomSpan>&nbsp;&nbsp;{this.context.state.currentRoomData.room_id}</CurrentRoomLi>
                    <CurrentRoomLi><CurrentRoomSpan>Description:</CurrentRoomSpan>&nbsp;&nbsp;{this.context.state.currentRoomData.description}</CurrentRoomLi>
                    <CurrentRoomLi><CurrentRoomSpan>Cooldown:</CurrentRoomSpan>&nbsp;&nbsp;{this.context.state.currentRoomData.cooldown}</CurrentRoomLi>
                    <CurrentRoomLi><CurrentRoomSpan>Elevation:</CurrentRoomSpan>&nbsp;&nbsp;{this.context.state.currentRoomData.elevation}</CurrentRoomLi>
                    <CurrentRoomLi><CurrentRoomSpan>Terrain:</CurrentRoomSpan>&nbsp;&nbsp;{this.context.state.currentRoomData.terrain}</CurrentRoomLi>
                    <CurrentRoomLi><CurrentRoomSpan>Players:</CurrentRoomSpan> 
                        <FullRoomInventoryList ListType='players' />
                    </CurrentRoomLi>  
                    <CurrentRoomLi><CurrentRoomSpan>Exits:</CurrentRoomSpan> 
                        <FullRoomInventoryList ListType='exits' />
                    </CurrentRoomLi>  
                    <CurrentRoomLi><CurrentRoomSpan>Items:</CurrentRoomSpan> 
                        <FullRoomInventoryList ListType='items' />
                    </CurrentRoomLi>
                    <CurrentRoomLi><CurrentRoomSpan>Messages:</CurrentRoomSpan> 
                        <FullRoomInventoryList ListType='messages' />
                    </CurrentRoomLi>
                    <CurrentRoomLi><CurrentRoomSpan>Errors:</CurrentRoomSpan> 
                        <FullRoomInventoryList ListType='errors' />
                    </CurrentRoomLi>
                </ul>
            </ViewPanelDiv>
        )
    }
}

FullRoom.contextType = AppContext;

export default FullRoom;
