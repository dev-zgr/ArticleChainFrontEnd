import ErrorHolder from "../utilities/ErrorHolder";
import {ArticleComponent} from "./ArticleComponent";
import useFetch from "../utilities/useFetch";

import {SearchFormComponent} from "./SearchFormComponent";
import categories from "../utilities/categories";

export const ArticleManager = ({url}) => {
    const {load, article, error, parameters} = useFetch(url);


    const onCategoryChange = (event, propName) => {
        parameters.setParameters((prevState) => {
            return {
                ...prevState,
                [propName]: event.target.value
            }
        })
    }

    if (error.error) {
        return (<ErrorHolder title={error.error.message} message={error.message}/>);
    }

    return (
        <>

            <div className={"display:block"}>
                <SearchFormComponent onChange={(event) => {
                    onCategoryChange(event, "article_type")
                }}>

                    {categories.map((category) => {
                        return (
                            <option key={category.value} value={category.value}>{category.name}</option>
                        );
                    })}
                </SearchFormComponent>
            </div>
            {
                load.isLoading === true ? <p>Loading...</p> :
                    <div className="content-wrapper">
                        <div className={"article-container"}>
                            {
                                article.articles.map((submission) => {
                                    return (<ArticleComponent
                                        key={submission.tx_id}
                                        article_date={submission.article.article_date}
                                        article_keywords={submission.article.article_keywords}
                                        article_resField={submission.article.article_resField}
                                        article_title={submission.article.article_title}
                                        article_type={submission.article.article_type}
                                        authors={submission.article.authors}
                                        institution={submission.article.institution}
                                        department={submission.article.department}
                                        abstract={submission.article.paperAbstract}
                                    />);
                                })
                            }
                        </div>


                    </div>


            }
        </>

    )
}