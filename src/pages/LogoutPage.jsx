import {HeaderComponent} from "../Components/MenuComponent/Header/HeaderComponent";
import {FooterComponent} from "../Components/FooterComponent/Footer/FooterComponent";
import {LogoutComponent} from "../Components/LogoutComponent";

export const LogoutPage = () => {
    return (
        <>
            <HeaderComponent/>
            <LogoutComponent/>
            <FooterComponent/>
        </>
    )
}