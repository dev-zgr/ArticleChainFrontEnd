import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {loginSlice} from "./loginSlice";


const rootReducer = combineReducers({
    loginSlice: loginSlice.reducer
})
const store = configureStore(
    {
        reducer: rootReducer
    }
)

export default store;