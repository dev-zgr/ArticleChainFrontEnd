import {useState} from "react";
import {HeaderComponent} from "./Header/HeaderComponent";

export const MenuComponent = () => {
    const [selectedPage, setSelectedPage] = useState(1)

    return (
        <>
            <HeaderComponent setSelectedPage={setSelectedPage}></HeaderComponent>
        </>
    )
}