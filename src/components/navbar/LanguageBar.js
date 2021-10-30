import { Link } from "react-router-dom";
import { useContext } from 'react';
import { LanguageContext } from "../../contexts/LanguageContext";

const LanguageBar = () => {
    const {changeLanguage} = useContext(LanguageContext);
    return (
        <nav className="language-navbar">
            <Link className='link' to="/mainpage"><p className="language-navbar-text" onClick={() => changeLanguage(true)}><b>HU</b></p></Link>
            <Link className='link' to="/mainpage"><p className="language-navbar-text" style={{flexGrow: 3}} onClick={() => changeLanguage(false)}><b>EN</b></p></Link>
        </nav>
    )
}

export default LanguageBar;