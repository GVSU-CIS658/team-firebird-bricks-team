import "../home.css";
import { Link } from "react-router-dom";
import firebirdProfile from "../assets/firebirdProfile.jpg";

export default function Ambassador() {
  return (
    <div className="ambassador-page">
      <section className="ambassador-hero">
        <div className="ambassador-hero-image">
          <img src={firebirdProfile} alt="Firebird Bricks Ambassador" />
        </div>

        <div className="ambassador-hero-text">
          <p className="ambassador-label">Firebird Bricks</p>
          <h1>Ambassador Program</h1>
          <p>
            Join the Firebird Bricks community and help share creativity, LEGO
            builds, and exciting content with fans around the world.
          </p>
        </div>
      </section>

      <section className="ambassador-info">
        <h2>What is the Ambassador Program?</h2>
        <p>
          The Ambassador Program is for LEGO fans, creators, and supporters who
          want to represent Firebird Bricks, promote content, and be part of a
          growing creative community.
        </p>
      </section>

      <section className="ambassador-benefits">
        <h2>What Ambassadors Get</h2>

        <div className="ambassador-card-grid">
          <div className="ambassador-card">
            <h3>Community Access</h3>
            <p>Connect with other LEGO fans and Firebird Bricks supporters.</p>
          </div>

          <div className="ambassador-card">
            <h3>Featured Support</h3>
            <p>Get opportunities to be recognized through Firebird Bricks.</p>
          </div>

          <div className="ambassador-card">
            <h3>Creative Involvement</h3>
            <p>Share ideas, feedback, and help grow the channel community.</p>
          </div>
        </div>
      </section>

      <section className="ambassador-form-section">
        <h2>Apply to Become an Ambassador</h2>

        <form className="ambassador-form">
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email Address" />
          <input type="text" placeholder="Social Media / YouTube Link" />
          <textarea placeholder="Why do you want to become an ambassador?"></textarea>
          <button type="submit">Submit Application</button>
        </form> 
      </section>
      <section className="ambassador-next">
  <h2>Need Help Growing Your Content?</h2>
  <p>
    Explore our consulting services and take your LEGO content to the next level.
  </p>

  <Link to="/consulting">
    <button className="ambassador-btn">
      Go to Consulting
    </button>
  </Link>
</section>

      <footer className="about-footer">
        <p>© 2026 Firebird Bricks • Built with passion for LEGO</p>
      </footer>
    </div>
  );
}