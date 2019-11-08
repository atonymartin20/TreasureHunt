import React from 'react';
import { AppContext } from '../Context/AppContext.js';
import { ViewPanelDiv, AboutH2, AboutUL, AboutLI, AboutP, AboutSpan, AboutSpanATag, AboutStackSpan } from '../StyledComponents';

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
                <AboutH2>Project Information:</AboutH2>
                <AboutP>

                </AboutP>
                <AboutH2>Stack:</AboutH2>
                    <AboutStackSpan>Frontend</AboutStackSpan>
                <AboutUL>
                    <AboutLI>React</AboutLI>
                    <AboutLI>Context API</AboutLI>
                    <AboutLI>React</AboutLI>

                    <AboutLI>React</AboutLI>

                </AboutUL>
                {/* Next up adding details about how to play the game */}
                {/* Still need to add Frontend Readme */}
            </ViewPanelDiv>
        )
    }
}

About.contextType = AppContext;

export default About;
