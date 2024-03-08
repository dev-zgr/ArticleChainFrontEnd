import {useState} from "react";
import {numbers} from "../FormComponent/utilies/dataFolder";
import {DropdownComponent as SelectComponent} from "../FormComponent/components/DropdownComponent";
import {PiUpload} from "react-icons/pi";
import {GrDocumentVerified} from "react-icons/gr";
import "./PendingReviewComponent.css"
export const PendingReviewFormManager = ({title, message, infoMessage,setModalContents,modal, tx_id,referring_tx_id}) => {
    const [file, setFile] = useState(false);
    const [decisionPoint, setDecisionPoint] = useState({point: {value: [], isEdited: false}});

    function handleSelectChange(field, value) {
        setDecisionPoint((prevState) => {
            return ({
                ...prevState, [field]: {value: [...prevState[field].value, value], isEdited: false}

            })
        });
    }

    function onLostBlur(field) {
        setDecisionPoint((prevState) => {
            return ({

                point: {value: prevState[field].value[0], isEdited: true}

            })
        });
    }

    function handleDeselectChange(field, label) {
        setDecisionPoint((prevState) => {
            return ({
                ...prevState, [field]: {value: (prevState[field].value.filter(s => s.label !== label)), isEdited: false}

            })
        });
    }

    function fileHandler(event) {
        setFile(event.target.files[0]);
    }

    /**
     * This function handles the submission operation of the submission handler
     * @param event event to be processed
     * @returns {Promise<void>} function returns a promise since it handles async http message handling
     */
    async function onSubmitHandler(event){
        event.preventDefault();
        //first extract the point for the transaction.
        const extractedPoint = decisionPoint.point.value[0].value;

        const bodyTemplate = {
            "decision_file_hash": "000000",
            "decisionPoint":extractedPoint,
            "review_type": "FirstReview",
        }

        const formData = new FormData();
        formData.append('file', file, file.name)
        formData.append('jsonBody', new Blob([JSON.stringify(bodyTemplate)], { type: 'application/json' }));


        const response = await fetch(`http://localhost:8080/final-decision?tx_id=${referring_tx_id}`,{
            method: "POST",
            body:formData,
            headers: {}
        })

        if (response.status === 200) {

            setFile(false);
            setDecisionPoint({point: {value: [], isEdited: false}})
            setModalContents("Success!" ,"Your Revision has submitted Successfully!" ,true , true);
        } else if (response.status === 400) {
            setModalContents("Failure!" ,"Your Revision couldn't submitted due Bad Data Please Try again Later! " ,true , true);
            setModalContents("Failure!" ,"Your Revision couldn't submitted due bad data!" ,true , true);
        } else if (response.status === 500) {
            setModalContents("Failure!" ,"Your Revision couldn't submitted due Server Error Please Try again Later! " ,true , true);

        }
    }

    return (

        <div className="response-container">
            {infoMessage ?<>



                </> :

                <div >
                    <h3>{title}</h3>
                    <p>{message}</p>
                    <form className={"submit-decision_input-group"}>
                        <SelectComponent
                            label="Your Decision Point"
                            id="decision-point"
                            options={numbers}
                            field={"point"}
                            value={decisionPoint.point.value}
                            onSelect={handleSelectChange}
                            onDeselect={handleDeselectChange}
                            limit={1}
                            error={null}
                            required
                        />

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

                    </form>
                </div>
            }

            <div className= 'response-container__buttons'>

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
                                    onClick={(event) => { onSubmitHandler(event) }}>
                                Submit!
                            </button>
                            <button className={"button_cancel"}
                                    onClick={() => setModalContents("", "", false, false)}>
                                Cancel!
                            </button>
                        </>
                }

            </div>
        </div>
    )
}