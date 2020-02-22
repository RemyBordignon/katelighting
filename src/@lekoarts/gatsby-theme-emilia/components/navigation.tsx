import React, {useState} from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';
import {Link} from "gatsby";


const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar fixed={"top"} color="light" light expand="sm">
                <Nav className="mr-auto" navbar><NavItem><Link className={"nav-link"} to={'/'}>Kate Baldwin</Link></NavItem></Nav>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar className="">
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <Link className={"nav-link"} to={'/about'}>About</Link>
                        </NavItem>
                        <NavItem>
                            <Link className={"nav-link"} to={'/press'}>Press</Link>
                        </NavItem>
                        <NavItem>
                            <Link className={"nav-link"} to={'/contact'}>Contact</Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Navigation;
