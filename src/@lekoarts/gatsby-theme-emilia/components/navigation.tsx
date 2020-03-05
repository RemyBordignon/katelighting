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
            <Navbar fixed={"top"} color="light" light expand="sm" style={{paddingTop: '25px', paddingBottom: '25px', paddingRight: 30, paddingLeft: 26}}>
                <Nav className="mr-auto" navbar>
                    <NavItem >
                        <Link className={"nav-link"} to={'/'}><h5>Kate Baldwin</h5></Link>
                    </NavItem>
                </Nav>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar className="">
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <Link className={"nav-link"} to={'/about'}><h6>About</h6></Link>
                        </NavItem>
                        <NavItem>
                            <Link className={"nav-link"} to={'/press'}><h6>Press</h6></Link>
                        </NavItem>
                        <NavItem>
                            <Link className={"nav-link"} to={'/contact'}><h6>Contact</h6></Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
            <div style={{paddingBottom: '6rem' }} />
        </div>
    );
}

export default Navigation;
