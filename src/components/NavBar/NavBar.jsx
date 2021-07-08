import { CartWidget } from "./CartWidget.jsx";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap' ;

export const BarraNav = () => {
    return (
        <>
        <Navbar bg="light" expand="lg">
            <Navbar.Brand>P&C Dinos</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link><Link to={'/'}>Home</Link></Nav.Link>
                    <Nav.Link><Link to={'/notfound'}>Contacto</Link></Nav.Link>
                    <NavDropdown title="Categorías" id="basic-nav-dropdown">
                        <NavDropdown.Item><Link to={'/category/remera'}>Remera</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to={'/category/remera'}>Zapatillas</Link></NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link><Link to={'/cart'}><CartWidget /></Link></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </>
    );
}