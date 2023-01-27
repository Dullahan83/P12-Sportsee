export const userDataReceived = 'userDataReceived'
export const userDataNotReceived = 'userDataNotReceived'

export const successfullUserCallApi = (data) => {
    return {
        type: userDataReceived,
        payload: data
    }
}

export const successfullUserCallMock = (data) => {
    return {
        type: userDataReceived,
        payload: data
    }
}