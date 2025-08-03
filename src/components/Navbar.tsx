import "./Navbar.css";
import Button from "./Button";

function Navbar() {
  return (
    <nav>
      <a href="/" id="logo">
        Cyruss<span id="dot">.</span>
      </a>
      <ul className="nav-links">
        <li>
          <a className="nav-item" href="/">
            Home
          </a>
        </li>
        <li>
          <a className="nav-item" href="/about">
            About
          </a>
        </li>
        <li>
          <a className="nav-item" href="/experience">
            Experience
          </a>
        </li>
        <li>
          <a className="nav-item" href="/projects">
            Projects
          </a>
        </li>
      </ul>
      <a href="/contact">
        <Button id="contact-btn" variant="secondary" size="md">
          Contact Me
        </Button>
      </a>
    </nav>
  );
}

export default Navbar;
