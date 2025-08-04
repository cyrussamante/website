import "./Navbar.css";
import Button from "./Button";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
];

function Navbar() {
  return (
    <nav>
      <a href="/" id="logo">
        Cyruss<span id="dot">.</span>
      </a>
      <ul className="nav-links">
        {navLinks.map(({ label, href }) => (
          <li key={label}>
            <a className="nav-item" href={href}>
              {label}
            </a>
          </li>
        ))}
      </ul>
      <a href="mailto:cyruss@cyrussamante.com">
        <Button id="contact-btn" type="button" variant="secondary" size="md">
          Contact Me
        </Button>
      </a>
    </nav>
  );
}

export default Navbar;
