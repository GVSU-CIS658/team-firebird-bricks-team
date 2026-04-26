import { useEffect, useRef, useState } from "react";
import { Navigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import {
  doc,
  getDoc,
  setDoc,
  addDoc,
  collection,
  query,
  orderBy,
  getDocs,
  serverTimestamp,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { auth, db, storage } from "../firebase";
import { useAuth } from "../components/authContext";
import "../home.css";

const latestVideos = [
  { id: "ZC8bGO0JlXk", title: "I Built a LEGO Minecraft War" },
  { id: "5fiTzNKy6nk", title: "Level 1 vs 100 LEGO Ninjago" },
  { id: "Nebqo5oMHJE", title: "I Built LEGO Batman vs Superman Mechs" },
  { id: "TH4bUKMK9Zo", title: "I Built LEGO Dinosaur Mechs" },
  { id: "ksJMnVtCz78", title: "I Built EVERY LEGO Marvel Mech EVER Made" },
  { id: "dVSen71Z-oo", title: "I Built LEGO Minecraft Movie Mechs" },
];

type Post = {
  id: string;
  text: string;
  imageUrl?: string;
  authorName: string;
  authorId: string;
  createdAt?: any;
};

export default function Members() {
  const { user, loading } = useAuth();

  const [tab, setTab] = useState<"content" | "feed" | "profile">("content");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [cell, setCell] = useState("");
  const [favoriteSet, setFavoriteSet] = useState("");
  const [status, setStatus] = useState("");
  const [editing, setEditing] = useState(false);

  const [posts, setPosts] = useState<Post[]>([]);
  const [postText, setPostText] = useState("");
  const [postImage, setPostImage] = useState<File | null>(null);
  const [postStatus, setPostStatus] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    async function loadProfile() {
      if (!user) return;
      const snap = await getDoc(doc(db, "members", user.uid));
      if (snap.exists()) {
        const data = snap.data();
        setFirstName(data.firstName || "");
        setLastName(data.lastName || "");
        setCell(data.cell || "");
        setFavoriteSet(data.favoriteSet || "");
      }
    }
    loadProfile();
  }, [user]);

  async function loadPosts() {
    const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));
    const snap = await getDocs(q);
    const list: Post[] = snap.docs.map((d) => ({
      id: d.id,
      ...(d.data() as Omit<Post, "id">),
    }));
    setPosts(list);
  }

  useEffect(() => {
    if (tab === "feed") loadPosts();
  }, [tab]);

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

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    if (!user) return;
    setStatus("Saving...");
    try {
      await setDoc(doc(db, "members", user.uid), {
        firstName,
        lastName,
        email: user.email,
        cell,
        favoriteSet,
      });
      setStatus("Saved!");
      setEditing(false);
    } catch (err: any) {
      setStatus("Error: " + err.message);
    }
  }

  async function handlePost(e: React.FormEvent) {
    e.preventDefault();
    if (!user) return;
    if (!postText && !postImage) {
      setPostStatus("Add some text or an image first.");
      return;
    }
    setPostStatus("Posting...");
    try {
      let imageUrl = "";
      if (postImage) {
        const fileRef = ref(
          storage,
          `posts/${user.uid}/${Date.now()}-${postImage.name}`
        );
        await uploadBytes(fileRef, postImage);
        imageUrl = await getDownloadURL(fileRef);
      }
      await addDoc(collection(db, "posts"), {
        text: postText,
        imageUrl,
        authorId: user.uid,
        authorName: firstName || "Member",
        createdAt: serverTimestamp(),
      });
      setPostText("");
      setPostImage(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
      setPostStatus("Posted!");
      loadPosts();
    } catch (err: any) {
      setPostStatus("Error: " + err.message);
    }
  }

  return (
    <div className="members-page">
      <section className="members-tabs">
        <button
          className={tab === "content" ? "tab active" : "tab"}
          onClick={() => setTab("content")}
        >
          Latest Uploads
        </button>
        <button
          className={tab === "feed" ? "tab active" : "tab"}
          onClick={() => setTab("feed")}
        >
          Members Feed
        </button>
        <button
          className={tab === "profile" ? "tab active" : "tab"}
          onClick={() => setTab("profile")}
        >
          Profile
        </button>
      </section>

      {tab === "content" && (
        <section className="members-content">
          <h2>Latest Uploads</h2>
          <p className="members-subtitle">
            The latest videos from Firebird Bricks on YouTube.
          </p>

          <div className="video-thumb-grid">
            {latestVideos.map((v) => (
              <a
                className="video-thumb"
                key={v.id}
                href={`https://www.youtube.com/watch?v=${v.id}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="video-thumb-image">
                  <img
                    src={`https://img.youtube.com/vi/${v.id}/maxresdefault.jpg`}
                    alt={v.title}
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = `https://img.youtube.com/vi/${v.id}/hqdefault.jpg`;
                    }}
                  />
                  <span className="video-thumb-play">▶</span>
                </div>
                <h3>{v.title}</h3>
              </a>
            ))}
          </div>
        </section>
      )}

      {tab === "feed" && (
        <section className="members-feed">
          <h2>Members Feed</h2>
          <p className="members-subtitle">
            Share your own LEGO builds and see what other members are creating.
          </p>

          <form className="feed-form" onSubmit={handlePost}>
            <textarea
              placeholder="Share a build, photo, or thought..."
              value={postText}
              onChange={(e) => setPostText(e.target.value)}
            />
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={(e) => setPostImage(e.target.files?.[0] || null)}
            />
            <button type="submit">Post</button>
            {postStatus && <p className="profile-status">{postStatus}</p>}
          </form>

          <div className="feed-list">
            {posts.length === 0 && (
              <p className="feed-empty">No posts yet. Be the first!</p>
            )}
            {posts.map((p) => (
              <div className="feed-post" key={p.id}>
                <div className="feed-author">{p.authorName}</div>
                {p.text && <p className="feed-text">{p.text}</p>}
                {p.imageUrl && (
                  <img
                    className="feed-image"
                    src={p.imageUrl}
                    alt="Member post"
                  />
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {tab === "profile" && (
        <section className="members-profile">
          <p className="ambassador-label">Members Area</p>
          <h1>Welcome{firstName ? `, ${firstName}` : ""}</h1>

          {!editing ? (
            <>
              <div className="profile-info">
                <div className="profile-row">
                  <span className="profile-label">First Name</span>
                  <span>{firstName || "—"}</span>
                </div>
                <div className="profile-row">
                  <span className="profile-label">Last Name</span>
                  <span>{lastName || "—"}</span>
                </div>
                <div className="profile-row">
                  <span className="profile-label">Email</span>
                  <span>{user.email}</span>
                </div>
                <div className="profile-row">
                  <span className="profile-label">Cell</span>
                  <span>{cell || "—"}</span>
                </div>
                <div className="profile-row">
                  <span className="profile-label">Favorite LEGO Set</span>
                  <span>{favoriteSet || "—"}</span>
                </div>
              </div>

              <div className="profile-actions">
                <button
                  className="ambassador-btn"
                  onClick={() => {
                    setStatus("");
                    setEditing(true);
                  }}
                >
                  Edit Profile
                </button>
                <button className="ambassador-btn" onClick={handleLogout}>
                  Log Out
                </button>
              </div>

              {status && <p className="profile-status">{status}</p>}
            </>
          ) : (
            <>
              <form className="login-form" onSubmit={handleSave}>
                <input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                <input type="email" value={user.email || ""} disabled />
                <input
                  type="tel"
                  placeholder="Cell Phone"
                  value={cell}
                  onChange={(e) => setCell(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Favorite LEGO Set"
                  value={favoriteSet}
                  onChange={(e) => setFavoriteSet(e.target.value)}
                />
                <button type="submit">Save Profile</button>
              </form>

              <button
                className="profile-cancel"
                onClick={() => setEditing(false)}
              >
                Cancel
              </button>

              {status && <p className="profile-status">{status}</p>}
            </>
          )}
        </section>
      )}

      <footer className="about-footer">
        <p>© 2026 Firebird Bricks • Built with passion for LEGO</p>
      </footer>
    </div>
  );
}
