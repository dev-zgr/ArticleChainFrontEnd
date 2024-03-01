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
        url: "/pending-articles",
    },
];
const pages2 = [
    {
        name: "About Us",
        pageNumber: 6
    },
    {
        name: "Term of Use",
        pageNumber: 7
    },
    {
        name: "Legal",
        pageNumber: 8
    },
    {
        name: "Contact Us",
        pageNumber: 9
    }
]
export {pages};