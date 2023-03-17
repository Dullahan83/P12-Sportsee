import React from 'react'
import { useSelector } from 'react-redux';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, Legend } from 'recharts'
import styled from 'styled-components';

const ActivityContainer = styled.div`
height:51.5%;
background-color: #fbfbfb;
padding: clamp(14px, 2.35vh, 32px) clamp(24px,2.36vw ,40px);
.activityLegend{
    display: flex;
    justify-content: space-between;
    h4{
        font-size: 15px;
    }
    ul{
        display: flex;
        column-gap: 32px;
        li:last-of-type{
            color: red;
        }
    }

    p{
        margin: 0;
        color: #74798c;
        font-size: 14px;
    }
}
`

const CustomizedTooltip = styled.div`
    background-color: #e60000;
    color: #fff;
    padding: 0 6px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    font-size: 12px;
    line-height: 24;
    height: 80px;
`

function Activity() {
    const datas = useSelector(store => store.activity.activityDatas)

    return (
        datas && <ActivityContainer>
            <div className='activityLegend'>
                <h4>Activité quotidienne</h4>
                <ul >
                    <li><p>Poids(kg)</p></li>
                    <li><p>Calories brûlées(kCal)</p></li>
                </ul>
            </div>
            <ResponsiveContainer width="100%" height="100%" >
                <BarChart data={datas} margin={{ top: 47, bottom: 5 }} barSize={7} barGap={8}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="day" dy={15} tickLine={false} fontSize={14} stroke="#9B9EAC" axisLine={{ stroke: "#d8d8d8" }} />
                    <YAxis dataKey="calories" dx={15} orientation='right' axisLine={false} tickLine={false} stroke="#9B9EAC" />
                    <Tooltip wrapperStyle={{ outline: "none" }} content={<CustomTooltip />} />
                    <Bar dataKey="kilogram" fill='#282D30' radius={[10, 10, 0, 0]} />
                    <Bar dataKey="calories" fill='#E60000' radius={[10, 10, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </ActivityContainer>
    )
}

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return <CustomizedTooltip>
            <p>{`${payload[0].value}kg`}</p>
            <p>{`${payload[1].value}Kcal`}</p>
        </CustomizedTooltip>
    }
}
export default Activity
