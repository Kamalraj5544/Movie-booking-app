import "./NavBar.scss";

import logo from "../../assets/logo.jpg";

const NavBar = () => {
  return (
    <div className="header-section">
      <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-bg">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img
              src={logo}
              alt="Logo"
              className="d-inline-block align-text-top logo"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="true"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-evenly">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#search-section">
                  Search
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#movies-section">Movies</a>
              </li>
            </ul>
            <div className="d-grid d-md-flex">
              <a className="btn me-md-2 join-btn" type="button" href="/signup">
                JOIN US
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
