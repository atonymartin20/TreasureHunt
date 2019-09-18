import React from 'react';
import './App.css';
import { AppContext } from './Components/Context/AppContext.js';
import Map from './Components/Map/Map.js'
import CurrentRoom from './Components/CurrentRoom';
import UserInfoDisplay from './Components/UserDisplay/UserInfoDisplay.js'
require('dotenv').config()

class App extends React.Component{
    componentDidMount() {
        this.context.GetInitData();
        this.context.GetUserData();
    }
    render(){
        return (
            <div className='App'>
                <header>
                    <h1 className='main-header'>Treasure Map!</h1>
                    <Map className='Map'/>
                    <CurrentRoom />
                    <UserInfoDisplay />
                </header>
            </div>
        )
    }
}

App.contextType = AppContext;

export default App;
