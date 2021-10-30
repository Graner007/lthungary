import { useContext } from 'react';
import { LanguageContext } from "../contexts/LanguageContext";
import { Link } from "react-router-dom";

const Footer = () => {
    
    const {isHuTrue, hu, en} = useContext(LanguageContext);
    const language =  isHuTrue ? hu : en;
    const footer = language.footer;

    return (
        <div className="footer">
            <div className="footer-service">
                <h3>{footer[0].title}</h3>
                {language.dropdown.map((text, index) => (
                    <p key={index}><Link to={language.dropdownUrl[index]} style={{color: '#fff'}} className="link">{text}</Link></p>
                ))}
            </div>
            <div className="footer-information">
                <h3>{footer[1].title}</h3>
                {language.navbar.map((text, index) => (
                    index < 2 ? null : <p key={index}><Link to={language.navbarUrl[index]} style={{color: '#fff'}} className="link">{text}</Link></p>
                ))}
            </div>
        </div>
    )
}

export default Footer;