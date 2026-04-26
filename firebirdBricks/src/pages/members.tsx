import { Link, Navigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useAuth } from "../components/authContext";
import "../home.css";

export default function Members() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="members-page">
        <p className="members-loading">Loading...</p>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  async function handleLogout() {
    await signOut(auth);
  }

  return (
    <div className="members-page">
      <section className="members-hero">
        <p className="ambassador-label">Members Area</p>
        <h1>Welcome, {user.email}</h1>
        <p>
          Thanks for being part of the Firebird Bricks community. Enjoy these
          exclusive members-only updates and behind-the-scenes content.
        </p>
        <button className="ambassador-btn" onClick={handleLogout}>
          Log Out
        </button>
      </section>

      <section className="members-content">
        <h2>Exclusive Content</h2>

        <div className="members-card-grid">
          <div className="members-card">
            <h3>Behind the Build</h3>
            <p>
              Watch unreleased footage of upcoming LEGO builds before they go
              live on the channel.
            </p>
          </div>

          <div className="members-card">
            <h3>Early Access Videos</h3>
            <p>
              Members get to see new Firebird Bricks videos before anyone else.
            </p>
          </div>

          <div className="members-card">
            <h3>Member-Only Builds</h3>
            <p>
              Step-by-step guides for special LEGO builds shared only with
              registered members.
            </p>
          </div>
        </div>
      </section>

      <section className="members-next">
        <h2>Looking for More?</h2>
        <p>Check out the latest sponsor and ambassador opportunities.</p>
        <Link to="/sponsor">
          <button className="ambassador-btn">View Sponsor Page</button>
        </Link>
      </section>

      <footer className="about-footer">
        <p>© 2026 Firebird Bricks • Built with passion for LEGO</p>
      </footer>
    </div>
  );
}
