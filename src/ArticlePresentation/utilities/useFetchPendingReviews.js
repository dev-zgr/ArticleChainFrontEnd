import {useEffect, useState} from "react";
import useFetch from "./useFetch";

/**
 * This function is used to fetch the pending reviews from the server
 * @param mainUrl is the url that'll be used to fetch the pending reviews
 * @param parameters is the parameters that'll be used to filter the pending reviews
 * Please pass parameters as an object with the following properties:
 * {name:value, name:value, name:value, name:value, name:value}
 */
function useFetchPendingReviews(mainUrl, parameters){
    const [isLoading, setIsLoading] = useState(false);
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState();

    useEffect(() => {
        async function fetchArticles() {
            const url = `http://localhost:8080/${mainUrl}`;
            const parameterAddedUrl = urlParameterAdded(url, parameters);
            console.log(parameterAddedUrl)
            try {
                setIsLoading(true);

                const fetchedArticles = await fetch(parameterAddedUrl);
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

        }
        const fetchedArticles = fetchArticles();
        fetchedArticles.then((response) => {
            setArticles(response);
        });


    }, []);


    return {
        load : {isLoading, setIsLoading},
        article : {articles, setArticles},
        error : {error, setError},
    }

}

const urlParameterAdded = (url, parameters) => {
    let newUrl = url;
    let firstParameter = true;
    for (let key in parameters){
        if (parameters[key] !== null){
            newUrl = newUrl + `${firstParameter ? '?' :'&'}${key}=${parameters[key].trim()}`;
        }
        firstParameter = false;
    }
    return newUrl;
}

export default useFetchPendingReviews;