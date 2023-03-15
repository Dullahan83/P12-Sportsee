export const sessionDataReceived = "sessionDataReceived"
export const sessionDataNotReceived = "sessionDataNotReceived"

export const successfullSessionApiCall = (data) => {
    return {
        type: sessionDataReceived,
        payload: data
    }
}

export const successfullSessionMockCall = (data) => {
    return {
        type: sessionDataReceived,
        payload: data
    }
}