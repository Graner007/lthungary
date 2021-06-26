import NavbarItem from './NavbarItem';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <NavbarItem title="Mainpage" />
                <NavbarItem title="About Us" />
                <NavbarItem title="Contact" />
            </div>
        </nav>
    )
}

export default Navbar;