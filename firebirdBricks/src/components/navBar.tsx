import { Link } from "react-router-dom";
import "../home.css";

export default function NavBar() {
  return (
    <header className="site-header">
      <h1 className="site-title">Firebird Bricks</h1>

      <nav className="site-nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/ambassador">Ambassador</Link>
        <Link to="/sponsor">Sponsor</Link>
        <Link to="/consulting">Consulting</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}
