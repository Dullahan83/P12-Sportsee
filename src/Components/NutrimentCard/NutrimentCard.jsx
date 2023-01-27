import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
    padding: 32px;
    background-color: #fbfbfb;
    display: flex;
    align-items: center;
    width: 100%;
    div{
        width: 100%;
        margin-left: 15%;
    }
    img{
        width: 60px
    }
    h2{
        font-size: 24px;
    }
`

function NutrimentCard({ count, title }) {
    return (
        <Card>
            <img src={`/assets/${title}-icon.png`} alt="" />
            <div>
                <h2>{count}</h2>
                <p> {title} </p>
            </div>
        </Card>
    )
}

export default NutrimentCard
