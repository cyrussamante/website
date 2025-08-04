import "./Footer.css";

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <div className="footer">
      <small>© {currentYear} Cyruss Amante. All rights reserved.</small>
    </div>
  );
}

export default Footer;
