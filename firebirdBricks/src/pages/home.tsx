import "../home.css";
import heroVideo from "../assets/heroVideo.mp4";
import aboutImage from "../assets/homeAbout.png";
import { Link } from "react-router-dom";

export default function Home() {
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

      <h2 className="storeTitle">Featured Merch</h2>
      <div className="storeSlider">
        <div className="storeItem1">
          <h3>Firebird Tee</h3>
          <p>$24.99</p>
        </div>
        <div className="storeItem2">
          <h3>Brick Mug</h3>
          <p>$14.99</p>
        </div>
        <div className="storeItem3">
          <h3>Sticker Pack</h3>
          <p>$6.99</p>
        </div>
        <div className="storeItem4">
          <h3>Poster Print</h3>
          <p>$12.99</p>
        </div>
      </div>

      <div className="about">
        <div className="aboutInner">
          <img src={aboutImage} alt="Profile Picture" />
        </div>

        <div className="aboutInner">
          <h1>ABOUT</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elit
            neque, dictum sit amet placerat et, hendrerit sed augue. In
            tincidunt euismod metus vitae ultricies.
          </p>

          <Link to="/about">
            <button>Go to About Page</button>
          </Link>
        </div>
      </div>

      <div className="ambassador-home-simple">
        <h2>Interested in joining Firebird Bricks?</h2>
        <p>Learn more about our LEGO Ambassador Program.</p>

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
