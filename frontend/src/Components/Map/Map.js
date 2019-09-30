// this component displays the map of the rooms and the player's current location

import React from 'react';
import '../../../node_modules/react-vis/dist/style.css';
import { XYPlot, LineSeries, MarkSeries } from 'react-vis';
import rooms from '../../Data/rooms.js';
import Legend from './Legend.js';
import ButtonPanel from '../ButtonPanel';
import { AppContext } from '../Context/AppContext.js';
import { MapDiv, MapH1 } from '../StyledComponents';

class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentLocation: null,
        };
    }

    render() {
        // get coordinates from the room data--used to display rooms
        let coords = [];
        let shrine = [];
        let shop = [];
        let pirateRy = [];
        let mine = [];
        let transmogrifier = [];

        for (var room in rooms) {
            coords.push({ x: rooms[room].x, y: rooms[room].y });

            // If a shrine has been found.  Add it to shrine array
            if (
                rooms[room].room_id === 22 ||
                rooms[room].room_id === 461 ||
                rooms[room].room_id === 499
            ) {
                shrine.push({ x: rooms[room].x, y: rooms[room].y });
            }

            // If the shop has been found.  Add it to shop array
            if (rooms[room].room_id === 1) {
                shop.push({ x: rooms[room].x, y: rooms[room].y });
            }

            // If Pirate Ry's has been found.  Add it to pirateRy array
            if (rooms[room].room_id === 467) {
                pirateRy.push({ x: rooms[room].x, y: rooms[room].y });
            }

            // If the mine has been found.  Add it to mine array
            if (rooms[room].room_id === 250) {
                mine.push({ x: rooms[room].x, y: rooms[room].y });
            }
            if (rooms[room].room_id === 495) {
                transmogrifier.push({ x: rooms[room].x, y: rooms[room].y })
            }
        }

        function getRoomEdges(room) {
            var existingExits = [];
            var edges = [];
            // for every defined exit in a given room, add that room number to the existingExits array
            for (var exit in room.visited) {
                if (room.visited[exit] !== '?') {
                    existingExits.push(room.visited[exit]);
                }
            }
            // for every exit in the room, create an array with the selected room's coords at index 0 and then the exit's coords
            existingExits.forEach(exit => {
                edges.push([
                    { x: room.x, y: room.y },
                    { x: rooms[exit].x, y: rooms[exit].y }
                ]);
            });
            return edges;
        }

        // compile the edges for all rooms--used to display paths between rooms

        function getAllEdges(allRooms) {
            var allEdges = [];
            // merge all of the edges for each room into the resulting array
            for (var room in allRooms) {
                var roomEdges = getRoomEdges(allRooms[room]);
                allEdges = allEdges.concat(roomEdges);
            }
            return allEdges;
        }

        var edges = getAllEdges(rooms);

        // Grabs Window Size
        let plotWidth = window.innerWidth * 0.7;
        let plotHeight = plotWidth * 0.667;

        // If window size is greater than our built-in max width Display this.
        if (window.innerWidth >= 1300) {
            return (
                <MapDiv>
                    <MapH1>Treasure Map</MapH1>
                    <XYPlot height={600} width={870}>
                        {/* return lines from edges */}
                        {edges.map(edge => (
                            <LineSeries
                                data={edge}
                                color="#96B146"
                                key={Math.random()}
                            />
                        ))}
                        {/* display rooms using coordinates */}
                        <MarkSeries data={coords} color="blue" size={5} />

                        {/* Displays Shop in Green */}
                        <MarkSeries data={shop} color="green" size={7} />

                        {/* Displays Shrines in Yellow */}
                        <MarkSeries
                            data={shrine}
                            color="yellow"
                            size={7}
                            stroke="black"
                            strokeWidth={2}
                        />

                        {/* Displays Pirate Ry's in Bright Pink */}
                        <MarkSeries
                            data={pirateRy}
                            color="#FF00F0"
                            size={7}
                            stroke="black"
                            strokeWidth={2}
                        />

                        {/* Displays Mine in Black */}
                        <MarkSeries data={mine} color="black" size={7} />
                        
                        {/* Displays Transmogrifier in Light Pink */}
                        <MarkSeries
                            data={transmogrifier}
                            color="#FABEBE"
                            size={7}
                            stroke="black"
                            strokeWidth={2}
                        />


                        {/* display user's current location */}
                        <MarkSeries
                            data={this.context.state.currentLocation}
                            color="red"
                            size={10}
                            stroke="black"
                            strokeWidth={2}
                        />
                    </XYPlot>
                    <Legend />
                    <ButtonPanel />
                </MapDiv>
            );
        }
        // Else display smaller map version using plotHeight and plotWidth as variables.
        else {
            return (
                <MapDiv>
                    <MapH1>Treasure Map</MapH1>
                    <XYPlot height={plotHeight} width={plotWidth}>
                        {/* return lines from edges */}
                        {edges.map(edge => (
                            <LineSeries
                                data={edge}
                                color="#96B146"
                                key={Math.random()}
                            />
                        ))}
                        {/* display rooms using coordinates */}
                        <MarkSeries data={coords} color="#0000FF" size={4} />

                        {/* Displays Shop in Green */}
                        <MarkSeries data={shop} color="green" size={6} />

                        {/* Displays Shrines in Yellow */}
                        <MarkSeries
                            data={shrine}
                            color="yellow"
                            size={6}
                            stroke="black"
                            strokeWidth={2}
                        />

                        {/* Displays Pirate Ry's in Bright Pink */}
                        <MarkSeries
                            data={pirateRy}
                            color="#FF00F0"
                            size={6}
                            stroke="black"
                            strokeWidth={2}
                        />

                        {/* Displays Mine in Black */}
                        <MarkSeries data={mine} color="black" size={6} />

                        {/* Displays Transmogrifier in Light Pink */}
                        <MarkSeries
                            data={transmogrifier}
                            color="#FABEBE"
                            size={6}
                            stroke="black"
                            strokeWidth={2}
                        />

                        {/* display user's current location */}
                        <MarkSeries
                            data={this.context.state.currentLocation}
                            color="red"
                            size={8}
                            stroke="black"
                            strokeWidth={2}
                        />
                    </XYPlot>
                    <Legend />
                    <ButtonPanel />
                </MapDiv>
            );
        }
    }
}

Map.contextType = AppContext;
export default Map;
