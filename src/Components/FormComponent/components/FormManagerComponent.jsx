import {useState} from "react";
import {InputComponent} from "./InputComponent";
import {DropdownComponent as SelectComponent} from "./DropdownComponent";
import {academicTitles, articleKeywords, articleTypes, researchFields} from "../utilies/dataFolder"
import {PiUpload} from "react-icons/pi";
import {GrDocumentVerified} from "react-icons/gr";
import {blobChecker, emailChecker, generalChecker, selectBoxChecker, zipCodeChecker} from "../utilies/constarints";
import {BlobComponent} from "./BlobComponent";
import {UserInformationComponent} from "./UserInformationComponent";

function mapToSimplified(inputList) {
    return inputList.map(item => {
        const simplifiedItem = {};
        const address = {}; // New object to store address properties

        for (const key in item) {
            if (key === 'title') {
                simplifiedItem[key] = item[key].value[0];
            } else if (['country', 'state', 'zipCode'].includes(key)) {
                address[key] = item[key].value;
            } else {
                simplifiedItem[key] = item[key].value;
            }
        }

        // Add the address object to the simplifiedItem if it has properties
        if (Object.keys(address).length > 0) {
            simplifiedItem.address = address;
        }

        return simplifiedItem;
    });
}



const initialAuthor = {
    title: {value: [], isEdited: false},
    author_name: {value: "", isEdited: false},
    author_email: {value: "", isEdited: false},
    institution: {value: "", isEdited: false},
    department: {value: "", isEdited: false},
    country: {value: "", isEdited: false},
    state: {value: "", isEdited: false},
    zipCode: {value: "", isEdited: false}
}
const initialEntries = {
    authors: [initialAuthor],
    article_title: {value: "", isEdited: false},
    article_resField: {value: [], isEdited: false},
    article_type: {value: [], isEdited: false},
    article_keywords: {value: [], isEdited: false},
    paperAbstract: {value: "", isEdited: false},
}


