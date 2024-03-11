import useFetch from "../utilities/useFetch";
import useFetchPendingReviews from "../utilities/useFetchPendingReviews";
import ErrorHolder from "../utilities/ErrorHolder";
import {useSelector} from "react-redux";

export const PendingReviewManager = ({url,dynamicComponent:DynamicComponent}) => {
    const userInformation = useSelector(store => {return store.loginSlice});
    const {load, article, error, parameters} = useFetchPendingReviews(url, {"email": userInformation.accountDetails.email});


    if (error.error) {
        return (<ErrorHolder title={error.error.message} message={error.message}/>);
    }

    return (
        <>
            {
                load.isLoading === true ? <p>Loading...</p> :
                    <div className="content-wrapper">
                        <div className={"article-container"}>
                            {
                                article.articles.map((submission) => {
                                    return (<DynamicComponent
                                        key={submission.tx_id}
                                        article_date={submission.articleEmbeddable.article_date}
                                        article_keywords={submission.articleEmbeddable.article_keywords}
                                        article_resField={submission.articleEmbeddable.article_resField}
                                        article_title={submission.articleEmbeddable.article_title}
                                        article_type={submission.articleEmbeddable.article_type}
                                        authors={submission.articleEmbeddable.authors}
                                        institution={submission.articleEmbeddable.institution}
                                        department={submission.articleEmbeddable.department}
                                        abstract={submission.articleEmbeddable.paperAbstract}
                                        tx_id={submission.tx_id}
                                        file_uuid={submission.articleEmbeddable.fileIdentifier}
                                        referringReviewTXID={submission.referringReviewTXID}
                                    />);
                                })
                            }
                        </div>


                    </div>


            }
        </>
    )
}