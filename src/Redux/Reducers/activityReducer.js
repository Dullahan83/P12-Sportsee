import { url } from "../store"
import { mockPath } from "../store"
import { activityDataReceived, activityDataNotReceived } from "../Actions/activityActions"

const activityState = {
    activityDatas: []
}

export const activityReducer = (state = activityState, action) => {
    switch (action.type) {

        case activityDataReceived:
            return {
                ...state,
                activityDatas: action.payload
            }
        case activityDataNotReceived:
            return state

        default:
            return state
    }

}
/* 
    mise en place par un service
    action fait appel au call api contenu dans le service
    actions suivies en fonction de success et failure
*/