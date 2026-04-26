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
          <h1>LEGO® Ambassador Network</h1>
          <p>
            Firebird Bricks is a proud partner of the LEGO® Ambassador Network
            (LAN), helping share and celebrate LEGO with fans around the world.
          </p>
        </div>
      </section>

      <section className="ambassador-info">
        <h2>What is the LEGO® Ambassador Network?</h2>
        <p>
          The LEGO® Ambassador Network (LAN) is an official program run by The
          LEGO Group that brings together communities of LEGO fans. Its goal is
          to promote LEGO worldwide by giving fans ways to connect, share
          builds, and stay engaged with the wider LEGO community.
        </p>
      </section>

      <section className="ambassador-benefits">
        <h2>Recognized Community Types</h2>

        <div className="ambassador-card-grid">
          <div className="ambassador-card">
            <h3>RLUG</h3>
            <p>
              Recognized LEGO User Groups are local fan groups that meet in
              person to build, share, and host events in their city or region.
            </p>
          </div>

          <div className="ambassador-card">
            <h3>RLFM</h3>
            <p>
              Recognized LEGO Fan Media includes blogs, magazines, and YouTube
              channels (like Firebird Bricks) that create LEGO content for fans
              everywhere.
            </p>
          </div>

          <div className="ambassador-card">
            <h3>RLOC</h3>
            <p>
              Recognized LEGO Online Communities exist entirely online, hosting
              discussions, builds, and competitions for fans across the globe.
            </p>
          </div>
        </div>
      </section>

      <section className="ambassador-info">
        <h2>Our Partnership</h2>
        <p>
          As a proud partner of the LEGO® Ambassador Network, Firebird Bricks
          works to celebrate creativity, share inspiring builds, and promote
          LEGO to fans of all ages. We're honored to be part of a global
          community that keeps the LEGO hobby alive and growing.
        </p>
      </section>

      <section className="ambassador-next">
        <h2>Need Help Growing Your Content?</h2>
        <p>
          Explore our consulting services and take your LEGO content to the
          next level.
        </p>

        <Link to="/consulting">
          <button className="ambassador-btn">Go to Consulting</button>
        </Link>
      </section>

      <footer className="about-footer">
        <p>© 2026 Firebird Bricks • Built with passion for LEGO</p>
      </footer>
    </div>
  );
}
