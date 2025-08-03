import "./Navbar.css";
import Button from "./Button";

function Navbar() {
  return (
    <nav>
      <a href="/" id="logo">
        Cyruss<span id="dot">.</span>
      </a>
      <ul className="nav-links">
        {[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Experience", href: "/experience" },
          { label: "Projects", href: "/projects" },
        ].map(({ label, href }) => (
          <li key={label}>
            <a className="nav-item" href={href}>
              {label}
            </a>
          </li>
        ))}
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
