export const activityDataReceived = "activityDataReceived"
export const activityDataNotReceived = 'activityDataNotReceived'



export const successfullActivityCallApi = (data) => {
    return {
        type: activityDataReceived,
        payload: data
    }
}

export const successfullActivityCallMock = (data) => {
    return {
        type: activityDataReceived,
        payload: data
    }
}