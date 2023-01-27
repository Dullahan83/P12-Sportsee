export const perfDataReceived = "perfDataReceived"
export const perfDataNotReceived = "perfDataNotReceived"

export const successfullPerfApiCall = (data) => {
    return {
        type: perfDataReceived,
        payload: data
    }
}

export const successfullPerfMockCall = (data) => {
    return {
        type: perfDataReceived,
        payload: data
    }
}