import React from 'react';
import { motion } from 'framer-motion'; // Importing framer-motion for animations
import { useInView } from 'react-intersection-observer'; // Import useInView to trigger animations when the element comes into view

const Creator = () => {
  // Set up useInView for triggering animations when the section comes into view
  const { ref, inView } = useInView({
    triggerOnce: true,  // Trigger animation only once
    threshold: 0.3,     // Trigger animation when 30% of the element is visible
  });

  return (
    <section
      ref={ref}
      className="relative text-offwhite py-40 px-6 flex flex-col items-center justify-center"
    >
      {/* Heading Animation */}
      <motion.h1
        className="font-cinzel text-4xl md:text-6xl text-yellowTint mb-4 mt-4"
        initial={{ opacity: 0, y: 30 }}  // Initial state: off-screen and transparent
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }} // Animate to normal position when in view
        transition={{ duration: 1, delay: 0.2 }}  // Duration and delay for the animation
      >
        Debjit Mahalanobis
      </motion.h1>

      {/* Subheading Animation */}
      <motion.h2
        className="text-xl md:text-xl text-white mb-8"
        initial={{ opacity: 0, y: 30 }}  // Initial state: off-screen and transparent
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }} // Animate to normal position when in view
        transition={{ duration: 1, delay: 0.5 }}  // Duration and delay for the animation
      >
        Composer | Performer | Improviser | Music Educator | Sound Explorer | Research-based Artist
      </motion.h2>

      {/* Paragraph Animation */}
      <motion.p
        className="text-white text-lg md:text-xl max-w-4xl text-center mb-[-80px]"
        initial={{ opacity: 0, y: 30 }}  // Initial state: off-screen and transparent
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }} // Animate to normal position when in view
        transition={{ duration: 1, delay: 0.7 }}  // Duration and delay for the animation
      >
        Physics teacher turned musician, Debjit Mahalanobis is a unique confluence of western classical music and the influences of Indian classical music. Debjit hails from the family of scientist and statistician, Father of Indian Statistics, P.C. Mahalanobis, on his paternal side and musician Pt. Ramshankar Bhattacharya, founder of the Bishnupur Dhrupad Dhamar gharana, on his mother’s side.
      </motion.p>
    </section>
  );
};

export default Creator;
