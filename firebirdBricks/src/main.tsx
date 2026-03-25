// src/main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/home' // Make sure this is home.tsx
import './style.css'

ReactDOM.createRoot(document.getElementById('app')!).render(
  <React.StrictMode>
    <Home />
    <section id="center">
      {/* Any other content you want here */}
    </section>
  </React.StrictMode>
)