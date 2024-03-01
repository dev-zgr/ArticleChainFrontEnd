import {MenuComponent} from "../Components/MenuComponent/MenuComponent";
import {FooterComponent} from "../Components/FooterComponent/Footer/FooterComponent";
import "../ArticlePresentation/components/ArticleStyles.css"
import {AboutUsComponent} from "../Components/AboutUsComponent/AboutUsComponent";

export const AboutUs = () => {
    return (
        <>
            <MenuComponent/>
            <AboutUsComponent/>
            <FooterComponent/>
        </>
    )
}