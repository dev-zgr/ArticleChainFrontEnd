import {ArticleManager} from "../ArticlePresentation/components/ArticleManager";
import {FooterComponent} from "../Components/FooterComponent/Footer/FooterComponent";
import {MenuComponent} from "../Components/MenuComponent/MenuComponent";

export const PendingArticles = () => {
    return (
        <>
            <MenuComponent/>
            <ArticleManager url={"pending-submission"}/>
            <FooterComponent/>
        </>
    )
}