import './FooterStyles.css';
import {pages2} from "./dataFolder";
import {Link} from "react-router-dom";

export const FooterComponent = () => {
    return (
        <footer className="footer">
            {
                pages2.map((element) =>
                    {
                        return (
                            <Link to={element.url}>
                                <span >{element.name}</span>
                            </Link>
                        )
                    }
                )
            }
        </footer>
    )
}