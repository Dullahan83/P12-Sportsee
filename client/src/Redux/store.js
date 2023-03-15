export const url = "http://localhost:3000/user"
export const mockPath = "../src/mockedDatas"
import { createStore } from "redux";
import { activityReducer } from "./Reducers/activityReducer";
import { mainDataReducer } from "./Reducers/mainDataReducer";
import { sessionReducer } from './Reducers/sessionReducer'
import { performanceReducer } from './Reducers/performanceReducer'
import combinedReducers from "./Reducers/combinedReducer";


const store = createStore(combinedReducers)


export default store