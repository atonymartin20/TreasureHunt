import styled from 'styled-components';

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
    background-color: #82F1D8;
    padding: 20px 1%;
    box-sizing: border-box;
`;

// TopBar Styled Components
const TopBarDiv = styled.div`
    width: 100%;
    text-align: center;
    background-color: #9BF182;
    border-width: 3px;
    border-style: dotted solid dashed double;
    border-color: black;
`;

const TopBarH1 = styled.div`
    font-family: "Gorgia", serif;
    font-size: 2.7rem;
    font-weight: 500;
    padding: 15px;
`;

export {
    TopBarDiv,
    TopBarH1,
    AppDiv,
    AppLeftDiv,
    AppRightDiv,
};
// export 