import {MenuComponent} from "../Components/MenuComponent/MenuComponent";
import {ArticleManager} from "../ArticlePresentation/components/ArticleManager";
import {PendingArticleComponent} from "../ArticlePresentation/components/PendingArticleComponent";
import {FooterComponent} from "../Components/FooterComponent/Footer/FooterComponent";
import {LoginComponent} from "../Components/LoginComponent/LoginComponent";
import {useState} from "react";
import {ModalComponent} from "../Components/Modal/ModalComponent";
import {StrictModalComponent} from "../Components/Modal/StrictModalComponent";
import {useSelector} from "react-redux";
import {HeaderComponent} from "../Components/MenuComponent/Header/HeaderComponent";
import {redirect} from "react-router-dom";

export const LoginPage = () => {
    const loggedIn = useSelector(store => {return store.loginSlice});
    return (
        <>

            <HeaderComponent/>
            {
                !loggedIn.isLoggedIn  ?
                <StrictModalComponent>

                    <LoginComponent/>

                </StrictModalComponent> :
                    <>
                        <h1> You've Logged In Successfully !</h1>
                    </>
            }

            <FooterComponent/>


        </>
    )
}