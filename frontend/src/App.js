import React from 'react';
import { Route } from 'react-router-dom';
import { AppContext } from './Components/Context/AppContext.js';
import { AppDiv, AppLeftDiv, AppRightDiv } from './Components/StyledComponents';
import TopBar from './Components/TopBar';
import Map from './Components/Map/Map.js'
import FullRoom from './Components/Views/FullRoom.js';
import DefaultView from './Components/Views/DefaultView.js';
import FullPlayer from './Components/Views/FullPlayer.js';

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
                    <Route exact path="/" component = {DefaultView} />
                    <Route path="/home" component = {DefaultView} />
                    <Route path="/fullRoom" component = {FullRoom} />
                    <Route path='/fullPlayer' component = {FullPlayer} />
                </AppRightDiv>
            </AppDiv>
        )
    }
}

App.contextType = AppContext;

export default App;
