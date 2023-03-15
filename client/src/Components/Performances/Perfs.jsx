import React from 'react'
import { useSelector } from 'react-redux'
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer } from 'recharts'
import styled from 'styled-components'


const PerfContainer = styled.div`
/* width: 258px; */
/* height: 263px; */
width: 17.91vw;
height: 25.68vh;
width: 31%;
display: flex;
align-items: center;
justify-content: center;
background-color: #282D30;
border-radius: 5px;
`

function Perfs() {
    const data = useSelector(store => store.perfs.perfsDatas)
    return (
        data.length ?
            <PerfContainer>
                <ResponsiveContainer width="100%" height="100%">
                    <RadarChart data={data} outerRadius={"72%"}>
                        <PolarGrid radialLines={false} />
                        <PolarAngleAxis
                            dy={3}
                            dataKey="subject"
                            tick={{ fill: "#fff", fontSize: "12px", fontWeight: 600 }} />
                        <Radar dataKey="value" fill="#FF0101" fillOpacity={0.7} />
                    </RadarChart>
                </ResponsiveContainer>
            </PerfContainer> : <div>Loading</div>
    )
}

export default Perfs
