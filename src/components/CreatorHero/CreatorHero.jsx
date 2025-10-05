import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Creator = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section
      ref={ref}
      className="relative text-offwhite py-20 sm:py-28 md:py-40 px-4 sm:px-6 flex flex-col items-center justify-center text-center"
    >
      {/* Heading */}
      <motion.h1
        className="font-cinzel text-3xl sm:text-4xl md:text-6xl text-yellowTint mb-4 mt-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        Debjit Mahalanobis
      </motion.h1>

      {/* Subheading */}
      <motion.h2
        className="text-base sm:text-lg md:text-xl text-white mb-8 px-2 leading-relaxed"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Composer | Performer | Improviser | Music Educator | Sound Explorer | Research-based Artist
      </motion.h2>

      {/* Paragraph */}
      <motion.p
        className="text-white text-base sm:text-lg md:text-xl max-w-4xl text-center mb-0 px-4 sm:px-0 leading-relaxed tracking-wide"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        Physics teacher turned musician, Debjit Mahalanobis is a unique confluence of Western classical music and the influences of Indian classical music. Debjit hails from the family of scientist and statistician, Father of Indian Statistics, P.C. Mahalanobis, on his paternal side, and musician Pt. Ramshankar Bhattacharya, founder of the Bishnupur Dhrupad Dhamar gharana, on his mother’s side.
      </motion.p>
    </section>
  );
};

export default Creator;
