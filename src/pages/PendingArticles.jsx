import {ArticleManager} from "../ArticlePresentation/components/ArticleManager";
import {FooterComponent} from "../Components/FooterComponent/Footer/FooterComponent";
import {MenuComponent} from "../Components/MenuComponent/MenuComponent";
import "../Components/Response Components/ResponseComponentStyles.css"
import {PendingArticleComponent} from "../ArticlePresentation/components/PendingArticleComponent";
import {useSelector} from "react-redux";
import {StrictModalComponent} from "../Components/Modal/StrictModalComponent";
import {LoginComponent} from "../Components/LoginComponent/LoginComponent";

export const PendingArticles = () => {
    const loggedIn = useSelector(store => {return store.loginSlice});


    return (
        <>
            <MenuComponent/>


            {
                !loggedIn.isLoggedIn  ? <>
                    <StrictModalComponent>
                        <LoginComponent/>

                    </StrictModalComponent>
                    </> :
                    <>
                        <ArticleManager url={"pending-submission"} dynamicComponent={PendingArticleComponent}/>
                        <FooterComponent/>
                    </>

            }

            <FooterComponent/>
        </>
    )
}