export const fromApi = "fromApi"
export const fromMockDatas = "fromMockDatas"

export const callApi = () => {
    return {
        type: fromApi
    }
}

export const callMockDatas = () => {
    return {
        type: fromMockDatas
    }
}