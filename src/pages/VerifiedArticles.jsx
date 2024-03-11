import {ArticleManager} from "../ArticlePresentation/components/ArticleManager";
import {FooterComponent} from "../Components/FooterComponent/Footer/FooterComponent";
import {MenuComponent} from "../Components/MenuComponent/MenuComponent";
import {PendingArticleComponent} from "../ArticlePresentation/components/PendingArticleComponent";
import {useSelector} from "react-redux";

export const VerifiedArticles = () => {
    const loggedIn = useSelector(store => {return store.loginSlice});

    return(
        <>
            <MenuComponent></MenuComponent>
            {
                <ArticleManager url={"verified-submission"} dynamicComponent={PendingArticleComponent}></ArticleManager>
            }
           <FooterComponent/>
        </>
    )
}