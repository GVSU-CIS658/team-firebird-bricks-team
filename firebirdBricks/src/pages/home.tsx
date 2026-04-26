import "../home.css";
import heroVideo from "../assets/heroVideo.mp4";
import aboutImage from "../assets/homeAbout.png";
import { Link } from "react-router-dom";
import { useAuth } from "../components/authContext";

export default function Home() {
  const { user } = useAuth();
  return (
    <div>
      <div className="backgroundHome">
        <video autoPlay muted playsInline loop id="heroVideo">
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="heroOverlay">
          <h1>Firebird Bricks</h1>
          <p>Creative LEGO builds, stories, and showcases.</p>
          <Link to="/about">
            <button>Learn More</button>
          </Link>
        </div>
      </div>

      <div className="members-home-ad">
        <h2>Become a Firebird Bricks Member</h2>
        <p>
          Sign up for free and unlock exclusive content, behind-the-scenes
          videos, early access releases, and member-only LEGO builds.
        </p>

        <Link to={user ? "/members" : "/login"}>
          <button className="ambassador-btn">
            {user ? "Go to Members Area" : "Register / Login"}
          </button>
        </Link>
      </div>

      <div className="about">
        <div className="aboutInner">
          <img src={aboutImage} alt="Profile Picture" />
        </div>

        <div className="aboutInner">
          <h1>ABOUT</h1>
          <p>
            Firebird Bricks is a LEGO-focused YouTube channel dedicated to
            creativity, builds, and storytelling through bricks. From custom
            mechs to massive dioramas, we bring imagination to life one brick
            at a time.
          </p>

          <Link to="/about">
            <button>Go to About Page</button>
          </Link>
        </div>
      </div>

      <div className="ambassador-home-simple">
        <h2>Interested in the LEGO® Ambassador Program?</h2>
        <p>
          Learn how Firebird Bricks partners with the LEGO® Ambassador Network
          to celebrate and promote LEGO worldwide.
        </p>

        <Link to="/ambassador">
          <button className="ambassador-btn">View Ambassador Program</button>
        </Link>
      </div>

      <div className="sponsor-home-simple">
        <h2>Want to Sponsor Firebird Bricks?</h2>
        <p>
          Get your brand in front of a passionate LEGO audience on YouTube.
        </p>

        <Link to="/sponsor">
          <button className="ambassador-btn">View Sponsor Options</button>
        </Link>
      </div>

      <footer className="about-footer">
        <p>© 2026 Firebird Bricks • Built with passion for LEGO</p>
      </footer>
    </div>
  );
}
