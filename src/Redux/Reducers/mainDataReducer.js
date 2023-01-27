import { url } from "../store"
import { mockPath } from "../store"
import { userDataReceived, userDataNotReceived } from "../Actions/mainDataAction"


const mainDataState = {
    userDatas: []
}

export const mainDataReducer = (state = mainDataState, action) => {
    if (action.type === userDataReceived) {
        return {
            ...state,
            userDatas: action.payload
        }
    }
    if (action.type === userDataNotReceived) {
        return state
    }
    return state
}