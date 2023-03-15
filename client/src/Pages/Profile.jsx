import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../Layout/Layout'
import { useSelector, useDispatch } from 'react-redux'


import styled from 'styled-components'
import Activity from '../Components/Activity/Activity'
import Session from '../Components/Session/Session'
import Perfs from '../Components/Performances/Perfs'
import Score from '../Components/Score/Score'


import { initApi } from '../service/dataApiCall'
import { initMockApi } from "../service/mockDataCall"
import NutrimentCard from '../Components/NutrimentCard/NutrimentCard'

const Container = styled.div`
width: 100%;
padding-left:15.55%;
padding-top: 4.72%;
padding-right: 6.25%;
height: 100%;
display: flex;
flex-direction: column;
.name{
    color: red;
}
h1{
    font-size: 48px;
    font-weight: 500;
}
.greetings{
    margin-top: 1.86%;
    font-size: 18px;
}
section{
    display: flex;
    width: 100%;
    margin-top: 6.85%;
    margin-top: clamp(30px,6.85%, 77px);
    column-gap: 31px;
    justify-content: space-between;
}
.nutrimentsContainer{
    display: flex;
    flex-direction: column;
    width: fit-content;
    height: 100%;
    justify-content: space-between;
    p{
        margin-top: 5px;
    }
}
.graphContainer{
    display:flex;
    margin-top: 4.715%;
    column-gap: 3.59%;
    /* column-gap: clamp() */
    width: 100%;
}
.chartsContainer{
    width: 74.16%;
    /* width: clamp(500px,60vw, 1000px); */
    height: 100%;
    display: flex;
    flex-direction: column;
}
`


function Profile() {
    const userId = Number(useParams().id)
    const { Nutriments } = useSelector(store => store.mainData.userDatas)
    const { firstName } = useSelector(store => store.mainData.userDatas)
    useEffect(() => {
        initMockApi(userId, '../src/mockedDatas')
    }, [])

    return (
        <Layout>
            <Container>
                <h1>Bonjour <span className='name'>{firstName}</span></h1>
                <p className='greetings'>Félicitation ! Vous avez explosé vos objectifs hier &#128079;</p>
                <section>
                    <div className='chartsContainer'>
                        <Activity />
                        <div className='graphContainer'>
                            <Session />
                            <Perfs />
                            <Score />
                        </div>
                    </div>
                    <div className='nutrimentsContainer'>{Nutriments && Nutriments.map((data, key) => {
                        return <NutrimentCard key={key} title={data.kind} count={data.value} />
                    })}</div>
                </section>
            </Container>
        </Layout>
    )
}

export default Profile
