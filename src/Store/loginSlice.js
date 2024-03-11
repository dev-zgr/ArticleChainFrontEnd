import {createSlice} from "@reduxjs/toolkit";
import {json, redirect, useHref} from "react-router-dom";


const defaultState = {
    userName:undefined,
    email: undefined,
    password:undefined,
    researchField: undefined
};
export const loginSlice = createSlice({
    name: 'loginSlice',
    initialState:{
        isLoggedIn:false,
        accountDetails: defaultState
    },
    reducers:{
        toggleLoggedIn :(state,action) =>{
            state.isLoggedIn = action.payload;
        },
        setAccountDetails: (state,action) =>{
            state.accountDetails = action.payload;
        },
        logout: (state) => {
            state.accountDetails = defaultState;
            state.isLoggedIn = false;
        }
    }
})

export const loginActions = loginSlice.actions;

export const attemptLogin = (email,password) =>{

    return async (dispatch) =>{

        const sendRequest = async () => {
            const request = await fetch(`http://localhost:8080/login?email=${email}&password=${password}`, {
                method: 'GET',
            });

            if (request.status !== 202) {
                dispatch(loginActions.toggleLoggedIn(false));
                return false;

            }else{
                dispatch(loginActions.toggleLoggedIn(true));
                const accountDetails = await  request.json();
                dispatch(loginActions.setAccountDetails(accountDetails));


                return true;
            }
        }

        return await sendRequest();

    }
}




