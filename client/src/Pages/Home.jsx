import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../Layout/Layout'
import styled from 'styled-components'

const Container = styled.div`
width: 100%;
padding-left:15.55%;
padding-top: 4.72%;
padding-right: 6.25%;
height: 100%;
display: flex;
flex-direction: column;
`
function Home() {
    return (
        <Layout>
            <Container>
                <Link to="/profile/12">Profile 12</Link>
                <Link to="/profile/18">Profile 18</Link>
            </Container>
        </Layout>
    )
}

export default Home
