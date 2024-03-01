import React, {forwardRef} from 'react';
import './HeaderStyles.css';
import {pages} from "../dataFolder";
import {HeaderButton} from "./HeaderButton";


export const HeaderComponent = () => {
    return (
        <header className={"header"}>
            {pages.map(
                (page) => {
                    return (
                        <HeaderButton
                            name={page.name}
                            icon={page.icon}
                            url={page.url}
                            key={page.pageNumber}
                        ></HeaderButton>
                    )
                }
            )}
        </header>
    )
}

