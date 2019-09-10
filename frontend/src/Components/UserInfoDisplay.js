import React from 'react';
import axios from 'axios';

class UserInfoDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: {}
        }
    }

    componentDidMount() {
        const endpoint = 'https://lambda-treasure-hunt.herokuapp.com/api/adv/status/';
        const options = {
            headers: {
                Authorization: 'Token {ADD TOKEN HERE}'
            }
        };

        axios.post(endpoint, {}, options)
            .then(res => {
                this.setState({
                    userData: res.data
                });
            })
            .catch(err => {
                console.log('error', err);
            });
    }
  
    render() {
        return (
            <div>
                <h2>User Info</h2>
                <ul>
                    <li>Name: {this.state.userData.name}</li>
                    <li>Cooldown: {this.state.userData.cooldown}</li>
                    <li>Encumbrance: {this.state.userData.encumbrance}</li>
                    <li>Strength: {this.state.userData.strength}</li>
                    <li>Speed: {this.state.userData.speed}</li>
                    <li>Gold: {this.state.userData.gold}</li>
                    <li>Inventory: {this.state.userData.inventory}</li>  
                </ul>
            </div>
        );
    }
}

export default UserInfoDisplay;
