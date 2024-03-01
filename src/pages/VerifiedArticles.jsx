import {ArticleManager} from "../ArticlePresentation/components/ArticleManager";
import {FooterComponent} from "../Components/FooterComponent/Footer/FooterComponent";
import {MenuComponent} from "../Components/MenuComponent/MenuComponent";

export const VerifiedArticles = () => {
    return(
        <>
            <MenuComponent></MenuComponent>
            {
                <ArticleManager url={"verified-submission"}></ArticleManager>
            }
           <FooterComponent/>
        </>
    )
}