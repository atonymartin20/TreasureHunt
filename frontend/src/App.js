import React from 'react';
import './App.css';
import Map from './Components/Map.js'
import UserInfoDisplay from './Components/UserInfoDisplay.js'
require('dotenv').config()

function App() {
  return (
    <div className='App'>
      <header>
        <h1 className='main-header'>Treasure Map!</h1>
        <Map className='Map'/>
        <UserInfoDisplay />
      </header>
    </div>
  );
}

export default App;
