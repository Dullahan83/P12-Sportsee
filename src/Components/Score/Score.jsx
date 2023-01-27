import React from 'react'
import { useSelector } from 'react-redux'
import { RadialBar, RadialBarChart, ResponsiveContainer } from 'recharts'
import styled from 'styled-components'


const ScoreContainer = styled.div`
width: 258px;
height: 263px;
background-color: #fbfbfb;
/* background-color: blue; */
border-radius: 5px;
position: relative;
.title{
    position: absolute;
    top: 9%;
    left: 11.6%;
    color: #20253A;
    font-weight: 600;
}
.scoreLegend{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    width: 63%;
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
    const datas = useSelector(store => store.mainData.userDatas.scoreRef)
    const { score } = useSelector(store => store.mainData.userDatas)
    // const datas = [{ score: 100, fill: "#fff" }, { score: score }]
    return (
        <ScoreContainer>
            <div className='title'>Score</div>
            <div className='scoreLegend'>
                <span>{score * 100}%</span>
                <p>de votre objectif</p>
            </div>
            <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart cx="50%"
                    cy="50%"
                    innerRadius={75}
                    outerRadius={100}
                    barSize={15}
                    startAngle={90} data={datas}
                    endAngle={450}
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
