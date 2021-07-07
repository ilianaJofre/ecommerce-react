import { CartWidget } from "./CartWidget.jsx";
import { Link } from "react-router-dom";

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-xs navbar-light bg-light">
          <div className="container-md d-flex justify-content-start">
              <Link className="navbar-brand" to={'/'}>P&C Dinos</Link> 
              <Link className="nav-link" aria-current="page" to={'/category/remera'}>Remeras</Link>
              <Link className="nav-link" to={'/category/zapatillas'}>Zapatillas</Link>
              <CartWidget/>
            </div>
        </nav>
    );
}