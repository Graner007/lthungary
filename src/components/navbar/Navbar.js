import NavbarItem from './NavbarItem';
import DropdownNavbarItem from "./DropdownNavbarItem";
import {Link} from "react-router-dom";
import { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';

const Navbar = ({logo}) => {
    const {isHuTrue, hu, en} = useContext(LanguageContext);
    const language = isHuTrue ? hu : en;
    return (
         <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <div className="navbar-brand">
                    <Link to="/mainpage"><img src={logo} className="logo" alt="logo" /></Link>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto me-auto mb-2 mb-lg-0">
                    {language.navbar.map((title, index) => (
                        index === 2 ? <DropdownNavbarItem title={title} items={language.dropdown} urlNames={language.dropdownUrl} key={index} /> : <NavbarItem key={index} title={title} urlName={language.navbarUrl[index]} />
                    ))}
                </ul>
            </div>
         </nav>
    )
}

export default Navbar;