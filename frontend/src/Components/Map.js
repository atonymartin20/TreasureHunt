// this component displays the map of the rooms and the player's current location

import React  from 'react';
import '../../node_modules/react-vis/dist/style.css';
import {XYPlot, LineSeries, MarkSeries} from 'react-vis';
import rooms from '../Data/rooms.js'

class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentLocation: [{x: 4, y: 5}]
        }
    }
  
    render() {

    // get coordinates from the room data--used to display rooms

    var coords = []

    for (var room in rooms) {
        let c = rooms[room].coordinates.replace( /[\s()]/g, '' ).split( ',' );
        coords.push({x: Number(c[0]), y: Number(c[1])});
    }
        
    // get edges (existing exits) for a single room 

    // let coords2 = [coords[this.state.currentLocation]]

    function getRoomEdges(room) {
        var existingExits = []
        var edges = []
        // for every defined exit in a given room, add that room number to the existingExits array
        for (var exit in room.visited) {
            if (room.visited[exit] !== '?') {
                existingExits.push(room.visited[exit])
            }
        }
        // for every exit in the room, create an array with the selected room's coords at index 0 and then the exit's coords
        existingExits.forEach(exit => {
            let c = room.coordinates.replace( /[\s()]/g, '' ).split( ',' );
            let d = rooms[exit].coordinates.replace( /[\s()]/g, '' ).split( ',' );
            edges.push([{x: Number(c[0]), y: Number(c[1])}, {x: Number(d[0]), y: Number(d[1])}])
        })
        return edges
    }

    // compile the edges for all rooms--used to display paths between rooms

    function getAllEdges(allRooms) {
        var allEdges = []
        // merge all of the edges for each room into the resulting array 
        for (var room in allRooms) {
            var roomEdges = getRoomEdges(allRooms[room])
            allEdges = allEdges.concat(roomEdges)
        }
        return allEdges
    }

    var edges = getAllEdges(rooms)

    return (
      <div>
        <XYPlot height={415} width={690}>
            {/* return lines from edges */}
            {edges.map(edge => (
                <LineSeries
                    data={edge}
                    color='#96B146'
                    key={Math.random()}
                />
            ))}
            {/* display rooms using coordinates */}
            <MarkSeries
                data={coords}
                color='blue'
            />
            {/* display user's current location */}
            {/* <MarkSeries
                data={this.state.currentLocation}
                color='red'
            /> */}
            {/* <MarkSeries
                data={this.props.currentLocation}
                color='red'
            /> */}
        </XYPlot>
        
      </div>
    );
  }
}

export default Map;
