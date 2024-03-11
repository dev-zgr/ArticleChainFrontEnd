import {useState} from "react";
import {HeaderComponent} from "./Header/HeaderComponent";
import {useSelector} from "react-redux";

export const MenuComponent = () => {
    const loggedIn = useSelector(store => {return store.loginSlice});
    return (
        <>
            <HeaderComponent isLoggedIn={loggedIn.isLoggedIn}></HeaderComponent>
        </>
    )
}