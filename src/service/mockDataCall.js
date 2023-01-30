import Model from "./formatData"
import { successfullActivityCallMock } from '../Redux/Actions/activityActions'
import { successfullUserCallMock } from '../Redux/Actions/mainDataAction'
import { successfullPerfMockCall } from "../Redux/Actions/perfActions"
import { successfullSessionMockCall } from "../Redux/Actions/sessionAction"
import store from "../Redux/store"

const model = new Model()
export function initMockApi(id, url) {
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
    const response = await fetch(`${url}/userMainData.json`)
    const data = await response.json()
    const result = data.find(el => el.userData.userId == id)
    return store.dispatch(successfullUserCallMock(model.reformUserData(result.userData)))
}
/**
 * 
 * @param {number} id 
 * @param {string} url 
 * @returns {object} user activity data
 */
export async function getActivityDatas(id, url) {
    const response = await fetch(`${url}/userActivity.json`)
    const data = await response.json()
    const result = data.find(el => el.userData.userId == id)
    return store.dispatch(successfullActivityCallMock(model.reformActivityData(result.userData)))
}

export async function getPerformancesDatas(id, url) {
    const response = await fetch(`${url}/userPerformance.json`)
    const data = await response.json()
    const result = data.find(el => el.userData.userId == id)
    return store.dispatch(successfullPerfMockCall(model.reformPerfsData(result.userData)))
}
export async function getSessionDatas(id, url) {
    const response = await fetch(`${url}/userSession.json`)
    const data = await response.json()
    const result = data.find(el => el.userData.userId == id)
    return store.dispatch(successfullSessionMockCall(model.reformSessionData(result.userData)))
}