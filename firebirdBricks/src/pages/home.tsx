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
      </div>

      <div className="storeSlider">
        <div className="storeItem1"></div>
        <div className="storeItem2"></div>
        <div className="storeItem3"></div>
        <div className="storeItem4"></div>
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
            <div className="ambassador-home-simple">
  <h2>Interested in joining Firebird Bricks?</h2>
  <p>Learn more about our LEGO Ambassador Program.</p>

  <Link to="/ambassador">
    <button className="ambassador-btn">View Ambassador Program</button>
  </Link>
</div>

          </Link>
        </div>
      </div>
    </div>
  );
}