import { useContext } from 'react';
import { LanguageContext } from "../contexts/LanguageContext";
import { Link } from "react-router-dom";

const Footer = () => {
    const {isHuTrue, hu, en} = useContext(LanguageContext);
    const language =  isHuTrue ? hu : en;
    const footer = language.footer;
    return (
        <div className="footer container">
            <div className="footer-service">
                <h3>{footer[0].title}</h3>
                {footer[0].text.map((item, index) => (
                    <p><Link to="/" key={index} style={{color: '#fff'}} className="link">{item}</Link></p>
                ))}
            </div>
            <div className="footer-information">
                <h3>{footer[1].title}</h3>
                {footer[1].text.map((item, index) => (
                    <p><Link to="/" key={index} style={{color: '#fff'}} className="link">{item}</Link></p>
                ))}
            </div>
        </div>
    )
}

export default Footer;