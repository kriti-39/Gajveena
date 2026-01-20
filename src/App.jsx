// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import History from "./pages/Concept";
import bgVideo from "/assets/bg.mp4";
import Navbar from "./components/Navbar/Navbar";
import CreatorPage from "./pages/CreatorPage";
import Concept from "./pages/Concept";

const App = () => {
  return (
    <div className="relative bg-black bg-opacity-50">
      {/* Global Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover z-[-1] pointer-events-none"
      >
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Routing */}
  
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/creator" element={<CreatorPage/>} />
        <Route path="/concept" element={<Concept/>} />
      </Routes>
    </div>
  );
};

export default App;
