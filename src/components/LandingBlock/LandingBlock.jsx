import { useEffect, useState } from "react";
import "./LandingBlock.css";

import heroImg from "/assets/veena3.png";
import veenaTall from "/assets/t3.png";
import veenaSmall from "/assets/v9.1.png";

const LandingBlock = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * 0.1);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="landing-block">
      
      {/* HERO TEXT BLOCK (STABLE) */}
      <div className="hero-text-wrapper">
        <h1 className="hero-heading">Gajveena</h1>

        <div className="line flex justify-center w-full">
          <div className="hero-line"></div>
        </div>

        <p className="hero-tagline">Echoes of divinity in every string</p>
      </div>

      {/* Hero background */}
      <div
        className="hero-bg"
        style={{ backgroundImage: `url(${heroImg})` }}
      />

      {/* Right tall image */}
      <img
        src={veenaTall}
        alt="Veena"
        className="right-image"
        style={{ transform: `translateY(-${offset}px)` }}
      />

      {/* Content */}
      <div className="content-wrapper">
        <div className="left-column">
          <h2 className="font-cinzel text-4xl md:text-6xl text-yellowTint pb-6 text-left">
            A Legacy Evolved
          </h2>

          <p>
            Conceived in 2018, the Gajveena is a groundbreaking musical
            invention by Debjit Mahalanobis, born out of a deep desire to bridge
            the sonic worlds of Western Classical and Indian Classical music.
            Merging the Double Bass, the largest and lowest-pitched instrument
            of the violin family with the Rudraveena, the ancient bass
            instrument of the Dhrupad tradition, the Gajveena is an ambitious
            response to a long-missing voice in Indian classical music.
          </p>

          <img src={veenaSmall} alt="Detail" className="small-image" />
        </div>

        {/* Overlay text */}
        <div className="overlay-text">
           Standing nearly 7 feet tall and equipped with nine
            strings, including sympathetic and drone strings, the Gajveena is
            designed to be played both plucked and bowed, offering an
            extraordinary range of tonal depth, resonance, and expressive
            nuance. Its unique javari bridge produces a characteristic buzzing
            overtone, while the detachable gourd (tumba) and a hollow wooden
            body echo the architectural elements of traditional Indian
            instruments. It took about 18 months to build the 1st successful prototype with two family of instrument makers - Ranjit Roy of Roy musical from a violin making liniage and Dipen Das of D.K. Das & Sons , Rudra Veena maker.
        </div>
      </div>
    </section>
  );
};

export default LandingBlock;
