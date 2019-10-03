import React from 'react';
import { TopBarDiv, TopBarH1, TopBarSpan, TopBarSpanDiv, TopBarSpanLink } from '../StyledComponents';

function TopBar() {
    return(
        <TopBarDiv>
            <TopBarH1>Treasure Hunt</TopBarH1>
            <TopBarSpanDiv>
                <TopBarSpan><TopBarSpanLink to='/home'>Home</TopBarSpanLink></TopBarSpan>
                <TopBarSpan><TopBarSpanLink to='/fullRoom'>Room Data</TopBarSpanLink></TopBarSpan>
                <TopBarSpan><TopBarSpanLink to='/fullPlayer'>Player Data</TopBarSpanLink></TopBarSpan>
                <TopBarSpan><TopBarSpanLink to='/about'>About</TopBarSpanLink></TopBarSpan>
            </TopBarSpanDiv>
        </TopBarDiv>
    )
}

export default TopBar;