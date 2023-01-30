import Model from "./formatData"
import { successfullActivityCallApi } from '../Redux/Actions/activityActions'
import { successfullUserCallApi } from '../Redux/Actions/mainDataAction'
import { successfullPerfApiCall } from "../Redux/Actions/perfActions"
import { successfullSessionApiCall } from "../Redux/Actions/sessionAction"
import store from "../Redux/store"

const model = new Model()
export function initApi(id, url) {
    getMainDatas(id, url)
    getActivityDatas(id, url)
    getPerformancesDatas(id, url)
    getSessionDatas(id, url)
}
/**
    * 
    * @param {number} id 
    * @param {string} url 
    * @returns {object} user main datas
    */
export async function getMainDatas(id, url) {
    try {
        const response = await fetch(`${url}/${id}`)
        if (response.ok) {
            const data = await response.json()

            return store.dispatch(successfullUserCallApi(model.reformUserData(data.data)))
        }
    }
    catch (error) {
        console.log(error)
    }
}

/**
 * 
 * @param {number} id 
 * @param {string} url 
 * @param {string} endpoint     
 * @returns {object} user activity datas
 */
export async function getActivityDatas(id, url) {

    try {
        const response = await fetch(`${url}/${id}/activity`)
        if (response.ok) {
            const data = await response.json()
            return store.dispatch(successfullActivityCallApi(model.reformActivityData(data.data)))
        }

    } catch (error) {
        console.log(error)
    }
}

/**
 * 
 * @param {number} id 
 * @param {string} url 
 * @param {string} endpoint 
 * @returns {object} user performance datas
 */
export async function getPerformancesDatas(id, url, endpoint) {
    try {
        const response = await fetch(`${url}/${id}/performance`)
        if (response.ok) {
            const data = await response.json()
            return store.dispatch(successfullPerfApiCall(model.reformPerfsData(data.data)))
        }
    } catch (error) {
        console.log(error)
    }
}

/**
 * 
 * @param {number} id 
 * @param {string} url 
 * @param {string} endpoint 
 * @returns {object} user session datas || error
 */
export async function getSessionDatas(id, url) {
    try {
        const response = await fetch(`${url}/${id}/average-sessions`)
        if (response.ok) {
            const data = await response.json()
            return store.dispatch(successfullSessionApiCall(model.reformSessionData(data.data)))
        }
    } catch (error) {
        console.log(error)
    }
}


