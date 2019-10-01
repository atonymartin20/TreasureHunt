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
    `;
    
const AppLeftDiv = styled.div`
    padding: 20px 1%;
    width: 70%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    `;

const AppRightDiv = styled.div`
    width: 30%;
    padding: 20px 1%;
    display: flex;
    flex-wrap: wrap;
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
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
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
    width: 45%;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    padding: 10px 2%;
    border-radius: 10px;

`;

const LegendH2 = styled.h2`
    font-size: 1.6rem;
    padding: 2px;
    margin: 0px;
    width: 100%;
    margin-left: 6.5%;
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

const TransmogrifierP = styled(LegendP)`
    color: #FABEBE;
    text-shadow: -1px -1px 3px black, 1px -1px 3px black, -1px 1px 3px black, 1px 1px 3px black;
`;

// Current Room Styled Components
const CurrentRoomDiv = styled.div`
    width: 100%;
`;

const CurrentRoomTitleBar = styled.div`
    display: flex;
    justify-content: space-between;
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

const CurrentRoomItemPickUpButton = styled.button`
    width: 85%;
    max-width: 120px;
    height: 40px;
    border: 2px solid black;
    border-radius: 10px;
    background-color: #9C97E8;
    font-size: 1.0rem;
    font-weight: bold;
    cursor: pointer;
    margin: 0px 0px 10px 10%;
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


const InventoryListLi = styled.li`
    display: flex;
`;

const InventoryDropButton = styled.button`
    width: 85%;
    max-width: 120px;
    height: 40px;
    border: 2px solid black;
    border-radius: 10px;
    background-color: #97E3E8;
    font-size: 1.0rem;
    font-weight: bold;
    cursor: pointer;
    margin: 0px 0px 10px 10%;
`;

const InventoryTransmogButton = styled.button`
    width: 85%;
    max-width: 120px;
    height: 40px;
    border: 2px solid black;
    border-radius: 10px;
    background-color: #FABEBE;
    font-size: 1.0rem;
    font-weight: bold;
    cursor: pointer;
    margin: 0px 0px 10px 10%;
`;

const InventorySellButton = styled.button`
    width: 85%;
    max-width: 120px;
    height: 40px;
    border: 2px solid black;
    border-radius: 10px;
    background-color: #C597E8;
    font-size: 1.0rem;
    font-weight: bold;
    cursor: pointer;
    margin: 0px 0px 10px 10%;
`;

const InventoryEquipButton = styled.button`
    width: 85%;
    max-width: 120px;
    height: 40px;
    border: 2px solid black;
    border-radius: 10px;
    background-color: #AAFFC3;
    font-size: 1.0rem;
    font-weight: bold;
    cursor: pointer;
    margin: 0px 0px 10px 10%;
`;
//  Button Panel Styled Components
const ButtonPanelDiv = styled.div`
    width: 45%;
    border: 2px solid black;
    border-radius: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 10px;
`;

const MovementButton = styled.button`
    ${props => props.disabled}
    width: 35%;
    height: 60px;
    border: 2px solid black;
    border-radius: 10px;
    background-color: #9BF182;
    font-size: 1.0rem;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    cursor: pointer;

    &:disabled {
        width: 35%;
        background-color: #808080;
        color: black;
        cursor: not-allowed;
    }
`;

const MineButton = styled.button`
    ${props => props.disabled}
    width: 35%;
    height: 60px;
    border: 2px solid black;
    border-radius: 10px;
    background-color: black;
    color: white;
    font-size: 1.0rem;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    cursor: pointer;

    &:disabled {
        width: 35%;
        background-color: #808080;
        color: black;
        cursor: not-allowed;
    }
`;

const PrayButton = styled.button`
    ${props => props.disabled}
    width: 35%;
    height: 60px;
    border: 2px solid black;
    border-radius: 10px;
    background-color: #FFFF00;
    font-size: 1.0rem;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    cursor: pointer;

    &:disabled {
        width: 35%;
        background-color: #808080;
        color: black;
        cursor: not-allowed;
    }
`;

const NameChangeButton = styled.button`
    ${props => props.disabled}
    width: 35%;
    height: 60px;
    border: 2px solid black;
    border-radius: 10px;
    background-color: #FF00F0;
    font-size: 1.0rem;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    cursor: pointer;

    &:disabled {
        width: 35%;
        background-color: #808080;
        color: black;
        cursor: not-allowed;
    }
`;

const NameChangeInput = styled.input`
    width: 100%;
    border: 2px solid black;
    border-radius: 10px;
    font-size: 1.25rem;
    height: 55px;
    margin-bottom: 20px;
`;

// Views
const ViewPanelDiv = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
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
    TransmogrifierP,
    CurrentRoomDiv,
    CurrentRoomTitleBar,
    CurrentRoomH2,
    CurrentRoomLi,
    CurrentRoomSpan,
    CurrentRoomItemPickUpButton,
    UserInfoDiv,
    UserInfoH2,
    UserInfoLi,
    UserInfoSpan,
    InventoryListLi,
    InventoryDropButton,
    InventoryTransmogButton,
    InventorySellButton,
    InventoryEquipButton,
    ButtonPanelDiv,
    MovementButton,
    MineButton,
    PrayButton,
    NameChangeButton,
    NameChangeInput,
    ViewPanelDiv,
};
// export 