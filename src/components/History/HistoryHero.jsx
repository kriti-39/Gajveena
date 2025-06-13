import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'; // Importing framer-motion for animations
import { useInView } from 'react-intersection-observer'; // Import useInView to trigger animations when the element comes into view

const HistoryHero = () => {
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
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }} // Animates to normal position when in view
        transition={{ duration: 1, delay: 0.2 }}  // Duration and delay for the animation
      >
        Brief History of Veena
      </motion.h1>

      {/* Subheading Animation */}
      <motion.h2
        className="text-xl md:text-2xl text-white mb-8"
        initial={{ opacity: 0, y: 30 }}  // Initial state: off-screen and transparent
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }} // Animates to normal position when in view
        transition={{ duration: 1, delay: 0.5 }}  // Duration and delay for the animation
      >
        A Journey Through Time and Sound
      </motion.h2>

      {/* Paragraph Animation */}
      <motion.p
        className="text-white text-lg md:text-xl max-w-4xl text-center mb-[-80px]"
        initial={{ opacity: 0, y: 30 }}  // Initial state: off-screen and transparent
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }} // Animates to normal position when in view
        transition={{ duration: 1, delay: 0.7 }}  // Duration and delay for the animation
      >
        The veena has evolved over centuries, from its early origins in Vedic traditions to the modern-day instrument. With each passing era, its design, sound, and role in music have undergone significant changes, making it one of the most iconic instruments in Indian classical music.
      </motion.p>
    </section>
  );
};

export default HistoryHero;
