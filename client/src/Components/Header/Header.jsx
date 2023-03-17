import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Logo from '/assets/logo.png'
const StyledHeader = styled.header`
    background-color: #000;
    color: #fff;
    display: flex;
    align-items: center;
    padding: 14px 28px;
    padding-right: 91px;
    justify-content: space-between;
    width: 100%;
    img{
        width: 178px;
    }
    nav{
        width: 75.25%;
        ul{
            display: flex;
            list-style: none;
            flex-direction: row;
            font-size: 24px;
            font-weight: 500;
            justify-content: space-between;
            a{
                text-decoration: none;
                color: #fff;
            }
        }
    }
`

function Header() {
    return (
        <StyledHeader>
            <img src={Logo} alt="" />
            <nav>
                <ul>
                    <li><Link to="/">Accueil</Link></li>
                    <li>Profil</li>
                    <li>Réglage</li>
                    <li>Communauté</li>
                </ul>

            </nav>
        </StyledHeader>
    )
}

export default Header
