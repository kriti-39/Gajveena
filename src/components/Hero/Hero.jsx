import React, { useEffect, useState } from "react";
import "./Hero.css";
import Navbar from "../Navbar/Navbar";
import bgImage from "/assets/veena3.png"; // your image

const Hero = () => {
  const [opacity, setOpacity] = useState(0); // Start fully transparent for fade-in
  const [scrollOpacity, setScrollOpacity] = useState(1); // For fade-out on scroll

  // Fade-in on mount
  useEffect(() => {
    const timeout = setTimeout(() => setOpacity(0.2), 100); // fade in to 0.2 opacity after 100ms
    return () => clearTimeout(timeout);
  }, []);

  // Fade-out on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Calculate new opacity (1 at top, fades out gradually)
      const newOpacity = Math.max(0, 0.2 - scrollY / 1000); // tweak divisor for speed
      setScrollOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="hero-container flex flex-col items-center justify-center h-screen text-center text-[#f9e7c2] relative overflow-hidden ">

      {/* Image with dynamic opacity */}
      <img
        src={bgImage}
        alt="background overlay"
        className="hero-image"
        style={{ opacity: opacity * scrollOpacity }}
        
      />

      <Navbar />

      <h1 className="hero-heading mb-1 z-10">Gajveena</h1>

      {/* Line Expansion */}
      <div className="flex justify-center w-full z-10">
        <div className="h-[3px] bg-gradient-to-r from-transparent via-[#f9e7c2] to-transparent opacity-60 w-0 animate-lineGrow"></div>
      </div>

      <p className="hero-tagline z-10">Echoes of divinity in every string</p>
    </div>
  );
};

export default Hero;
