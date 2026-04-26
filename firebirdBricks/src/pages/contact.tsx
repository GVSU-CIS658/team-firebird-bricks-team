import { useState } from "react";
import "../home.css";
import firebirdProfile from "../assets/firebirdProfile.jpg";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="contact-page">

      {/* HERO */}
      <section className="contact-hero">
        <div className="contact-hero-image">
          <img src={firebirdProfile} alt="Firebird Bricks" />
        </div>

        <div className="contact-hero-text">
          <p className="contact-label">Firebird Bricks</p>
          <h1>Contact Us</h1>
          <p>
            Have a question, collaboration idea, or want to connect with
            Firebird Bricks? Send us a message below.
          </p>
        </div>
      </section>

      {/* FORM */}
      <section className="contact-form-section">
        <h2>Send a Message</h2>

        <form
          className="contact-form"
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
        >
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="text" placeholder="Subject" required />
          <textarea placeholder="Write your message here" required></textarea>

          <button type="submit">Send Message</button>
        </form>

        {submitted && (
          <p className="success-message">
            ✅ Message sent successfully!
          </p>
        )}
      </section>

      {/* FOOTER */}
      <footer className="about-footer">
        <p>© 2026 Firebird Bricks • Built with passion for LEGO</p>
      </footer>

    </div>
  );
}