import {Link, useLocation} from "react-router-dom";
import {useState, useEffect, useContext} from "react";
import { ColorContext } from "../../contexts/ColorContext";

const NavbarItem = ({ title, urlName }) => {
    const url = useLocation().pathname;
    const {colors} = useContext(ColorContext);
    const [letterColor, setLetterColor] = useState(colors.black);

    useEffect(() => {
        if (url === urlName) { setLetterColor(colors.blue); }
        else { setLetterColor("black") } 
    }, [url, urlName, colors.blue]);

    return (
        <li className="nav-item"><Link className="nav-link navbar-text" to={urlName} style={{color: letterColor, fontSize: 17}}>{title}</Link></li>
    )
}

export default NavbarItem;