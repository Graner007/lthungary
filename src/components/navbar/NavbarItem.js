import {Link, useLocation} from "react-router-dom";
import {useState, useEffect} from "react";

const NavbarItem = ({ title }) => {
    const url = useLocation().pathname;
    const [letterColor, setLetterColor] = useState("black");
    const itemUrl = "/" + title.toString().split(" ").join("-").toLowerCase();

    useEffect(() => {
        if (url === itemUrl) { setLetterColor("blue"); }
        else { setLetterColor("black") } 
    }, [url, itemUrl]);

    return (
        <li><Link className="link" to={itemUrl}><p className="nav-link" style={{color: letterColor}}>{title}</p></Link></li>
    )
}

export default NavbarItem;