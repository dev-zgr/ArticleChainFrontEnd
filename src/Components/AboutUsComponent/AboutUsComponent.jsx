import "./AboutUs.css";
import {DropdownComponent} from "../FormComponent/components/DropdownComponent.jsx";

export const AboutUsComponent = () => {
    const values = [
        {label: "Option 1", value: "option1"},
        {label: "Option 2", value: "option2"},
        {label: "Option 3", value: "option3"},
    ];

    return (

        <div className={"content-wrapper"}>

            <div className={"content-wrapper__aboutus"}>
                <h1>About Us - ArticleChain</h1>
                <p>Welcome to Article Chain, a decentralized and non-profit platform established in 2022 at Ankara
                    University. Article Chain is not just a platform; it's a community-driven initiative that aims to
                    revolutionize scholarly collaboration through blockchain technology.</p>
                <h2>Our Mission</h2>
                <p>At Article Chain, our mission is to transform the way researchers and academics share and review
                    articles. We believe in the power of decentralization to foster a transparent and secure environment
                    for knowledge exchange.</p>
                <h2>What Sets Us Apart</h2>
                <h3>Decentralized Infrastructure</h3>
                <p>Our platform operates on a blockchain, ensuring a decentralized and tamper-resistant system. This
                    guarantees transparency and security, allowing users to engage in scholarly activities with
                    confidence.</p>
                <h3>Peer-to-Peer Collaboration</h3>
                <p>Article Chain facilitates direct peer-to-peer collaboration. Researchers can connect with each other,
                    share articles, and provide valuable reviews. This direct interaction enhances the quality and
                    effectiveness of scholarly communication.</p>
                <h3>Non-Profit Model</h3>
                <p>As a non-profit organization, Article Chain prioritizes the needs of the academic community over
                    commercial interests. Our commitment is to provide a platform that serves the greater good of
                    researchers worldwide.</p>
                <h2>Get Involved</h2>
                <p>Joining Article Chain is simple, and your involvement can make a significant impact:</p>
                <ol>
                    <li><p><strong>Create an Account:</strong> Start by creating your account on Article Chain to access
                        all platform features.</p></li>
                    <li><p><strong>Submit Your Articles:</strong> Share your research with the global academic community
                        by submitting your articles to the platform.</p></li>
                    <li><p><strong>Peer Review:</strong> Engage in the peer review process to contribute your insights
                        and help maintain high-quality content.</p></li>
                    <li><p><strong>Spread the Word:</strong> Help us grow by spreading the word. Let your colleagues and
                        peers know about Article Chain and the benefits of decentralized scholarly collaboration.</p>
                    </li>
                </ol>
            </div>
        </div>

    )
}