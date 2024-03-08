import {useEffect, useRef, useState} from "react";

/**
 * This function is a React hook that post handles all the post operations with the specified parameters
 * @param url (String) to make post request.
 * @param requestBody (Object) that'll be added to the request body you don't need to serialize it
 * @param parameters (Object) that consist {name:value} pairs name corresponds to the name of the parameters values are the
 * values that are corresponding to the names.
 * @param setModalContents (Function) that sets the modal contents
 */
function usePost(url, requestBody, parameters, setModalContents) {

    const fetchData = async () => {
        setModalContents("Loading...", "Please wait while we are processing your request", true);

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(requestBody),
            });

            if (response.status !== 201 || response.status !== 200) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const responseData = await response.json();
            setModalContents(responseData);
        } catch (error) {
            setModalContents("Loading...", "Please wait while we are processing your request", true);
        } finally {
            setModalContents("We've Received your Request", "Please wait until your request has been processed", true);
        }
    };


    let newUrl = addParameters(url, parameters);
    const isFirstRender = useRef(true);
    useEffect(() => {
        if(isFirstRender.current){
            isFirstRender.current = false;

        }else{
            fetchData()
        }
    }, [requestBody]);
}







const addParameters = (url, parameters) => {
    if (parameters === null || Object.keys(parameters).length === 0) {
        return url;
    }

    let newUrl = url + '?';

    let isFirstParameter = true;

    for (const [key, value] of Object.entries(parameters)) {
        if (!isFirstParameter) {
            newUrl += '&';
        }

        newUrl += `${key}=${value}`;
        isFirstParameter = false;
    }

    return newUrl;
};

export {usePost}
