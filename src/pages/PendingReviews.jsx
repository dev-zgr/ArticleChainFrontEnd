import {MenuComponent} from "../Components/MenuComponent/MenuComponent";
import {ArticleManager} from "../ArticlePresentation/components/ArticleManager";
import {PendingArticleComponent} from "../ArticlePresentation/components/PendingArticleComponent";
import {FooterComponent} from "../Components/FooterComponent/Footer/FooterComponent";
import {PendingReviewArticleComponent} from "../ArticlePresentation/components/PendingReviewArticleComponent";
import {PendingReviewManager} from "../ArticlePresentation/components/PendingReviewManager";
import {StrictModalComponent} from "../Components/Modal/StrictModalComponent";
import {LoginComponent} from "../Components/LoginComponent/LoginComponent";
import {useSelector} from "react-redux";

export const PendingReviews = () => {
    const loggedIn = useSelector(store => {return store.loginSlice});
    return (
        <>
            <>
                <MenuComponent/>
                {
                    !loggedIn.isLoggedIn  ? <>
                            <StrictModalComponent>
                                <LoginComponent/>

                            </StrictModalComponent>
                        </> :
                        <>
                            <PendingReviewManager url={"get-accepted-review-by-email-submission"} dynamicComponent={PendingReviewArticleComponent}/>
                        </>

                }
                <FooterComponent/>
            </>
        </>
    )
}