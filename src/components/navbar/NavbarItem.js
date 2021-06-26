import {Link, useLocation} from "react-router-dom";
import {useState, useEffect, useContext} from "react";
import { ColorContext } from "../../contexts/ColorContext";

const NavbarItem = ({ title }) => {
    const url = useLocation().pathname;
    const {colors} = useContext(ColorContext);
    const [letterColor, setLetterColor] = useState(colors.black);
    const itemUrl = "/" + title.toString().split(" ").join("-").toLowerCase();

    useEffect(() => {
        if (url === itemUrl) { setLetterColor(colors.blue); }
        else { setLetterColor("black") } 
    }, [url, itemUrl, colors.blue]);

    return (
        <li><Link className="link" to={itemUrl}><p className="nav-link" style={{color: letterColor}}>{title}</p></Link></li>
    )
}

export default NavbarItem;