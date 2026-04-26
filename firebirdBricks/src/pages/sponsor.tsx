import "../home.css";
import { Link } from "react-router-dom";
import firebirdProfile from "../assets/firebirdProfile.jpg";

export default function Sponsor() {
  return (
    <div className="sponsor-page">
      <section className="sponsor-hero">
        <div className="sponsor-hero-image">
          <img src={firebirdProfile} alt="Firebird Bricks Sponsor" />
        </div>

        <div className="sponsor-hero-text">
          <p className="sponsor-label">Firebird Bricks</p>
          <h1>Sponsor the Channel</h1>
          <p>
            Partner with Firebird Bricks to bring your brand in front of a
            growing audience of LEGO fans, builders, and creators on YouTube.
          </p>
        </div>
      </section>

      <section className="sponsor-info">
        <h2>Why Sponsor Firebird Bricks?</h2>
        <p>
          Firebird Bricks reaches a passionate community of LEGO enthusiasts
          through fun, creative video content. Sponsoring the channel is a
          great way for brands to connect with viewers who love builds,
          collectibles, and all things LEGO.
        </p>
      </section>

      <section className="sponsor-benefits">
        <h2>What Sponsors Get</h2>

        <div className="sponsor-card-grid">
          <div className="sponsor-card">
            <h3>Audience Reach</h3>
            <p>
              Get your brand featured in videos seen by a dedicated and engaged
              YouTube audience of LEGO fans.
            </p>
          </div>

          <div className="sponsor-card">
            <h3>Custom Promotions</h3>
            <p>
              Work with Firebird Bricks to create dedicated shoutouts, product
              showcases, or custom build videos featuring your brand.
            </p>
          </div>

          <div className="sponsor-card">
            <h3>Long-Term Partnership</h3>
            <p>
              Build ongoing visibility with recurring sponsorship slots and
              creative collaborations across upcoming content.
            </p>
          </div>
        </div>
      </section>

      <section className="sponsor-info">
        <h2>Sponsorship Options</h2>
        <p>
          Whether you're looking for a quick shoutout, an integrated product
          placement, or a full sponsored video, Firebird Bricks offers flexible
          packages to fit your brand's goals and budget.
        </p>
      </section>

      <section className="sponsor-next">
        <h2>Ready to Partner With Us?</h2>
        <p>
          Reach out through our contact page to talk about sponsorship and
          start the conversation.
        </p>

        <Link to="/contact">
          <button className="ambassador-btn">Contact Firebird Bricks</button>
        </Link>
      </section>

      <footer className="about-footer">
        <p>© 2026 Firebird Bricks • Built with passion for LEGO</p>
      </footer>
    </div>
  );
}
