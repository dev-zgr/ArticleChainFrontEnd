import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {loginActions} from "../Store/loginSlice";

export const LogoutComponent = () => {
    const dispatcher = useDispatch();

    useEffect(() => {
        dispatcher(loginActions.logout());
    }, [dispatcher]);
    return (
        <>
        <h1> You've Logged Out Successfully!</h1>
        </>
    )
}