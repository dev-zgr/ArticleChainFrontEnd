import './ArticleStyles.css';
import {ModalComponent} from "../../Components/Modal/ModalComponent";
import {ResponseComponent} from "../../Components/Response Components/ResponseComponent";
import {useState} from "react";
import {submissionPostHandler} from "./submissionPostHandler";

const ACCEPTED = "ACCEPTED"
const REJECTED = "REJECTED"
let desiredStatus = ""
export const PendingArticleComponent = ({
                                     article_title,
                                     article_type,
                                     authors,
                                     article_resField,
                                     article_date,
                                     article_keywords,
                                     institution,
                                     department,
                                     abstract,
                                     tx_id
                                 }) => {

    const [modal, setModal] = useState({
        modalOpen: false,
        title: "",
        message: "",
        infoMessage: false
    });


    const handleFormSubmit = (status) => {
        const requestBody = {
            "reviewerName": "John Doe",
            "reviewerResearchField": "Computer Science",
            "reviewerEmail": "john.doe@example.com",
            "referringTxId": tx_id,
            "acceptanceStatus": status
        }
        submissionPostHandler("http://localhost:8080/review-request", requestBody, null, setModalContents);
    }

    const setModalContents = (title, message, modalOpen, infoMessage) => {
        setModal((prevState) => {
            return {
                ...prevState,
                title: title,
                message: message,
                modalOpen: modalOpen,
                infoMessage: infoMessage
            }
        })
    }
    return (<>
            {modal.modalOpen &&
                <ModalComponent>
                    <ResponseComponent
                        title={modal.title}
                        message={modal.message}>

                        {
                            modal.infoMessage ?
                                <button onClick={() => {
                                    setModalContents("", "", false, false)
                                }
                                }>
                                    Close!
                                </button>
                                :
                                <>
                                    <button className={"button_on_submit"}
                                            onClick={() => handleFormSubmit(desiredStatus)}>
                                        Yes!
                                    </button>
                                    <button className={"button_cancel"}
                                            onClick={() => setModalContents("", "", false, false)}>
                                        Cancel!
                                    </button>
                                </>

                        }

                    </ResponseComponent>
                </ModalComponent>

            }
            <div className="article">
                <p className="article--type">{article_type}</p>
                <p className="article--field">{article_resField}</p>
                <p className="article--date">{article_date}</p>
                <h3>{article_title}</h3>
                <strong>Authors: </strong>
                {authors.map((author, index) => {
                    return (<>
                        <p className="article--authors">{`${author.title} ${author.author_name}`}</p>
                        <p className="article--from"><strong>from: </strong>{author.institution} {author.department} ,
                        </p>
                    </>)
                })}
                <p className="article--keyword"><strong>Keywords:</strong>{article_keywords}</p>
                <p className="article--abstract"><strong>Abstract:</strong>{abstract}</p>
                <button
                    className={"article--accept-revision"}
                    onClick={() => {
                        setModalContents("Accept Review", "Are you sure you want to accept this review?", true)
                        desiredStatus = ACCEPTED
                    }

                    }
                >Accept Review
                </button>
                <button
                    className={"article--reject-revision"}
                    onClick={() => {
                        setModalContents("Reject Review", "Are you sure you want to reject this review?", true)
                        desiredStatus = REJECTED;
                    }}
                >Reject Review
                </button>
            </div>
        </>


    )
}