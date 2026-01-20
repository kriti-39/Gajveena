// src/pages/CreatorPage.jsx

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Navbar from "../components/Navbar/Navbar.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Creator from "../components/CreatorContent/CreatorContent.jsx";

const CreatorPage = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <>
      <Navbar />

      {/* Offset for fixed navbar */}
      <div className="pt-20" />

      <section
        ref={ref}
        className="pt-4 md:pt-4  flex flex-col items-center text-center px-4 sm:px-6"
      >
        {/* ===== Heading ===== */}
        <motion.h1
          className="font-cinzel font-bold text-3xl sm:text-4xl md:text-6xl text-yellowTint mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Debjit Mahalanobis
        </motion.h1>

        {/* ===== Subheading ===== */}
        <motion.h2
          className="font-body text-base sm:text-lg text-white mb-4 md:mb-10 max-w-4xl leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Composer | Performer | Improviser | Music Educator | Sound Explorer |
          Research-based Artist
        </motion.h2>

        {/* ===== Intro Paragraph ===== */}
        {/* ===== Intro Paragraph ===== */}
<motion.p
  className="font-body text-white md:text-center text-justify text-base px-4 sm:text-lg leading-relaxed text-center max-w-6xl mb-0"
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
  transition={{ duration: 1, delay: 0.6 }}
>
  Physics teacher turned musician, Debjit Mahalanobis is a unique
  confluence of Western classical music and the influences of Indian
  classical music. Distantly related to scientist and statistician
  P.C. Mahalanobis on his paternal side, and musician Pt. Ramshankar
  Bhattacharya on his mother’s side, Debjit has been mostly performing
  Western classical music on the double bass for the last two decades
  while studying Indian music and its forms, from folk to classical.
  Dedicated to his teacher, Ustad Bahauddin Dagar, the Gajveena is more
  than an instrument. With the help of traditional craftsmen Ranjit Roy
  and Dipen Das, it took over 18 months for this journey between
  centuries-old traditions and modern musical inquiry to become a
  reality. Debjit’s musical philosophy is shaped by curiosity and
  experimentation.
</motion.p>

      </section>

      {/* ===== Detailed Creator Section ===== */}
      <Creator />

      {/* ===== External Link ===== */}
      <div className="text-center pb-8">
        <a
          href="https://debjitmahalanobis.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg text-yellowTint font-bold hover:text-white transition-colors duration-300"
        >
          Explore my other work
        </a>
      </div>

      <Footer />
    </>
  );
};

export default CreatorPage;
