import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Ambassador from "./pages/ambassador";
import Consulting from "./pages/consulting";
import Contact from "./pages/contact";
import Sponsor from "./pages/sponsor";
import Login from "./pages/login";
import Members from "./pages/members";
import NavBar from "./components/navBar";
import { AuthProvider } from "./components/authContext";
import "./style.css";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ambassador" element={<Ambassador />} />
        <Route path="/consulting" element={<Consulting />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sponsor" element={<Sponsor />} />
        <Route path="/login" element={<Login />} />
        <Route path="/members" element={<Members />} />
      </Routes>
    </>
  );
};

ReactDOM.createRoot(document.getElementById("app")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
