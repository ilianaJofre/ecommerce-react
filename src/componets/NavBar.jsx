export const NavBar = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item nav-link active">P&C Dinos
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pepelera</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Cotillón</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}