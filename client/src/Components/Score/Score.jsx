import React from 'react'
import { useSelector } from 'react-redux'
import { Cell, Pie, PieChart, PolarRadiusAxis, RadialBar, RadialBarChart, ResponsiveContainer } from 'recharts'
import styled from 'styled-components'


const ScoreContainer = styled.div`
/* width: 258px;
height: 263px; */
width: 17.91vw;
height: 25.68vh;
background-color: #fbfbfb;
border-radius: 5px;
position: relative;
.title{
    position: absolute;
    top: 8%;
    left: 10%;
    color: #20253A;
    font-weight: 600;
}
.scoreLegend{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    width: 66.5%;
    aspect-ratio: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    z-index: 1;
    flex-direction: column;
    span{
        font-weight: 600;
        font-size: 24px;
    }
    p{
        width: 50%;
        text-align: center;
        font-size: 16px;
        color: #74798C
    }
}
`

function Score() {
    const test = useSelector(store => store)
    const datas = useSelector(store => store.mainData.userDatas.scoreRef)
    const { score } = useSelector(store => store.mainData.userDatas)
    return (
        <ScoreContainer>
            <div className='title'>Score</div>
            <div className='scoreLegend'>
                <span>{score * 100}%</span>
                <p>de votre objectif</p>
            </div>
            <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart
                    cx={"50%"}
                    cy={"50%"}
                    innerRadius={"60%"}
                    outerRadius={"90%"}
                    barSize={"9%"}
                    startAngle={90} data={datas}
                    endAngle={450}
                    barGap={40}
                >
                    <RadialBar dataKey="score"
                        fill="#FF0000"
                        cornerRadius="50%"
                    />
                </RadialBarChart>
            </ResponsiveContainer>
        </ScoreContainer>
    )
}

export default Score
