import {Link} from "react-router-dom";

const NavbarItem = ({ title }) => {
    return (
        <div>
            <Link><p>{title}</p></Link>
        </div>
    )
}

export default NavbarItem;