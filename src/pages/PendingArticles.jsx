import {ArticleManager} from "../ArticlePresentation/components/ArticleManager";
import {FooterComponent} from "../Components/FooterComponent/Footer/FooterComponent";
import {MenuComponent} from "../Components/MenuComponent/MenuComponent";
import "../Components/Response Components/ResponseComponentStyles.css"
import {PendingArticleComponent} from "../ArticlePresentation/components/PendingArticleComponent";

export const PendingArticles = () => {


    return (
        <>
            <MenuComponent/>
            <ArticleManager url={"pending-submission"} dynamicComponent={PendingArticleComponent}/>
            <FooterComponent/>
        </>
    )
}