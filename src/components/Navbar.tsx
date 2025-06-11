import { NavLink } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav>
        <NavLink to="/" className="nav-link">
          <span className="nav-link-text" id="nav-link-home">
            <span className="first-name">cyruss</span>
            <span className="last-name">amante</span>
          </span>
        </NavLink>
        <NavLink to="/about" className="nav-link">
          <span className="nav-link-text">about</span>
        </NavLink>
        <NavLink to="/projects" className="nav-link">
          <span className="nav-link-text">projects</span>
        </NavLink>
        <NavLink to="/experience" className="nav-link">
          <span className="nav-link-text">experience</span>
        </NavLink>
        <NavLink to="/contact" className="nav-link">
          <span className="nav-link-text">contact</span>
        </NavLink>
      </nav>
    </>
  );
}

export default Navbar;
