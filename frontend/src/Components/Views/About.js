import React from 'react';
import { AppContext } from '../Context/AppContext.js';
import { ViewPanelDiv, AboutH2, AboutUL, AboutLI, AboutSpan, AboutSpanATag } from '../StyledComponents';

class About extends React.Component{
    render(){
        return (
            <ViewPanelDiv>
                <AboutH2>Members of our Team:</AboutH2>
                <AboutUL>
                    <AboutLI><AboutSpan><AboutSpanATag href='https://github.com/atonymartin20' target="_blank">Alex Martin</AboutSpanATag></AboutSpan><AboutSpanATag href='https://github.com/atonymartin20' target="_blank">&nbsp;&nbsp; - Alex's Github</AboutSpanATag></AboutLI>
                    <AboutLI><AboutSpan><AboutSpanATag href='https://github.com/bcabanayan' target="_blank">Bruce Cabanayan</AboutSpanATag></AboutSpan><AboutSpanATag href='https://github.com/bcabanayan' target="_blank">&nbsp;&nbsp; - Bruce's Github</AboutSpanATag></AboutLI>
                    <AboutLI><AboutSpan><AboutSpanATag href='https://github.com/pghrogue' target="_blank">Jennifer King</AboutSpanATag></AboutSpan><AboutSpanATag href='https://github.com/pghrogue' target="_blank">&nbsp;&nbsp; - Jennifer's Github</AboutSpanATag></AboutLI>
                </AboutUL>
                {/* Next up adding details about how to play the game */}
                {/* Still need to fix mining and add Frontend Readme */}
                {/* Commit 4 */}
            </ViewPanelDiv>
        )
    }
}

About.contextType = AppContext;

export default About;
