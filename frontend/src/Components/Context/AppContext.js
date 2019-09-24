import React, { Component } from 'react';
import axios from 'axios';
import roomMap from '../../Data/roomMap.js';
require('dotenv').config()
export const AppContext = React.createContext();

export default class AppProvider extends Component {
    state = {
        currentLocation: null,
        userData: {},
        currentRoomData: {},
        wiseExplorer: false,
        cooldown: 2000
    };

    componentDidMount() {
        if(Object.keys(roomMap).length === 500) {
            this.setState({
                wiseExplorer: true
            })
        }
    }

    render() {
        return (
            <AppContext.Provider
                value={{
                    state: this.state,
                    GetInitalRoomData: () => {
                            const endpoint = 'https://lambda-treasure-hunt.herokuapp.com/api/adv/init/';
                            const key = process.env.REACT_APP_KEY || '314ec772ed9d2974590b9b02a56b022a47c1815c';
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
                                    this.setState({
                                        currentRoomData: res.data,
                                        currentLocation: currentLocation,
                                        cooldown: (res.data.cooldown * 1300)
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
                    
                            axios
                                .post(endpoint, {}, options)
                                .then(res => {
                                    this.setState({
                                        userData: res.data,
                                        cooldown: (res.data.cooldown * 1300) //cooldown * 1100 for milliseconds and small buffer.
                                    });
                                })
                                .catch(err => {
                                    console.log('error', err);
                                });
                        }, this.state.cooldown);
                    },
                    MoveWest: () => {
                        if (this.state.wiseExplorer) {
                            const nextRoom = roomMap[this.state.currentRoomData.room_id].w.toString()
                            setTimeout(() => {
                                const endpoint = 'https://lambda-treasure-hunt.herokuapp.com/api/adv/move/';
                                const key = process.env.REACT_APP_KEY || '314ec772ed9d2974590b9b02a56b022a47c1815c';
                                const options = {
                                    headers: {
                                        Authorization: `Token ${key}`,
                                        'Content-Type': 'application/json'
                                    }
                                }
                                const body = {
                                    'direction': "w",
                                    "next_room_id": nextRoom
                                }
                                axios
                                    .post(endpoint, body, options)
                                    .then(res => {
                                        let currentLocationSplit = res.data.coordinates.replace( /[\s()]/g, '' ).split( ',' );
                                        let currentLocation = [({x: Number(currentLocationSplit[0]), y: Number(currentLocationSplit[1])})]
                                        this.setState({
                                            currentRoomData: res.data,
                                            currentLocation: currentLocation,
                                            cooldown: (res.data.cooldown * 1100) //cooldown * 1100 for milliseconds and small buffer.
                                        });
                                    })
                                    .catch(err => {
                                        console.log('error', err);
                                    });
                            }, this.state.cooldown);
                        }
                        else {
                            setTimeout(() => {
                                const endpoint = 'https://lambda-treasure-hunt.herokuapp.com/api/adv/move/';
                                const key = process.env.REACT_APP_KEY || '314ec772ed9d2974590b9b02a56b022a47c1815c';
                                const options = {
                                    headers: {
                                        Authorization: `Token ${key}`,
                                        'Content-Type': 'application/json'
                                    },
                                }
                                const body = {
                                    'direction': "w",
                                }
                                axios
                                    .post(endpoint, body, options)
                                    .then(res => {
                                        let currentLocationSplit = res.data.coordinates.replace( /[\s()]/g, '' ).split( ',' );
                                        let currentLocation = [({x: Number(currentLocationSplit[0]), y: Number(currentLocationSplit[1])})]
                                        this.setState({
                                            currentRoomData: res.data,
                                            currentLocation: currentLocation,
                                            cooldown: (res.data.cooldown * 1100) //cooldown * 1100 for milliseconds and small buffer.
                                        });
                                    })
                                    .catch(err => {
                                        console.log('error', err);
                                    });
                            }, this.state.cooldown);
                        }
                    },
                    MoveEast: () => {
                        if (this.state.wiseExplorer) {
                            const nextRoom = roomMap[this.state.currentRoomData.room_id].e.toString()
                            setTimeout(() => {
                                const endpoint = 'https://lambda-treasure-hunt.herokuapp.com/api/adv/move/';
                                const key = process.env.REACT_APP_KEY || '314ec772ed9d2974590b9b02a56b022a47c1815c';
                                const options = {
                                    headers: {
                                        Authorization: `Token ${key}`,
                                        'Content-Type': 'application/json'
                                    }
                                }
                                const body = {
                                    'direction': "e",
                                    "next_room_id": nextRoom
                                }
                                axios
                                    .post(endpoint, body, options)
                                    .then(res => {
                                        let currentLocationSplit = res.data.coordinates.replace( /[\s()]/g, '' ).split( ',' );
                                        let currentLocation = [({x: Number(currentLocationSplit[0]), y: Number(currentLocationSplit[1])})]
                                        this.setState({
                                            currentRoomData: res.data,
                                            currentLocation: currentLocation,
                                            cooldown: (res.data.cooldown * 1100) //cooldown * 1100 for milliseconds and small buffer.
                                        });
                                    })
                                    .catch(err => {
                                        console.log('error', err);
                                    });
                            }, this.state.cooldown);
                        }
                        else {
                            setTimeout(() => {
                                const endpoint = 'https://lambda-treasure-hunt.herokuapp.com/api/adv/move/';
                                const key = process.env.REACT_APP_KEY || '314ec772ed9d2974590b9b02a56b022a47c1815c';
                                const options = {
                                    headers: {
                                        Authorization: `Token ${key}`,
                                        'Content-Type': 'application/json'
                                    },
                                }
                                const body = {
                                    'direction': "e",
                                }
                                axios
                                    .post(endpoint, body, options)
                                    .then(res => {
                                        let currentLocationSplit = res.data.coordinates.replace( /[\s()]/g, '' ).split( ',' );
                                        let currentLocation = [({x: Number(currentLocationSplit[0]), y: Number(currentLocationSplit[1])})]
                                        this.setState({
                                            currentRoomData: res.data,
                                            currentLocation: currentLocation,
                                            cooldown: (res.data.cooldown * 1100) //cooldown * 1100 for milliseconds and small buffer.
                                        });
                                    })
                                    .catch(err => {
                                        console.log('error', err);
                                    });
                            }, this.state.cooldown);
                        }
                    },
                    MoveNorth: () => {
                        if (this.state.wiseExplorer) {
                            const nextRoom = roomMap[this.state.currentRoomData.room_id].n.toString()
                            setTimeout(() => {
                                const endpoint = 'https://lambda-treasure-hunt.herokuapp.com/api/adv/move/';
                                const key = process.env.REACT_APP_KEY || '314ec772ed9d2974590b9b02a56b022a47c1815c';
                                const options = {
                                    headers: {
                                        Authorization: `Token ${key}`,
                                        'Content-Type': 'application/json'
                                    }
                                }
                                const body = {
                                    'direction': "n",
                                    "next_room_id": nextRoom
                                }
                                axios
                                    .post(endpoint, body, options)
                                    .then(res => {
                                        let currentLocationSplit = res.data.coordinates.replace( /[\s()]/g, '' ).split( ',' );
                                        let currentLocation = [({x: Number(currentLocationSplit[0]), y: Number(currentLocationSplit[1])})]
                                        this.setState({
                                            currentRoomData: res.data,
                                            currentLocation: currentLocation,
                                            cooldown: (res.data.cooldown * 1100) //cooldown * 1100 for milliseconds and small buffer.
                                        });
                                    })
                                    .catch(err => {
                                        console.log('error', err);
                                    });
                            }, this.state.cooldown);
                        }
                        else {
                            setTimeout(() => {
                                const endpoint = 'https://lambda-treasure-hunt.herokuapp.com/api/adv/move/';
                                const key = process.env.REACT_APP_KEY || '314ec772ed9d2974590b9b02a56b022a47c1815c';
                                const options = {
                                    headers: {
                                        Authorization: `Token ${key}`,
                                        'Content-Type': 'application/json'
                                    },
                                }
                                const body = {
                                    'direction': "n",
                                }
                                axios
                                    .post(endpoint, body, options)
                                    .then(res => {
                                        let currentLocationSplit = res.data.coordinates.replace( /[\s()]/g, '' ).split( ',' );
                                        let currentLocation = [({x: Number(currentLocationSplit[0]), y: Number(currentLocationSplit[1])})]
                                        this.setState({
                                            currentRoomData: res.data,
                                            currentLocation: currentLocation,
                                            cooldown: (res.data.cooldown * 1100) //cooldown * 1100 for milliseconds and small buffer.
                                        });
                                    })
                                    .catch(err => {
                                        console.log('error', err);
                                    });
                            }, this.state.cooldown);
                        }
                    },
                    MoveSouth: () => {
                        if (this.state.wiseExplorer) {
                            const nextRoom = roomMap[this.state.currentRoomData.room_id].s.toString()
                            setTimeout(() => {
                                const endpoint = 'https://lambda-treasure-hunt.herokuapp.com/api/adv/move/';
                                const key = process.env.REACT_APP_KEY || '314ec772ed9d2974590b9b02a56b022a47c1815c';
                                const options = {
                                    headers: {
                                        Authorization: `Token ${key}`,
                                        'Content-Type': 'application/json'
                                    }
                                }
                                const body = {
                                    'direction': "s",
                                    "next_room_id": nextRoom
                                }
                                axios
                                    .post(endpoint, body, options)
                                    .then(res => {
                                        let currentLocationSplit = res.data.coordinates.replace( /[\s()]/g, '' ).split( ',' );
                                        let currentLocation = [({x: Number(currentLocationSplit[0]), y: Number(currentLocationSplit[1])})]
                                        this.setState({
                                            currentRoomData: res.data,
                                            currentLocation: currentLocation,
                                            cooldown: (res.data.cooldown * 1100) //cooldown * 1100 for milliseconds and small buffer.
                                        });
                                    })
                                    .catch(err => {
                                        console.log('error', err);
                                    });
                            }, this.state.cooldown);
                        }
                        else {
                            setTimeout(() => {
                                const endpoint = 'https://lambda-treasure-hunt.herokuapp.com/api/adv/move/';
                                const key = process.env.REACT_APP_KEY || '314ec772ed9d2974590b9b02a56b022a47c1815c';
                                const options = {
                                    headers: {
                                        Authorization: `Token ${key}`,
                                        'Content-Type': 'application/json'
                                    },
                                }
                                const body = {
                                    'direction': "s",
                                }
                                axios
                                    .post(endpoint, body, options)
                                    .then(res => {
                                        let currentLocationSplit = res.data.coordinates.replace( /[\s()]/g, '' ).split( ',' );
                                        let currentLocation = [({x: Number(currentLocationSplit[0]), y: Number(currentLocationSplit[1])})]
                                        this.setState({
                                            currentRoomData: res.data,
                                            currentLocation: currentLocation,
                                            cooldown: (res.data.cooldown * 1100) //cooldown * 1100 for milliseconds and small buffer.
                                        });
                                    })
                                    .catch(err => {
                                        console.log('error', err);
                                    });
                            }, this.state.cooldown);
                        }
                    },
                    DropItem: (item) => {
                        setTimeout(() => {
                            const itemName = item.item
                            const endpoint = 'https://lambda-treasure-hunt.herokuapp.com/api/adv/drop/';
                            const key = process.env.REACT_APP_KEY || '314ec772ed9d2974590b9b02a56b022a47c1815c';
                            const options = {
                                headers: {
                                    Authorization: `Token ${key}`,
                                    'Content-Type': 'application/json'
                                }
                            }
                            const body = {
                                'name': `${itemName}`,
                            }
                            axios
                                .post(endpoint, body, options)
                                .then( res => {
                                    this.setState({
                                        cooldown: (res.data.cooldown * 1300) //cooldown * 1100 for milliseconds and small buffer.
                                    });
                                })
                                .catch(err => {
                                    console.log('error', err);
                                });
                        }, this.state.cooldown);
                    },
                    SellItem: (item) => {
                        setTimeout(() => {
                            const itemName = item.item
                            const endpoint = 'https://lambda-treasure-hunt.herokuapp.com/api/adv/sell/';
                            const key = process.env.REACT_APP_KEY || '314ec772ed9d2974590b9b02a56b022a47c1815c';
                            const options = {
                                headers: {
                                    Authorization: `Token ${key}`,
                                    'Content-Type': 'application/json'
                                }
                            }
                            const body = {
                                'name': `${itemName}`,
                                "confirm": 'yes'
                            }
                            if (itemName.includes('treasure')) {
                                axios
                                    .post(endpoint, body, options)
                                    .then( res => {
                                        console.log('res.data', res.data)
                                        this.setState({
                                            cooldown: (res.data.cooldown * 1100) //cooldown * 1100 for milliseconds and small buffer.
                                        });
                                    })
                                    .catch(err => {
                                        console.log('error', err);
                                    });
                            }
                            else {
                                alert("The shopkeeper doesn't want that item.  He currently would only like to buy your treasure.")
                            }
                        }, this.state.cooldown);
                    },
                    PickUpItem: (item) => {
                        setTimeout(() => {
                            const itemName = item.item
                            const endpoint = 'https://lambda-treasure-hunt.herokuapp.com/api/adv/take/';
                            const key = process.env.REACT_APP_KEY || '314ec772ed9d2974590b9b02a56b022a47c1815c';
                            const options = {
                                headers: {
                                    Authorization: `Token ${key}`,
                                    'Content-Type': 'application/json'
                                }
                            }
                            const body = {
                                'name': `${itemName}`,
                            }
                            axios
                                .post(endpoint, body, options)
                                .then( res => {
                                    this.setState({
                                        cooldown: (res.data.cooldown * 1300) //cooldown * 1100 for milliseconds and small buffer.
                                    });
                                })
                                .catch(err => {
                                    console.log('error', err);
                                });
                        }, this.state.cooldown);
                    },
                }}
            >
                {this.props.children}
            </AppContext.Provider>
        );
    }
}