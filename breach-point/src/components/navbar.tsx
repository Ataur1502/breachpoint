import { useState } from "react";
import { Menu, X } from "lucide-react";
import "./navbar.css";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">BREACH POINT</div>

        {/* Mobile Toggle */}
        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>

        {/* Links */}
        <nav className={`navbar-links ${isOpen ? "active" : ""}`}>
          <a href="/#home" onClick={() => setIsOpen(false)}>Home</a>
          <a href="/#about" onClick={() => setIsOpen(false)}>About</a>
          <a href="/#details" onClick={() => setIsOpen(false)}>Event</a>
          <a href="/#register" onClick={() => setIsOpen(false)}>Register</a>
          <a href="/#sponsors" onClick={() => setIsOpen(false)}>Sponsors</a>
          <a href="/#team" onClick={() => setIsOpen(false)}>Team</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
