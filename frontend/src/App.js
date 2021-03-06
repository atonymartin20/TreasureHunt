import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AppContext } from './Components/Context/AppContext.js';
import { AppDiv, AppLeftDiv, AppRightDiv } from './Components/StyledComponents';
import TopBar from './Components/TopBar';
import Map from './Components/Map/Map.js';
import FullRoom from './Components/Views/FullRoom.js';
import DefaultView from './Components/Views/DefaultView.js';
import FullPlayer from './Components/Views/FullPlayer.js';
import About from './Components/Views/About.js';

class App extends React.Component {
    async componentDidMount() {
        await this.context.GetInitalRoomData();
        await this.context.GetUserData();
        await this.context.CoinBalance();
    }
    render() {
        return (
            <AppDiv>
                <Switch>
                    <Route exact path="/">
                        <TopBar />
                        <AppLeftDiv>
                            <Map />
                        </AppLeftDiv>
                        <AppRightDiv>
                            <DefaultView />
                        </AppRightDiv>
                    </Route>
                    <Route path="/home">
                        <TopBar />
                        <AppLeftDiv>
                            <Map />
                        </AppLeftDiv>
                        <AppRightDiv>
                            <DefaultView />
                        </AppRightDiv>
                    </Route>
                    <Route path="/fullRoom">
                        <TopBar />
                        <AppLeftDiv>
                            <Map />
                        </AppLeftDiv>
                        <AppRightDiv>
                            <FullRoom />
                        </AppRightDiv>
                    </Route>
                    <Route path="/fullPlayer">
                        <TopBar />
                        <AppLeftDiv>
                            <Map />
                        </AppLeftDiv>
                        <AppRightDiv>
                            <FullPlayer />
                        </AppRightDiv>
                    </Route>
                    <Route path="/about">
                        <TopBar />
                        <AppLeftDiv>
                            <Map />
                        </AppLeftDiv>
                        <AppRightDiv>
                            <About />
                        </AppRightDiv>
                    </Route>
                    <Route>
                        {/*All other routes get Default View */}
                        <TopBar />
                        <AppLeftDiv>
                            <Map />
                        </AppLeftDiv>
                        <AppRightDiv>
                            <DefaultView />
                        </AppRightDiv>
                    </Route>
                </Switch>
            </AppDiv>
        );
    }
}

App.contextType = AppContext;

export default App;
