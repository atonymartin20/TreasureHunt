import styled from 'styled-components';
import pirateBackground from '../../Images/pirate-background.jpg';

//  App Styled Components
const AppDiv = styled.div`
    font-size: 62.5%;
    display: flex;
    flex-wrap: wrap;
    max-width: 1300px;
    justify-content: center;
    width: 100%;
    margin: 0 auto;
    background-color: #EAE6E5;
    box-sizing: border-box;
`;

const AppLeftDiv = styled.div`
    padding: 20px 1%;
    width: 70%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    box-sizing: border-box;
`;

const AppRightDiv = styled.div`
    width: 30%;
    display: flex;
    flex-wrap: wrap;
    padding: 20px 1%;
    box-sizing: border-box;
    background-image: url(${pirateBackground});
`;


// TopBar Styled Components
const TopBarDiv = styled.div`
    width: 100%;
    text-align: center;
    background-color: #9BF182;
`;

const TopBarH1 = styled.div`
    font-family: "Gorgia", serif;
    font-size: 2.7rem;
    font-weight: 500;
    padding: 15px;
`;

// Map Styled Components
const MapDiv = styled.div`
`;

const MapH1 = styled.h1`
    width: 100%;
    color: black;
    font-size: 2.2rem;
    text-align: center;
    padding: 0px;
    margin: 0px;
`;

// Legend Styled Components
const LegendDiv = styled.div`
    border: 2px solid black;
    width: 50%;
    margin: 0 auto;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    padding: 10px 2%;
`;

const LegendH2 = styled.h2`
    font-size: 1.6rem;
    padding: 2px;
    margin: 0px;
    width: 100%;
`;

const LegendP = styled.p`
    font-size: 1.1rem;
    padding: 2px;
    margin: 2px;
    width: 40%;
    font-weight: bold;
`;

const RegularNodeP = styled(LegendP)`
    color: #0000FF;
`;

const ShopP = styled(LegendP)`
    color: #008000;
`;

const ShrineP = styled(LegendP)`
    color: #FFFF00;
    stroke: black;
    text-shadow: -1px -1px 3px black, 1px -1px 3px black, -1px 1px 3px black, 1px 1px 3px black;
`;

const PirateRyP = styled(LegendP)`
    color: #FF00F0;
    text-shadow: -1px -1px 3px black, 1px -1px 3px black, -1px 1px 3px black, 1px 1px 3px black;
`;

const MineP = styled(LegendP)`
    color: black;
`;

const CurrentLocationP = styled(LegendP)`
    color: #FF0000;
`;

// Current Room Styled Components
const CurrentRoomDiv = styled.div`
    width: 100%;
`;

const CurrentRoomH2 = styled.h2`
    font-size: 1.5rem;
    padding: 0px;
    margin: 0px;
`;

const CurrentRoomLi = styled.li`
    font-size: 1.0rem;
`;

const CurrentRoomSpan = styled.span`
    font-size: 1.0rem;
    font-weight: bold;
`;

// User Info Styled Components
const UserInfoDiv = styled.div`
    width: 100%;
    margin-top: 15px;
`;

const UserInfoH2 = styled.h2`
    font-size: 1.5rem;
    padding: 0px;
    margin: 0px;
`;

const UserInfoLi = styled.li`
    font-size: 1.0rem;
`;

const UserInfoSpan = styled.span`
    font-size: 1.0rem;
    font-weight: bold;
`;

//  Button Panel Styled Components
const ButtonPanelDiv = styled.div`

`;

export {
    TopBarDiv,
    TopBarH1,
    AppDiv,
    AppLeftDiv,
    AppRightDiv,
    MapDiv,
    MapH1,
    LegendDiv,
    LegendH2,
    RegularNodeP,
    ShopP,
    ShrineP,
    PirateRyP,
    MineP,
    CurrentLocationP,
    CurrentRoomDiv,
    CurrentRoomH2,
    CurrentRoomLi,
    CurrentRoomSpan,
    UserInfoDiv,
    UserInfoH2,
    UserInfoLi,
    UserInfoSpan,
    ButtonPanelDiv,
};
// export 