import React from 'react'
import Header from '../Components/Header/Header'
import SideBar from '../Components/SideBar/SideBar'
import styled from 'styled-components'
import SwitchButton from '../Components/SwitchButton/SwitchButton'
import PropTypes from "prop-types"
const Main = styled.main`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    position: relative;
    &>div{
        height: 100%;
    }
`


function Layout({ children }) {
    return (
        <>
            <Main>
                <Header />
                <div>
                    <SwitchButton />
                    <SideBar />
                    {children}
                </div>
            </Main>
        </>
    )
}

export default Layout

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}