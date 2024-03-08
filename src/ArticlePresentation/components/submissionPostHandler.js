

/**
 * This function is a React hook that post handles all the post operations with the specified parameters
 * @param url (String) to make post request.
 * @param requestBody (Object) that'll be added to the request body you don't need to serialize it
 * @param parameters (Object) that consist {name:value} pairs name corresponds to the name of the parameters values are the
 * values that are corresponding to the names.
 * @param setModalContents (Function) that sets the modal contents
 */
function submissionPostHandler (url, requestBody, parameters, setModalContents){
    const fetchData = async (newUrl) => {
        setModalContents("Loading...", "Please wait while we are processing your request", true,true);

        try {
            const response = await fetch(newUrl, {
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
            setModalContents("Loading...", "Please wait while we are processing your request", true,true);
        } finally {
            setModalContents("You're Done!", "We've successfully processed your request", true,true);
        }
    };
    let newUrl = addParameters(url, parameters);

    fetchData(newUrl);
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

export {submissionPostHandler}