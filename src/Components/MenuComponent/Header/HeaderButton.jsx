import './HeaderStyles.css';
import { PiUpload } from "react-icons/pi";
import {Link} from "react-router-dom";


export const HeaderButton = ({icon, name,url, ...rest}) => {
    return(
        <Link to={url} className="button-container" {...rest}>
            {icon}
            <span>
                {name}
            </span>
        </Link>
    )
}