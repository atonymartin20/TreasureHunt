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

                <AboutH2>How To Play the Game:</AboutH2>
                <AboutP>This game allows you to hunt for treasure, pick up treasure, traverse the map, and mine Lambda Coins.  </AboutP>
                <AboutUL>
                    <AboutLI><strong>Cooldown</strong> - The backend of the game runs on a cooldown feature to keep the server from crashing.  Every action in the game has a cooldown that has to run before an action has to be taken.</AboutLI>
                    <AboutLI><strong>Movement</strong> - The movement keys are located in the button panel.  Your current location can be tracked on the map by following the red dot.  Traps may activate slowing your character down.</AboutLI>
                    <AboutLI><strong>Items</strong> - Treasure items can be sold to the shop for gold or used with the transmogrifier to be turned into equippable equipment.  Equippable items include jackets and boots which can be used to increase a character's strength and speed.</AboutLI>
                </AboutUL>

                <AboutH2>Legend Details:</AboutH2>
                <AboutUL>
                    <AboutLI><strong>Regular Nodes</strong> - Any nodes that do not serve a particular purposed.  They may contain items.</AboutLI>
                    <AboutLI><strong>Shop Location</strong> - This node allows you to sell treasure to the store to gain gold.</AboutLI>
                    <AboutLI><strong>Shrine Locations</strong> - Each shrine can be prayed at to gain special abilities.  These abilities include Dash, Flying, and Ghost Friend.</AboutLI>
                    <AboutLI><strong>Pirate Ry's Shop</strong> - Pirate Ry's Shop allows you to change your name by typing your name into the input field and pressing the change name button.</AboutLI>
                    <AboutLI><strong>Mining Location</strong> - Allows you to mine Lambda Coins which can be used later.</AboutLI>
                    <AboutLI><strong>Current Location</strong> - Shows your current location on the map.</AboutLI>
                    <AboutLI><strong>Transmogrifier</strong> - The transmogrifier allows you to change items into wearable equipment.  This uses Gold and Lambda Coins.</AboutLI>
                </AboutUL>

                <AboutH2>Button Panel Details:</AboutH2>
                <AboutUL>
                    <AboutLI><strong>Movement Buttons</strong> - These buttons allow the player to move throughout the map.  They are rendered depending on what movement options you have unlocked.  The buttons are also disabled if you can't move in a certain direction or while an action is being taken.</AboutLI>
                    <AboutLI><strong>Pray Button</strong> - This button only shows when the player is currently located at a Shrine.  Praying will unlock a special ability for your character.</AboutLI>
                    <AboutLI><strong>Pirate Ry's Shop</strong> - There are two different items rendered at Pirate Ry's Shop.  First is an input field where the player can create their new player name.  The second item is a button changing the player's name.</AboutLI>
                    <AboutLI><strong>Mining Button</strong> - This button only renders at the Mining Location.  Clicking this button will begin the Lambda Coin Mining process.  This process can take a few minutes to complete.</AboutLI>
                </AboutUL>
                {/* Next up adding details about how to play the game */}
                {/* Still need to add Frontend Readme */}
            </ViewPanelDiv>
        )
    }
}

About.contextType = AppContext;

export default About;
