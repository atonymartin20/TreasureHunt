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
        cooldown: 2000,
        coinCount: null,
        flying: localStorage.getItem('flight') || false,
        ghostFriend: localStorage.getItem('ghost_companion') || false,
        dash: localStorage.getItem('runfast' || false)
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
                                    localStorage.setItem('userData', JSON.stringify(res.data));
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
                    CoinBalance: () => {
                        setTimeout(() => {
                            const endpoint = 'https://lambda-treasure-hunt.herokuapp.com/api/bc/get_balance/';
                            const key = process.env.REACT_APP_KEY || '314ec772ed9d2974590b9b02a56b022a47c1815c';
                            const options = {
                                headers: {
                                    Authorization: `Token ${key}`
                                }
                            };
                            axios
                                .get(endpoint, options)
                                .then(res => {
                                    let coinMessage = res.data.messages;
                                    // Will give something like this:
                                    // ["You have a balance of 35.0 Lambda Coins"]
                                    let regExpression = Number(/[0-9]+[.][0]*/.exec(coinMessage)[0]);
                                    // pulls out just the number value in the above statement

                                    this.setState({
                                        coinCount: regExpression,
                                        cooldown: (res.data.cooldown * 1300)
                                    });
                                })
                                .catch(err => {
                                    console.log('error', err);
                                });
                        }, this.state.cooldown);
                    },
                    FlyWest: () => {
                        if (this.state.wiseExplorer) {
                            const nextRoom = roomMap[this.state.currentRoomData.room_id].w.toString()
                            setTimeout(() => {
                                const endpoint = 'https://lambda-treasure-hunt.herokuapp.com/api/adv/fly/';
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
                                const endpoint = 'https://lambda-treasure-hunt.herokuapp.com/api/adv/fly/';
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
                                            cooldown: (res.data.cooldown * 1000)
                                        });
                                    })
                                    .catch(err => {
                                        console.log('error', err);
                                    });
                            }, this.state.cooldown);
                        }
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
                    FlyEast: () => {
                        if (this.state.wiseExplorer) {
                            const nextRoom = roomMap[this.state.currentRoomData.room_id].e.toString()
                            setTimeout(() => {
                                const endpoint = 'https://lambda-treasure-hunt.herokuapp.com/api/adv/fly/';
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
                                const endpoint = 'https://lambda-treasure-hunt.herokuapp.com/api/adv/fly/';
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
                                            cooldown: (res.data.cooldown * 1000)
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
                    FlyNorth: () => {
                        if (this.state.wiseExplorer) {
                            const nextRoom = roomMap[this.state.currentRoomData.room_id].n.toString()
                            setTimeout(() => {
                                const endpoint = 'https://lambda-treasure-hunt.herokuapp.com/api/adv/fly/';
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
                                const endpoint = 'https://lambda-treasure-hunt.herokuapp.com/api/adv/fly/';
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
                                            cooldown: (res.data.cooldown * 1000)
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
                    FlySouth: () => {
                        if (this.state.wiseExplorer) {
                            const nextRoom = roomMap[this.state.currentRoomData.room_id].s.toString()
                            setTimeout(() => {
                                const endpoint = 'https://lambda-treasure-hunt.herokuapp.com/api/adv/fly/';
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
                                const endpoint = 'https://lambda-treasure-hunt.herokuapp.com/api/adv/fly/';
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
                                            cooldown: (res.data.cooldown * 1000)
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
                    PrayAtAltar: () => {
                        setTimeout(() => {
                            const endpoint = 'https://lambda-treasure-hunt.herokuapp.com/api/adv/pray/';
                            const key = process.env.REACT_APP_KEY || '314ec772ed9d2974590b9b02a56b022a47c1815c';
                            const options = {
                                headers: {
                                    Authorization: `Token ${key}`,
                                    'Content-Type': 'application/json'
                                },
                            }
                            axios
                                .post(endpoint, {}, options)
                                .then(res => {
                                    let PrayerMessage = res.data.messages
                                    console.log(PrayerMessage)
                                    let CanIFly = /(?:hover)/.test(PrayerMessage);
                                    let ghostlyUnburden = /(?:ghostly)/.test(PrayerMessage);
                                    let CanIDash = /(?:speed)/.test(PrayerMessage);

                                    if (CanIFly === true) {
                                        localStorage.setItem('flight', 'activated');
                                        alert(`${PrayerMessage}\n\nYou will be able to move again in 50 seconds.`)
                                        this.setState({
                                            flying: true,
                                        });
                                    }

                                    else if (ghostlyUnburden === true) {
                                        localStorage.setItem('ghost_companion', 'activated');
                                        alert(`${PrayerMessage}\n\nYou will be able to move again in 50 seconds.`)
                                        this.setState({
                                            ghostFriend: true,
                                        })
                                    }

                                    else if (CanIDash === true) {
                                        localStorage.setItem('runfast', 'I am the Flash!');
                                        alert(`${PrayerMessage}\n\nYou will be able to move again in 50 seconds.`)
                                        this.setState({
                                            dash: true,
                                        })
                                    }
                                })
                                .catch(err => {
                                    console.log('error', err);
                                });
                        }, this.state.cooldown);
                    },
                    MineOneCoin: () => {
                        setTimeout(() => {
                            // Mine a coin Code Here
                        }, this.state.cooldown);
                    },
                    RenameCharacter: () => {
                        setTimeout(() => {
                            // Rename Character Code Here
                        }, this.state.cooldown);
                    },
                    TransmogItem: () => {
                        setTimeout(() => {
                            // Add Transmog code
                        }, this.state.cooldown);
                    },
                }}
            >
                {this.props.children}
            </AppContext.Provider>
        );
    }
}