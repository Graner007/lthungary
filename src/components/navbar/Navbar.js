import NavbarItem from './NavbarItem';
import DropdownNavbarItem from "./DropdownNavbarItem";

const Navbar = () => {
    const items = ["air", "water", "ground"];

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <ul className="navbar-nav me-auto mb2 mb-lg-0 justify-content-end">
                    <NavbarItem title="Mainpage" />
                    <DropdownNavbarItem title="Services" items={items} />
                    <NavbarItem title="About Us" />
                    <NavbarItem title="Contact" />
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;