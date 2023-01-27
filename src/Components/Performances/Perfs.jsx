import React from 'react'
import { useSelector } from 'react-redux'
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer } from 'recharts'
import styled from 'styled-components'


const PerfContainer = styled.div`
width: 258px;
height: 263px;
display: flex;
align-items: center;
justify-content: center;
background-color: #282D30;
border-radius: 5px;
`

function Perfs() {
    const data = useSelector(store => store.perfs.perfsDatas)

    return (
        <PerfContainer>
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={data} outerRadius={90}>
                    <PolarGrid radialLines={false} />
                    <PolarAngleAxis dy={3} dataKey="subject" tick={{ fill: "#fff", fontSize: "12px", fontWeight: 600 }} />
                    <Radar dataKey="value" fill="#ff0101" fillOpacity={0.7} />
                </RadarChart>
            </ResponsiveContainer>
        </PerfContainer>
    )
}

export default Perfs
