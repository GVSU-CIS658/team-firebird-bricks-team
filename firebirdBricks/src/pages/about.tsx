import "../home.css";
import firebirdProfile from "../assets/firebirdProfile.jpg";

export default function About() {
  return (
    <div className="about-page">
      {/* TOP VIDEO */}
      <section className="about-video-section">
        <div className="about-video-container">
          <h1 className="about-main-title">Meet Firebird Bricks</h1>

          <div className="video-wrapper">
            <iframe
              src="https://www.youtube.com/embed/Jqsv0an4l3Y"
              title="Firebird Bricks Video"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* CREATOR SECTION */}
      <section className="about-creator-section">
        <div className="about-creator-container">
          <div className="creator-image">
            <img src={firebirdProfile} alt="Firebird Bricks Creator" />
          </div>

          <div className="creator-text">
            <h2>About Firebird Bricks</h2>
            <p>
              Firebird Bricks is a LEGO-focused YouTube channel dedicated to
              creativity, builds, and storytelling through bricks.
            </p>
            <p>
              From creative builds to exciting showcases, Firebird Bricks brings
              imagination to life one brick at a time.
            </p>
          </div>
        </div>
      </section>

      {/* POPULAR VIDEOS */}
      <section className="about-popular-videos-section">
        <div className="about-section-heading">
          <h2>Popular Videos</h2>
          <p>Some of the best content from Firebird Bricks</p>
        </div>

        <div className="popular-videos-grid">
          <div className="video-card">
            <iframe
              src="https://www.youtube.com/embed/ZC8bGO0JlXk"
              title="Popular Video 1"
              allowFullScreen
            ></iframe>
          </div>

          <div className="video-card">
            <iframe
              src="https://www.youtube.com/embed/5fiTzNKy6nk"
              title="Popular Video 2"
              allowFullScreen
            ></iframe>
          </div>

          <div className="video-card">
            <iframe
              src="https://www.youtube.com/embed/TH4bUKMK9Zo"
              title="Popular Video 3"
              allowFullScreen
            ></iframe>
          </div>

          <div className="video-card">
            <iframe
              src="https://www.youtube.com/embed/B1qe-AY2uVc"
              title="Popular Video 4"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* ENDING */}
      <section className="about-ending-section">
        <div className="about-ending-box">
          <h2>Keep Building, Keep Creating</h2>
          <p>
            Firebird Bricks is all about creativity, imagination, and bringing
            ideas to life one brick at a time.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="about-footer">
        <p>© 2026 Firebird Bricks • Built with passion for LEGO</p>
      </footer>
    </div>
  );
}