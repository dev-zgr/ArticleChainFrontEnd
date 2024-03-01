import {Outlet} from "react-router-dom";
import {MenuComponent} from "../Components/MenuComponent/MenuComponent";

export const Layout = () => {
    return (
        <>
            <MenuComponent></MenuComponent>
        <Outlet/>
        </>
    )
}