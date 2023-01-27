import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

const ButtonContainer = styled.div`
    position: absolute;
    top:100px;
    left: 150px;
    display: flex;
    align-items: center;
    column-gap: 5px;
    p{
        font-weight: 500;
    }
    .active{
        color: red;
    }
    .isSwitched{
        p:last-of-type{
            color: red;
        }
        &:after{
            left: 50%;
        }
     
    }
    &:hover{
        cursor: pointer
    }
`
const Button = styled.div`
    width: 80px;
    height: 40px;
    border-radius: 50px;
    border: 1px solid black;
    position: relative;
   
    &:after{
        content: "";
        width: 35px;
        height: 35px;
        background-color: #000;
        top: 50%;
        left: 0;
        position: absolute;
        border-radius: 100%;
        transform: translate(2px,-50%);
        transition: left 0.3s ease-out;
    }
    
`
function SwitchButton() {
    const [toggleSource, setToggleSource] = useState(false)
    const { id } = useParams()
    const dispatch = useDispatch()
    function handleToggle() {
        setToggleSource(previous => !previous)
        !toggleSource ? dispatch({ type: "fromApi", userId: id }) : dispatch({ type: "fromMockDatas", userId: id })
    }
    return (
        <ButtonContainer>
            <p className={!toggleSource ? "active" : ""}>MockApi</p>
            <Button className={toggleSource ? "isSwitched" : ""} onClick={() => handleToggle()} />
            <p className={toggleSource ? "active" : ""}>Api</p>
        </ButtonContainer>
    )
}

export default SwitchButton
