import React from 'react';
import { AppContext } from '../Context/AppContext.js';
import CurrentRoom from '../CurrentRoom';
import UserInfoDisplay from '../UserDisplay/UserInfoDisplay.js'
import { ViewPanelDiv } from '../StyledComponents';

class DefaultView extends React.Component{
    render(){
        return (
            <ViewPanelDiv>
                <CurrentRoom />
                <UserInfoDisplay />
            </ViewPanelDiv>
        )
    }
}

DefaultView.contextType = AppContext;

export default DefaultView;
