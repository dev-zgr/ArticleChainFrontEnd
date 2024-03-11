import './ModalComponentStyles.css';

export const StrictModalComponent = ({children}) => {
    return (

        <dialog className={"modal-backdrop-strict"}>
            {children}
        </dialog>
    )
}

