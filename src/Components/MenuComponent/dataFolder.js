import {PiUpload} from "react-icons/pi";
import {MdOutlinePendingActions} from "react-icons/md";
import {HiDocumentCheck} from "react-icons/hi2";
import {FaCompass} from "react-icons/fa";
import {SlGraph} from "react-icons/sl";
import {FaListUl} from "react-icons/fa6";
import {AiOutlineLogin, AiOutlineLogout} from "react-icons/ai";

const pageLoggedOut = [
    {
        name: "Accepted Articles",
        icon: <HiDocumentCheck className="icon"/>,
        url: "/verified-articles",

    },
    {
        name: "BC Explorer",
        icon: <FaCompass className="icon"/>,
        url: "/pending-articles",
    },
    {
        name: "Log In",
        icon: <AiOutlineLogin className="icon"/>,
        url: "/login",
    }
]
const pagesLoggedIn = [{
    name: "Submit Article",
    icon: <PiUpload className="icon"/>,
    url: "/submit-article",
},
    {
        name: "Pending Articles",
        icon: <MdOutlinePendingActions className="icon"/>,
        url: "/pending-articles",
    },
    ...pageLoggedOut.filter((page) => {return page.url !== "/login"}),
    {
        name: "Pending Review",
        icon: <FaListUl className="icon"/>,
        url: "/pending-reviews",
    },
    {
        name: "Log Out",
        icon: <AiOutlineLogout className="icon"/>,
        url: "/logout"
    }
];

export {pagesLoggedIn, pageLoggedOut};