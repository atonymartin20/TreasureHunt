import React from 'react';
import { AppContext } from './Components/Context/AppContext.js';
import { AppDiv, AppLeftDiv, AppRightDiv } from './Components/StyledComponents';
import TopBar from './Components/TopBar';
import Map from './Components/Map/Map.js'
import CurrentRoom from './Components/CurrentRoom';
import UserInfoDisplay from './Components/UserDisplay/UserInfoDisplay.js'

class App extends React.Component{
    async componentDidMount() {
        await this.context.GetInitalRoomData();
        await this.context.GetUserData();
        await this.context.CoinBalance();
    }
    render(){
        return (
            <AppDiv>
                <TopBar />
                <AppLeftDiv>
                    <Map/>
                </AppLeftDiv>
                <AppRightDiv>
                    <CurrentRoom />
                    <UserInfoDisplay />
                </AppRightDiv>
            </AppDiv>
        )
    }
}

App.contextType = AppContext;

export default App;
