import { combineReducers } from 'redux'
import { activityReducer } from './activityReducer'
import { mainDataReducer } from './mainDataReducer'
import { sessionReducer } from './sessionReducer'
import { performanceReducer } from './performanceReducer'
import { initApi } from "../../service/dataApiCall"
import { initMockApi } from '../../service/mockDataCall'

export default function combinedReducers(state = {}, action) {
    if (action.type === "fromApi") {
        initApi(action.userId, 'http://localhost:3000/user')
    }
    if (action.type === "fromMockDatas") {
        initMockApi(action.userId, '../src/mockedDatas')
    }
    return {
        activity: activityReducer(state.activity, action),
        mainData: mainDataReducer(state.mainData, action),
        sessions: sessionReducer(state.sessions, action),
        perfs: performanceReducer(state.perfs, action)
    }
}

