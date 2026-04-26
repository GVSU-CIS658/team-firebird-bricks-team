//Bharghav
import "../home.css";
import { Link } from "react-router-dom";
import firebirdProfile from "../assets/firebirdProfile.jpg";

export default function Consulting() {
  return (
    <div className="consulting-page">

      {/* HERO */}
      <section className="consulting-hero">
        <div className="consulting-hero-image">
          <img src={firebirdProfile} alt="Consulting" />
        </div>

        <div className="consulting-hero-text">
          <p className="consulting-label">Firebird Bricks</p>
          <h1>Level Up Your Content</h1>
          <p>
            Get guidance on LEGO content creation, storytelling, and growing
            your channel with better strategy and creativity.
          </p>
        </div>
      </section>

      {/* WHAT */}
      <section className="consulting-info">
        <h2>What is Consulting?</h2>
        <p>
          Firebird Bricks consulting helps creators improve their content,
          refine their ideas, and build stronger engagement with their audience.
        </p>
      </section>

      {/* TESTIMONIALS */}
      <section className="consulting-testimonials">
        <h2>Testimonials</h2>

        <div className="consulting-card-grid">
          <div className="consulting-card">
            <p>"Helped me improve my videos a lot!"</p>
          </div>

          <div className="consulting-card">
            <p>"Great advice on growing my LEGO channel."</p>
          </div>

          <div className="consulting-card">
            <p>"Very useful feedback and direction."</p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="consulting-process">
        <h2>Our Process</h2>

        <div className="consulting-card-grid">
          <div className="consulting-card">1. Submit Request</div>
          <div className="consulting-card">2. Review Content</div>
          <div className="consulting-card">3. Get Feedback</div>
        </div>
      </section>

      {/* CTA */}
      <section className="consulting-cta">
        <h2>Start Your Journey</h2>

        <Link to="/contact">
  <button className="consulting-btn">Contact Us</button>
</Link>
      </section>

      {/* FOOTER */}
      <footer className="about-footer">
        <p>© 2026 Firebird Bricks • Built with passion for LEGO</p>
      </footer>

    </div>
  );
}