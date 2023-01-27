import React from 'react'
import Header from '../Components/Header/Header'
import SideBar from '../Components/SideBar/SideBar'
import styled from 'styled-components'
import SwitchButton from '../Components/SwitchButton/SwitchButton'

const Main = styled.main`
    display: flex;
    width: 100%;
`


function Layout({ children }) {
    return (
        <>
            <Header />
            <Main>
                <SwitchButton />
                <SideBar />
                {children}
            </Main>
        </>
    )
}

export default Layout
