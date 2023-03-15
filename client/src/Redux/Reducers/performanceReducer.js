import { url } from "../store"
import { mockPath } from "../store"
import { perfDataReceived, perfDataNotReceived } from "../Actions/perfActions"
const perfState = {
    perfsDatas: []
}

export const performanceReducer = (state = perfState, action) => {
    switch (action.type) {
        case perfDataReceived:
            return {
                ...state,
                perfsDatas: action.payload
            }
        case perfDataNotReceived:
            return {
                ...state
            }
        default:
            return state
    }
}