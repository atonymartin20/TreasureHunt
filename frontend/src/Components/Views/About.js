import React from 'react';
import { AppContext } from '../Context/AppContext.js';
import CurrentRoom from '../CurrentRoom';
import UserInfoDisplay from '../UserDisplay/UserInfoDisplay.js'
import { ViewPanelDiv } from '../StyledComponents';

class About extends React.Component{
    render(){
        return (
            <ViewPanelDiv>
                <CurrentRoom />
                <UserInfoDisplay />
            </ViewPanelDiv>
        )
    }
}

About.contextType = AppContext;

export default About;
