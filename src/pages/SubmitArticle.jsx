import {MenuComponent} from "../Components/MenuComponent/MenuComponent";
import {FooterComponent} from "../Components/FooterComponent/Footer/FooterComponent";
import {FormManagerComponent} from "../Components/FormComponent/components/FormManagerComponent";
import {ModalComponent} from "../Components/Modal/ModalComponent";
import {ResponseComponent} from "../Components/Response Components/ResponseComponent";
import {useState} from "react";
import "../Components/Response Components/ResponseComponentStyles.css";
import {DropdownComponent} from "../Components/FormComponent/components/DropdownComponent";

export const SubmitArticle = () => {
    const [modal, setModal] = useState({
        modalOpen: false,
        responseCode: "",
        title: "",
        message: ""
    });

    const setModalOpen = (status) => {
        setModal((prevState) =>{
            return {
                ...prevState,
                modalOpen: status,
            }

        })
    }

    return (
        <>
            {modal.modalOpen &&
                <ModalComponent>
                    <ResponseComponent
                        title={modal.title}
                        message={modal.message}>
                        <button
                            onClick={() => setModalOpen(false)}>
                            Close!</button>
                    </ResponseComponent>
                </ModalComponent>
            }
            <MenuComponent></MenuComponent>
            <FormManagerComponent setModal={setModal}/>

            <FooterComponent/>
        </>
    )
}