import {Link} from "react-router-dom";

const DropdownNavbarItem = ({title, items, urlNames}) => {
    return (
        <div className="nav-item dropdown">
          <div className="nav-link dropdown-toggle" style={{color: "black"}} id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {title}
          </div>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            {items.map((item, index) => (
                <Link key={index} className="link dropdown-item" to={urlNames[index]} ><li>{item}</li></Link>
            ))}
          </ul>
        </div>
    )
}

export default DropdownNavbarItem;