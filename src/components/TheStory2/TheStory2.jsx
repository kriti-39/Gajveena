import React, { useEffect, useState } from "react";
import Image1 from "/assets/t3.png";
import Image2 from "/assets/v9.1.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./TheStory2.css";

const TheStory = () => {
  const [parallaxY, setParallaxY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  /* Detect mobile */
  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth <= 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  /* Parallax (disabled on mobile) */
  useEffect(() => {
    if (isMobile) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      setParallaxY(scrollY < 400 ? scrollY * 0.1 : 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  const { ref: leftTextRef, inView: leftTextInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const { ref: rightTextRef, inView: rightTextInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section className="the-story-section flex flex-col overflow-x-hidden">
      {/* ---------- FIRST BLOCK ---------- */}
      <div className="story-hero relative w-full min-h-[70vh] md:min-h-[100vh] flex items-center justify-center overflow-hidden py-16 md:py-0">

        {/* Background Image */}
        <img
          src={Image1}
          alt="Gajveena Base"
          className="absolute inset-0 h-full w-auto object-contain opacity-55 z-0 mx-auto scale-[1.5] hidden md:block"
          style={{
            transform: isMobile ? "none" : `translateY(-${parallaxY}px)`,
            right: 0,
            left: "auto",
          }}
        />

        {/* Text */}
        <div
          className="relative w-full max-w-4xl px-4 md:px-0 md:ml-[-20%] text-white"
          ref={leftTextRef}
        >
          <motion.h1
            className="font-cinzel text-3xl md:text-6xl text-yellowTint pb-4 md:pb-6 text-center md:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            The Story
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: leftTextInView ? 1 : 0,
              y: leftTextInView ? 0 : 30,
            }}
            transition={{ duration: 1, delay: 0.3 }}
            className="font-body w-full md:w-[85%] text-justify md:text-left text-base md:text-lg"
          >
            Conceived in 2018, the Gajveena is a groundbreaking musical invention
            by Debjit Mahalanobis, born out of a deep desire to bridge the sonic
            worlds of Western Classical and Indian Classical music. Merging the
            Double Bass with the Rudraveena, the Gajveena responds to a long-missing
            voice in Indian classical music. Standing nearly 7 feet tall and
            equipped with nine strings, it is designed to be played both plucked
            and bowed, offering extraordinary tonal depth and resonance. It took
            about 18 months to build the first successful prototype with two
            families of master instrument makers.
          </motion.p>
        </div>
      </div>

      {/* ---------- SECOND BLOCK ---------- */}
      <div className="story-overlap flex flex-col md:flex-row items-center relative">

        {/* Image */}
        <div className="md:w-1/2 flex justify-center relative z-10 mb-6 md:mb-0">
          <img
            src={Image2}
            alt="Gajveena Secondary"
            className="w-[90%] md:w-[75%] h-auto object-cover scale-105 mt-[-100px]"
            style={{
              transform: isMobile ? "none" : `translateY(${parallaxY * 0.3}px)`,
            }}
          />
        </div>

        {/* Text */}
        <div
          className="md:w-1/2 text-white text-base md:text-lg px-4 md:px-0"
          ref={rightTextRef}
        >
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: rightTextInView ? 1 : 0,
              y: rightTextInView ? 0 : 30,
            }}
            transition={{ duration: 1, delay: 0.3 }}
            className="md:pr-[15%] md:ml-[5%] md:mt-[-5%] text-justify md:text-left"
          >
            Dedicated to his teacher, Ustad Bahauddin Dagar, the Gajveena is more
            than an instrument. It is a living conversation between centuries-old
            traditions and modern musical inquiry, honoring the spiritual depth
            of Dhrupad while embracing the harmonic richness of Western music.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default TheStory;
