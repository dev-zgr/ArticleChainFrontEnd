import {useState} from "react";
import {ModalComponent} from "../../Components/Modal/ModalComponent";
import {PendingReviewFormManager} from "../../Components/PendingReviewComponents/PendingReviewFormManager";

export const PendingReviewArticleComponent = ({
                                                  article_title,
                                                  article_type,
                                                  authors,
                                                  article_resField,
                                                  article_date,
                                                  article_keywords,
                                                  institution,
                                                  department,
                                                  abstract,
                                                  tx_id,
                                                  file_uuid,
                                                  referringReviewTXID
                                              }) => {

    const [modal, setModal] = useState({
        modalOpen: false,
        title: "",
        message: "",
        infoMessage: false
    });

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

    const fileDownload =  (file_uuid) => {
        fetch(`http://localhost:8080/file?uuid=${file_uuid}`).then((response) => {
            response.blob().then((blob) => {

                // Creating new object of PDF file
                const fileURL =
                    window.URL.createObjectURL(blob);

                // Setting various property values
                let alink = document.createElement("a");
                alink.href = fileURL;
                alink.download = "SamplePDF.pdf";
                alink.click();
            });
        });
    }



    return (<>
            {modal.modalOpen &&
                <ModalComponent>
                    <PendingReviewFormManager
                        title={modal.title}
                        message={modal.message}
                        setModalContents={setModalContents}
                        modal={modal}
                        tx_id={tx_id}
                        referring_tx_id={referringReviewTXID}
                    >

                    </PendingReviewFormManager>
                </ModalComponent>

            }
            <div className="article">
                <p className="article--type">{article_type}</p>
                <p className="article--field">{article_resField}</p>
                <p className="article--date">{article_date}</p>
                <h3>{article_title}</h3>
                <strong>Authors: </strong>
                {authors.map((author) => {
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
                        setModalContents("Submit Decision",
                            "Please Review All The Sections Before Submitting Your Decision",
                            true,
                            false)
                    }
                    }>Submit Review
                </button>
                <button
                    className={"article--accept-revision article-download-article"}
                    onClick={() => {
                        fileDownload(file_uuid)
                    }}
                >Download Article
                </button>
            </div>
        </>


    )
}

