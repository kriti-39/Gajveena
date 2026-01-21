import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Creator = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const baseTransition = {
    duration: 0.9,
    ease: [0.22, 1, 0.36, 1], // smooth, premium easing
  };

  return (
    <section
      ref={ref}
      className="relative text-offwhite px-4 sm:px-6 py-2 md:py-20 flex flex-col items-center"
    >
      {/* ===== Heading ===== */}
      <motion.h1
        className="font-cinzel font-bold text-3xl sm:text-4xl md:text-6xl text-yellowTint mb-4 text-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 10 }}
        transition={{ ...baseTransition, delay: 0.05 }}
      >
        Creator
      </motion.h1>

      {/* ===== Subheading ===== */}
      <motion.h2
        className="font-body font-normal text-base sm:text-lg text-white mb-8 text-center max-w-4xl leading-relaxed"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 10 }}
        transition={{ ...baseTransition, delay: 0.12 }}
      >
        Composer | Performer | Improviser | Music Educator | Sound Explorer |
        Research-based Artist
      </motion.h2>

      {/* ===== Image + Text Row ===== */}
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-start">
        
        {/* Image */}
        <motion.div
          className="w-full flex justify-center md:justify-end"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 10 }}
          transition={{ ...baseTransition, delay: 0.2 }}
        >
          <img
            src="/assets/dm2.jpg"
            alt="Debjit Mahalanobis"
            className="w-full px-4 max-w-md max-h-[420px] rounded-2xl object-cover"
          />
        </motion.div>

        {/* Text */}
        <motion.p
          className="
            font-body font-normal text-white
            text-sm md:text-base 
            leading-relaxed
            text-justify md:text-left
            max-w-lg 
            mt-0 px-4
          "
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 10 }}
          transition={{ ...baseTransition, delay: 0.28 }}
        >
          Physics teacher turned musician, Debjit Mahalanobis is a unique
          confluence of Western classical music and the influences of Indian
          classical music. Distantly related to scientist and statistician,
          P.C. Mahalanobis, on his paternal side, and musician Pt. Ramshankar
          Bhattacharya, founder of the Bishnupur Dhrupad Dhamar gharana, on his
          mother’s side, Debjit has been mostly performing western classical on
          the double bass for the last two decades while studying Indian music
          and its forms, from folk to classical. Dedicated to his teacher, Ustad
          Bahauddin Dagar, the Gajveena is more than an instrument. With the help
          of traditional craftsmen Ranjit Roy and Dipen Das from violin & veena
          making backgrounds it took over 18 months for this journey between
          centuries-old traditions and modern musical inquiry to become a
          reality. Debjit’s musical philosophy is shaped by curiosity and
          experimentation.
        </motion.p>
      </div>
    </section>
  );
};

export default Creator;
