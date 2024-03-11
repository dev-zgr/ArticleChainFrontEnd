import React, {useState} from "react";

import {InputComponent} from "../FormComponent/components/InputComponent";
import "./LoginComponent.css"
import {useDispatch, useSelector} from "react-redux";
import {attemptLogin} from "../../Store/loginSlice";
import {emailChecker, generalChecker} from "../FormComponent/utilies/constarints";
import {redirect} from "react-router-dom";


const initialEntries = {
    email: {value: "", isEdited: false, attemptedLogin: false},
    password: {value: "", isEdited: false, attemptLogin: false}
}
let isFirstTry = false;
export const LoginComponent = () => {
    const [entries, setEntries] = useState(initialEntries);
    const dispatcher = useDispatch();
    const loginState = useSelector(store => {
        return store.loginSlice
    });

    function handleUserEntryChange(field, event) {
        setEntries((prevState) => {
            return ({
                ...prevState, [field]: {value: event.target.value, isEdited: false}

            })
        });
    }

    function onLostBlur(field) {
        setEntries((prevState) => {
            return ({

                ...prevState, [field]: {value: prevState[field].value, isEdited: true}

            })
        });
    }


    function handleLogin(event, email, password) {
        redirect('/')
        event.preventDefault();
        const isSuccess = dispatcher(attemptLogin(email, password));
        setEntries((prevState) => {
            return (
                {
                    "email": {...prevState, attemptedLogin: true},
                    "password": {...prevState, attemptLogin: true}
                }
            )
        })
    }

    const emailValid = emailChecker(entries, "email", "email");
    const passwordValid = generalChecker(entries, "password", "password")
    return (
        <div className={"login__wrapper"}>
            <form className={"submit-decision_input-group"}>
                <InputComponent
                    label={'E-Mail'}
                    placeholder={"enter your email"}
                    id="email"
                    type="text"
                    name="email"
                    value={entries.email.value || ''}
                    onBlur={() => onLostBlur('email')}
                    onChange={(event) => handleUserEntryChange("email", event)}
                    error={emailValid}
                />
                <InputComponent
                    label={'Password'}
                    placeholder={"enter your password"}
                    id="password"
                    type="text"
                    name="password"
                    value={entries.password.value || ''}
                    onBlur={() => onLostBlur('password')}
                    onChange={(event) => handleUserEntryChange("password", event)}
                    error={passwordValid}
                />


            </form>
            <button className={"login__button"}
                    onClick={(event) => handleLogin(event, entries.email.value, entries.password.value)}>
                Login!
            </button>
            {!loginState.isLoggedIn && isFirstTry &&
                <p className="input-error"><strong>{"Invalid Credentials"}</strong></p>}
        </div>

    )
}