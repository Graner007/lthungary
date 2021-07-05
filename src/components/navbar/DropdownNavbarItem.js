import {Link} from "react-router-dom";

const DropdownNavbarItem = ({title, items, urlName}) => {
    return (
        <div className="nav-item dropdown">
          <div className="nav-link dropdown-toggle" style={{color: "black"}} id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {title}
          </div>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <Link className="link dropdown-item" to={urlName + '/international-shipping'} ><li>{items[0]}</li></Link>
            <Link className="link dropdown-item" to={urlName + '/storage'} ><li>{items[1]}</li></Link>
            <Link className="link dropdown-item" to={urlName + '/domestic-tariff-table'} ><li>{items[2]}</li></Link>
            <Link className="link dropdown-item" to={urlName + '/sea-shipping'} ><li>{items[3]}</li></Link>
            <Link className="link dropdown-item" to={urlName + '/air-shipping'} ><li>{items[4]}</li></Link>
          </ul>
        </div>
    )
}

export default DropdownNavbarItem;