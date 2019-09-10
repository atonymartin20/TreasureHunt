import React  from 'react';


class UserInfoDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
  
    render() {
        return (
            <div>
                <h2>User Info</h2>
                <ul>
                    <li>Name: </li>
                    <li>Cooldown: </li>
                    <li>Encumbrance: </li>
                    <li>Strength: </li>
                    <li>Speed: </li>
                    <li>Gold: </li>
                    <li>Inventory: </li>  
                </ul>
            </div>
        );
    }
}

export default UserInfoDisplay;
