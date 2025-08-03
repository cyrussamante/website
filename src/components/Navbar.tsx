import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <a href="/" id="logo">
        Cyruss<span id="dot">.</span>
      </a>
      <ul className="nav-list">
        <li className="nav-item">
          <a href="">Home</a>
        </li>
        <li className="nav-item">
          <a href="">About</a>
        </li>
        <li className="nav-item">
          <a href="">Experience</a>
        </li>
        <li className="nav-item">
          <a href="">Projects</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
