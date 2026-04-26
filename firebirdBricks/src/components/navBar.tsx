import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./authContext";
import "../home.css";

export default function NavBar() {
  const { user } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <h1 className="site-title">Firebird Bricks</h1>

      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path
            d="M4 6h16M4 12h16M4 18h16"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>

      <nav className={`site-nav ${menuOpen ? "open" : ""}`}>
        <Link to="/" onClick={closeMenu}>
          Home
        </Link>
        <Link to="/about" onClick={closeMenu}>
          About
        </Link>
        <Link to="/ambassador" onClick={closeMenu}>
          Ambassador
        </Link>
        <Link to="/sponsor" onClick={closeMenu}>
          Sponsor
        </Link>
        <Link to="/consulting" onClick={closeMenu}>
          Consulting
        </Link>
        <Link to="/contact" onClick={closeMenu}>
          Contact
        </Link>
        <Link
          to={user ? "/members" : "/login"}
          onClick={closeMenu}
          className="login-icon-link"
          aria-label={user ? "Members area" : "Login"}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle
              cx="12"
              cy="8"
              r="4"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M4 21c0-4 4-7 8-7s8 3 8 7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </Link>
      </nav>
    </header>
  );
}
