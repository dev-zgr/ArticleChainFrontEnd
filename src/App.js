import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {useState} from "react";
import {VerifiedArticles} from "./pages/VerifiedArticles";
import {PendingArticles} from "./pages/PendingArticles";
import {Layout} from "./pages/Layout";
import {SubmitArticle} from "./pages/SubmitArticle";
import {AboutUs} from "./pages/AboutUs";
import {TermsOfUse} from "./pages/TermsOfUse";
import {Legal} from "./pages/Legal";
import {ContactUs} from "./pages/ContactUs";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}/>
                <Route path="/submit-article" element={<SubmitArticle/>} />
                <Route path="/verified-articles" element={<VerifiedArticles/>}/>
                <Route path="/pending-articles" element={<PendingArticles/>}/>
                <Route path="/about-us" element={<AboutUs/>}/>
                <Route path="/terms-of-use" element={<TermsOfUse/>}/>
                <Route path="/legal" element={<Legal/>}/>
                <Route path="/contact-us" element={<ContactUs/>}/>
            </Routes>
        </BrowserRouter>
);
}

export default App;
