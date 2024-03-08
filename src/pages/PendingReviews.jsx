import {MenuComponent} from "../Components/MenuComponent/MenuComponent";
import {ArticleManager} from "../ArticlePresentation/components/ArticleManager";
import {PendingArticleComponent} from "../ArticlePresentation/components/PendingArticleComponent";
import {FooterComponent} from "../Components/FooterComponent/Footer/FooterComponent";
import {PendingReviewArticleComponent} from "../ArticlePresentation/components/PendingReviewArticleComponent";
import {PendingReviewManager} from "../ArticlePresentation/components/PendingReviewManager";

export const PendingReviews = () => {
    return (
        <>
            <>
                <MenuComponent/>
                <PendingReviewManager url={"get-accepted-review-by-email-submission"} dynamicComponent={PendingReviewArticleComponent}/>
                <FooterComponent/>
            </>
        </>
    )
}