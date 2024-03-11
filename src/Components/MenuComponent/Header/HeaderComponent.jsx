import React from 'react';
import './HeaderStyles.css';
import {pageLoggedOut, pagesLoggedIn} from "../dataFolder";
import {HeaderButton} from "./HeaderButton";


export const HeaderComponent = ({isLoggedIn}) => {
    return (
        <header className={"header"}>
            {(isLoggedIn ? pagesLoggedIn : pageLoggedOut).map((page) => (
                <HeaderButton
                    name={page.name}
                    icon={page.icon}
                    url={page.url}
                    key={page.pageNumber}
                />
            ))}
        </header>
    )
}

