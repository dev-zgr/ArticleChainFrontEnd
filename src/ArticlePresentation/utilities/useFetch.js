import {useEffect, useState} from "react";
import ErrorHolder from "./ErrorHolder";

function useFetch(mainUrl){
    const [isLoading, setIsLoading] = useState(false);
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState();
    const [parameters, setParameters] = useState({
        category: null,
        department: null,
        article_type: null,
        title: null,
        keyword: null
    });

    useEffect(() => {
        async function fetchArticles() {
            console.log(mainUrl)
            const url = `http://localhost:8080/${mainUrl}?category=${parameters.category}&department=${parameters.department}&article_type=${parameters.article_type}&title=${parameters.title}&keyword=${parameters.keyword}`;
            console.log(url);
            try {
                setIsLoading(true);

                const fetchedArticles = await fetch(url);
                if (fetchedArticles.status === 500) {
                    throw new Error("Server error");
                }else if(fetchedArticles.status === 204){
                    throw new Error("There is no such article");
                }

                const responseData = await fetchedArticles.json();


                setIsLoading(false);
                return responseData;

            } catch (error) {
                setError(error);
                setIsLoading(false);
            }

            console.log(articles)
        }


        const fetchedArticles = fetchArticles();
        fetchedArticles.then((response) => {
            setArticles(response);
        });


    }, [parameters]);


    return {
        load : {isLoading, setIsLoading},
        article : {articles, setArticles},
        error : {error, setError},
        parameters : {parameters, setParameters}
    }
}

export default useFetch;