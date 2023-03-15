import React from 'react'
import styled from 'styled-components'
import yoga from '/assets/yogaIcon.png'
import natation from '/assets/natationIcon.png'
import velo from '/assets/veloIcon.png'
import musculation from '/assets/musculationIcon.png'

const Sidebar = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #000;
    padding: 60px 26px;
    padding-top: 0;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    height: 100vh;
    left: 0;
    top: 0;
    z-index: -1;
    ul{
        gap: 20px;
        display: flex;
        flex-direction: column;
        list-style:none;
        margin-top: 256px;
    }
    .copyright{
        color: #fff;
        writing-mode:vertical-rl ;
        transform: rotate(-180deg);
    }
`

function SideBar() {
    return (
        <Sidebar>
            <ul>
                <li><img src={yoga} alt="" /></li>
                <li><img src={natation} alt="" /></li>
                <li><img src={velo} alt="" /></li>
                <li><img src={musculation} alt="" /></li>

            </ul>
            <p className='copyright'>Copyright, SportSee 2020</p>
        </Sidebar>
    )
}

export default SideBar
