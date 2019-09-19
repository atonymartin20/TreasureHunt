import React from 'react';
import { LegendDiv, LegendH2, RegularNodeP, ShopP, ShrineP, PirateRyP, MineP, CurrentLocationP } from '../StyledComponents';

function Legend() {
    return (
        <LegendDiv>
            <LegendH2>Legend:</LegendH2>
            {/* Regular Coord Node #0000FF */}
            <RegularNodeP>Regular Node</RegularNodeP>

            {/* Shop Node  Green #008000 */}
            <ShopP>Shop Location</ShopP>

            {/* Shrine Node Yellow #FFFF00 */}
            <ShrineP>Shrine Location</ShrineP>

            {/* Pirate Ry's Node Pink #FF00F0 with black stroke */}
            <PirateRyP>Pirate Ry's Shop</PirateRyP>

            {/* Mining Spot Black */}
            <MineP>Mining Location</MineP>

            {/* Current Location Red #FF0000 */}
            <CurrentLocationP>Current Location</CurrentLocationP>
       </LegendDiv>
    );
}

export default Legend