export const FormManagerComponent = ({setModal}) => {
    const [entries, setEntries] = useState(initialEntries);
    const [file, setFile] = useState(false);
    const [numberOfAuthors, setNumberOfAuthors] = useState(1);



    function handleUserEntryChange(field, event) {
        setEntries((prevState) => {
            return ({
                ...prevState, [field]: {value: event.target.value, isEdited: false}

            })
        });
    }


    function handleSelectChange(field, value) {
        setEntries((prevState) => {
            return ({
                ...prevState, [field]: {value: [...prevState[field].value, value], isEdited: false}

            })
        });
    }

    function handleDeselectChange(field, label) {
        setEntries((prevState) => {
            return ({
                ...prevState, [field]: {value: (prevState[field].value.filter(s => s.label !== label)), isEdited: false}

            })
        });
    }

    function onLostBlur(field) {
        setEntries((prevState) => {
            return ({

                ...prevState, [field]: {value: prevState[field].value, isEdited: true}

            })
        });
    }

    function fileHandler(event) {
        setFile(event.target.files[0]);
    }

    function handleUserAccountChange(index, field, event) {
        setEntries((prevState) => ({
            ...prevState,
            authors: prevState.authors.map((author, i) =>
                i === index ? { ...author, "[field]": { value: event.target.value, isEdited: false } } : author
            ),
        }));
    }

    function handleUserLostBlur(index, field) {
        setEntries((prevState) => ({
            ...prevState,
            authors: prevState.authors.map((author, i) =>
                i === index ? { ...author, [field]: { value: author[field].value, isEdited: true } } : author
            ),
        }));
    }

    function handleUserSelectChange(index, field, value) {
        setEntries((prevState) => ({
            ...prevState,
            authors: prevState.authors.map((author, i) =>
                i === index ? { ...author, [field]: { value: [...author[field].value, value], isEdited: true } } : author
            ),
        }));
    }

    function handleUserDeselectChange(index, field, label) {
        setEntries((prevState) => ({
            ...prevState,
            authors: prevState.authors.map((author, i) =>
                i === index ? { ...author, [field]: { value: (author[field].value.filter(s => s.label !== label)), isEdited: true } } : author
            ),
        }));
    }

    function authorNumberHandler(event){
        if(event.target.value > numberOfAuthors){
            setEntries((prevState) => {
                return {
                    ...prevState,
                    authors: [...prevState.authors, initialAuthor]
                }
            })
        }else{
            setEntries((prevState) => {
                return {
                    ...prevState,
                    authors: prevState.authors.slice(0, event.target.value)
                }
            })
        }
        setNumberOfAuthors(event.target.value);
    }

    async function onSubmitHandler(event) {
        event.preventDefault();

        const extractedKeywords = entries.article_keywords.value.reduce((accumulator, currentObject, index) => {
            const separator = index === 0 ? '' : ', ';

            // Concatenate the current value to the accumulator
            return accumulator + separator + currentObject.value;
        }, '');

        const extractedFields = entries.article_resField.value.reduce((accumulator, currentObject, index) => {
            const separator = index === 0 ? '' : ', ';
            return accumulator + separator + currentObject.value;
        }, '');

        const extractedArticleType = entries.article_type.value?.[0] ?? '';
        const authors = mapToSimplified(entries.authors)
        console.log(authors)


        const requestBody = {
            "articleEmbeddable": {
                "authors": authors,
                "article_title": entries.article_title.value,
                "article_type": extractedArticleType.value,
                "article_resField": extractedFields,
                "article_keywords": extractedKeywords,
                "paperAbstract": entries.paperAbstract.value,
                "submissionFile": file,
            }, "paperHash": "00000"
        };
        console.log(requestBody);


        const formData = new FormData();
        formData.append('file', file, file.name);
        formData.append('jsonBody', new Blob([JSON.stringify(requestBody)], { type: 'application/json' }));


        const response = await fetch('http://localhost:8080/submission', {
            method: "POST",
            // body: JSON.stringify(requestBody),
            body: formData,
            headers: {}

        });

        if (response.status === 201) {
            setModal((prevState) => {
                setEntries(initialEntries);
                return {
                    ...prevState,
                    modalOpen: true,
                    responseCode: response.status,
                    title: "Success!",
                    message: "Your article has been submitted."
                }

            });
        } else if (response.status === 400) {
            setModal((prevState) => {
                Object.keys(entries).forEach((key) => {
                    onLostBlur(key)
                });
                return {
                    ...prevState,
                    modalOpen: true,
                    responseCode: response.status,
                    title: "Failure!",
                    message: "Your article has not been submitted due missing fields."
                }

            });
        } else if (response.status === 500) {
            setModal((prevState) => {
                return {
                    ...prevState,
                    modalOpen: true,
                    responseCode: response.status,
                    title: "Failure!",
                    message: "Your article has not been submitted due to server error."
                }

            });
        }


    }


    const titleValid = generalChecker(entries, "article_title", "Title");
    const keywordsValid = selectBoxChecker(entries, "article_keywords", "Article Keywords");
    const articleTypeValid = selectBoxChecker(entries, "article_type", "Article Type");
    const articleResFieldValid = selectBoxChecker(entries, "article_resField", "Research Field");
    const abstractValid = blobChecker(entries, "paperAbstract", "Abstract", 1000);


    return (<div className="content-wrapper">
            <input type="number" id="numberInput" name="numberInput" min="1" max="5" value={numberOfAuthors} onChange={authorNumberHandler}/>
            <form>

                {
                    entries.authors.map((author,index) => (
                        <UserInformationComponent
                            index={index}
                            header={`Author ${index+1}`}
                            handleUserAccountChange={handleUserAccountChange}
                            entries={entries.authors}
                            onLostBlur={handleUserLostBlur}
                            handleSelectChange={handleUserSelectChange}
                            handleDeselectChange={handleUserDeselectChange}
                        />
                    ))
                }
                <div className="input-section">
                    <h2>Research Information</h2>
                    <div className="input-group">

                        <InputComponent
                            label={'Title'}
                            placeholder={"Research Title"}
                            id="article_title"
                            type="text"
                            name="article_title"
                            value={entries.article_title.value}
                            onBlur={() => onLostBlur('article_title')}
                            onChange={(event) => handleUserEntryChange("article_title", event)}
                            error={titleValid}
                        />


                        <SelectComponent
                            label="Article Type"
                            id="Article Type"
                            options={articleTypes}
                            field={"article_type"}
                            value={entries.article_type.value}
                            onSelect={handleSelectChange}
                            onDeselect={handleDeselectChange}
                            limit={1}
                            error={articleTypeValid}
                            required
                        />


                    </div>
                    <div className="input-group">


                        <SelectComponent
                            label={'Research Field'}
                            id={"Research Field"}
                            options={researchFields}
                            field={"article_resField"}
                            value={entries.article_resField.value}
                            onSelect={handleSelectChange}
                            onDeselect={handleDeselectChange}
                            limit={2}
                            error={articleResFieldValid}
                            required
                        />
                        <SelectComponent
                            label={'Keywords'}
                            id={"Keywords"}
                            options={articleKeywords}
                            field={"article_keywords"}
                            value={entries.article_keywords.value}
                            onSelect={handleSelectChange}
                            onDeselect={handleDeselectChange}
                            limit={5}
                            error={keywordsValid}
                            required
                        />


                    </div>
                    <div className="input-group">


                        <div className={"form-input"}>
                            <label><strong>Upload File</strong></label>
                            <label className={'form-file__input'}>
                                {!file ? <PiUpload className={'icon'}/> : <GrDocumentVerified/>}

                                <input className="form-file"
                                       type="file"
                                       id="file"
                                       name="file"
                                       accept=".pdf"
                                       onChange={fileHandler}
                                />
                            </label>

                        </div>
                    </div>
                    <div className="input-group">

                        <BlobComponent
                            label={'Abstract'}
                            placeholder={"Enter your abstract here..."}
                            id="abstract"
                            name="paperAbstract"
                            value={entries.paperAbstract.value}
                            onBlur={() => onLostBlur('paperAbstract')}
                            onChange={(event) => handleUserEntryChange("paperAbstract", event)}
                            error={abstractValid}
                        />
                    </div>
                    <div className="button-container">
                        <button className={"submit-button"} onClick={onSubmitHandler}>Submit!</button>
                    </div>


                </div>
            </form>
        </div>
    )
}