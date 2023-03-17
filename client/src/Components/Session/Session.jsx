import React from 'react'
import { useSelector } from 'react-redux'
import { LineChart, ResponsiveContainer, Tooltip, XAxis, Line, YAxis, Rectangle } from 'recharts'
import styled from 'styled-components'
import PropTypes from "prop-types"
const SessionContainer = styled.div`
    /* width: 258px;
    height: 263px; */
    /* width: 17.91vw;
    height: 25.68vh; */
    width: 30.95%;
aspect-ratio: 0.98;
    position: relative;
    background-color: #ff0000;
    border-radius: 5px;
    .title{
        position: absolute;
        top: 0;
        left: 0;
        font-size: 15px;
        width: 80%;
        line-height: 1.5;
        color: rgb(255,255,255, 0.50);
        padding-top: 11%;
        padding-left: 13%
    }
`
const CustomizedTooltip = styled.div`
    background-color: #fff;
    color: #000;
    padding: 4px 8px;
    display: flex;
    font-size: 12px;
    height: 30px;
    align-items: center;
    outline: none;
    font-weight: 600;
`
function Session() {
    const sessions = useSelector(store => store.sessions.sessionDatas)
    return (
        <SessionContainer>
            <p className='title'>Durée moyenne des sessions</p>
            <ResponsiveContainer width="100%" heigth='100%'>
                <LineChart data={sessions} >
                    <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "white", opacity: 0.5 }} />
                    <YAxis hide domain={["dataMin - 15", "dataMax + 45"]} />
                    {/* This will allow to add color to the line based on our need */}
                    <defs>
                        <linearGradient id="gradientLine" x1="0" x2="0.7" y2="0">
                            <stop offset="0%" stopColor="#FFF" stopOpacity={0.4} />
                            <stop offset="100%" stopColor="#FFF" />
                        </linearGradient>
                    </defs>
                    <Line dataKey="sessionLength" type="natural" dot={false} stroke="url(#gradientLine)" activeDot={{ stroke: "rgb(255,255,255,0.35)", strokeWidth: 10, r: 6 }} />
                    <Tooltip wrapperStyle={{ outline: "none" }} cursor={<CustomCursor />} content={<CustomTooltip />} />
                </LineChart>
            </ResponsiveContainer>
        </SessionContainer>
    )
}

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return <CustomizedTooltip>
            <p>{`${payload[0].value} min`}</p>
        </CustomizedTooltip>
    }
}

CustomTooltip.propTypes = {
    active: PropTypes.bool,
    payload: PropTypes.array
}
const CustomCursor = ({ points }) => {
    return <Rectangle
        fill='black'
        height={500}
        width={500}
        opacity={0.1}
        x={points[1].x}
    />
}
CustomCursor.propTypes = {
    points: PropTypes.array
}

export default Session
