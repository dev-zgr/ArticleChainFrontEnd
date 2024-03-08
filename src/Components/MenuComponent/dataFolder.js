import {PiUpload} from "react-icons/pi";
import {MdOutlinePendingActions} from "react-icons/md";
import {HiDocumentCheck} from "react-icons/hi2";
import {FaCompass} from "react-icons/fa";
import {SlGraph} from "react-icons/sl";
import {FaListUl} from "react-icons/fa6";

const pages = [{
    name: "Submit Article",
    icon: <PiUpload className="icon"/>,
    url: "/submit-article",
},
    {
        name: "Pending Articles",
        icon: <MdOutlinePendingActions className="icon"/>,
        url: "/pending-articles",
    },
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
        name: "Pending Review",
        icon: <FaListUl className="icon"/>,
        url: "/pending-reviews",
    },
];

export {pages};