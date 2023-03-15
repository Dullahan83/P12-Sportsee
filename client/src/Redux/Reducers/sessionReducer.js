import { url } from "../store"
import { mockPath } from "../store"
import { sessionDataReceived, sessionDataNotReceived } from "../Actions/sessionAction"
const sessionState = {
    sessionDatas: []
}

export const sessionReducer = (state = sessionState, action) => {
    switch (action.type) {
        case sessionDataReceived:
            return {
                ...state,
                sessionDatas: action.payload
            }
        case sessionDataNotReceived:
            return state
        default:
            return state
    }
}