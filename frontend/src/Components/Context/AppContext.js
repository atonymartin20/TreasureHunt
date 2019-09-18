import React, { Component } from 'react';
import axios from 'axios';
require('dotenv').config()

export const AppContext = React.createContext();

export default class AppProvider extends Component {
    state = {
        currentLocation: null,
        userInitData: {},
        userData: {},
    };

    render() {
        return (
            <AppContext.Provider
                value={{
                    state: this.state,
                    GetInitData: () => {
                        const endpoint = 'https://lambda-treasure-hunt.herokuapp.com/api/adv/init/';
                        const key = process.env.REACT_APP_KEY || '314ec772ed9d2974590b9b02a56b022a47c1815c';
                        console.log(key)
                        const options = {
                            headers: {
                                Authorization: `Token ${key}`
                            }
                        };
                        axios
                            .get(endpoint, options)
                            .then(res => {
                                let currentLocationSplit = res.data.coordinates.replace( /[\s()]/g, '' ).split( ',' );
                                let currentLocation = [({x: Number(currentLocationSplit[0]), y: Number(currentLocationSplit[1])})]
                                console.log("Current Location: ", currentLocation, " User Initial Data: ", res.data)
                                this.setState({
                                    userInitData: res.data,
                                    currentLocation: currentLocation
                                });
                            })
                            .catch(err => {
                                console.log('error', err);
                            });
                    },
                    GetUserData: () => {
                        setTimeout(() => {
                        const endpoint = 'https://lambda-treasure-hunt.herokuapp.com/api/adv/status/';
                        const key = process.env.REACT_APP_KEY || '314ec772ed9d2974590b9b02a56b022a47c1815c';
                        const options = {
                            headers: {
                                Authorization: `Token ${key}`
                            }
                        };
                
                        axios.post(endpoint, {}, options)
                            .then(res => {
                                console.log(res.data)
                                this.setState({
                                    userData: res.data
                                });
                            })
                            .catch(err => {
                                console.log('error', err);
                            });
                        }, 2200);
                    }
                }}
            >
                {this.props.children}
            </AppContext.Provider>
        );
    }
}