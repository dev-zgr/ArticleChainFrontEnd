import './ModalComponentStyles.css';
import {useState} from "react";
export const ModalComponent = ({children}) => {
    return (

        <dialog className={"modal-backdrop"}>
            {children}
        </dialog>
    )
}