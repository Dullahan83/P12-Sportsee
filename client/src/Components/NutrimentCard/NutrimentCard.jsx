import React from 'react'
import styled from 'styled-components'
import PropTypes from "prop-types"
const Card = styled.div`
    padding: clamp(18px,14.35%, 32px);
    background-color: #fbfbfb;
    display: flex;
    align-items: center;
    width: 100%;
    div{
        width: 100%;
        margin-left: 15%;
    }
    img{
        width: clamp(35px, 37.318%, 60px)
    }
    h2{
        font-size: clamp(14px,1.66vw,24px);
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

NutrimentCard.propTypes = {
    count: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}
export default NutrimentCard
