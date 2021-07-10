import { CartWidget } from "./CartWidget.jsx";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap' ;

export const BarraNav = () => {
    return (
        <>
        <Navbar bg="light" expand="lg">
            <Navbar.Brand>P&C Dinos</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav><Link to={'/'}>Home</Link></Nav>
                    <Nav><Link to={'/notfound'}>Contacto</Link></Nav>
                    <NavDropdown title="Categorías" id="basic-nav-dropdown">
                        <NavDropdown.Item><Link to={'/category/remera'}>Remera</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to={'/category/remera'}>Zapatillas</Link></NavDropdown.Item>
                    </NavDropdown>
                    <Nav><Link to={'/cart'}><CartWidget /></Link></Nav>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </>
    );
}