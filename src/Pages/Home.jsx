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
padding-left:224px;
padding-top: 68px;
padding-right: 90px;
height: 100%;
.name{
    color: red;
}
h1{
    font-size: 48px;
    font-weight: 500;
}
.greetings{
    margin-top: 21px;
    font-size: 18px;
}
section{
    display: flex;
    width: 100%;
    margin-top: 77px;
    column-gap: 31px;
}
.nutrimentsContainer{
    display: flex;
    flex-direction: column;
    width: 100%;
    row-gap: 39px;
    p{
        margin-top: 5px;
    }
}
.graphContainer{
    display:flex;
    margin-top: 28px;
    column-gap: 30px;
}
.legend{
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


function Home() {
    const userId = Number(useParams().id)
    const test = useSelector(store => store)
    const { Nutriments } = useSelector(store => store.mainData.userDatas)
    const { firstName } = useSelector(store => store.mainData.userDatas)
    useEffect(() => {
        // initApi(userId, 'http://localhost:3000/user')
        initMockApi(userId, '../src/mockedDatas')
        console.log(test)
    }, [])

    return (
        <Layout>
            <Container>
                <h1>Bonjour <span className='name'>{firstName}</span></h1>
                <p className='greetings'>Félicitation ! Vous avez explosé vos objectifs hier &#128079;</p>
                <section>
                    <div>
                        <div style={{ height: "320px", backgroundColor: "#fbfbfb", padding: "24px 32px" }}>
                            <div className='legend'>
                                <h4>Activité quotidienne</h4>
                                <ul >
                                    <li><p>Poids(kg)</p></li>
                                    <li><p>Calories brûlées(kCal)</p></li>
                                </ul>
                            </div>
                            <Activity />
                        </div>
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

export default Home
