import { Link } from "react-router-dom";
import { useContext } from 'react';
import { LanguageContext } from "../../contexts/LanguageContext";

const LanguageBar = () => {
    const {changeLanguage} = useContext(LanguageContext);
    return (
        <nav className="navbar language-navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <ul className="navbar-nav mr-auto me-auto mb-2 mb-lg-0">
                    <Link to="/mainpage"><li className="nav-link nav-text" onClick={() => changeLanguage(true)}><b>HU</b></li></Link>
                    <Link to="/mainpage"><li className="nav-link nav-text" onClick={() => changeLanguage(false)}><b>EN</b></li></Link>
                </ul>
            </div>
         </nav>
    )
}

export default LanguageBar;