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
                        const options = {
                            headers: {
                                Authorization: `Token ${process.env.REACT_APP_KEY}`
                            }
                        };
                        axios
                            .get(endpoint, options)
                            .then(res => {
                                let currentLocationSplit = res.data.coordinates.replace( /[\s()]/g, '' ).split( ',' );
                                let currentLocation = [({x: Number(currentLocationSplit[0]), y: Number(currentLocationSplit[1])})]
                                console.log("Current Location: ", currentLocation)
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
                        const options = {
                            headers: {
                                Authorization: `Token ${process.env.REACT_APP_KEY}`
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