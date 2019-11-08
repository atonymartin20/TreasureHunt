import React from 'react';
import { AppContext } from '../Context/AppContext.js';
import { ViewPanelDiv, AboutH2, AboutUL, AboutLI, AboutP, AboutSpan, AboutSpanATag, AboutStackSpan, AboutStackSpan2 } from '../StyledComponents';

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
                    This project was created during our time in Lambda School.  We were given a backend with endpoints that we could hit to grab data.  We had to build
                    out our map, store data, pick up treasure, traverse the map, and eventually mine a coin.
                </AboutP>

                <AboutH2>Stack:</AboutH2>
                <AboutStackSpan>Frontend</AboutStackSpan>
                <AboutUL>
                    <AboutLI>React</AboutLI>
                    <AboutLI>Context API</AboutLI>
                </AboutUL>

                <AboutStackSpan2>Our Backend</AboutStackSpan2>
                <AboutUL>
                    <AboutLI>Python</AboutLI>
                </AboutUL>

                <AboutH2>Important Links:</AboutH2>
                <AboutUL>
                    <AboutLI><AboutSpanATag href='https://github.com/atonymartin20/TreasureHunt' target="_blank">Project Github</AboutSpanATag></AboutLI>
                    <AboutLI><AboutSpanATag href='https://github.com/atonymartin20/TreasureHunt/blob/master/frontend/README.md' target="_blank">Frontend README</AboutSpanATag></AboutLI>
                    <AboutLI><AboutSpanATag href='https://github.com/atonymartin20/TreasureHunt/blob/master/backend/README.md' target="_blank">Backend README</AboutSpanATag></AboutLI>
                    <AboutLI><AboutSpanATag href='https://dazzling-tesla-7c91b1.netlify.com/' target="_blank">Netlify - Frontend</AboutSpanATag></AboutLI>
                </AboutUL>
                {/* Next up adding details about how to play the game */}
                {/* Still need to add Frontend Readme */}
            </ViewPanelDiv>
        )
    }
}

About.contextType = AppContext;

export default About;
