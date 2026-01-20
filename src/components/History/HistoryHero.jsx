import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const HistoryHero = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section
      ref={ref}
      className="relative text-offwhite mb-[-34px] md:pt-10 md:mb-4 px-4 sm:px-6 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Heading */}
      <motion.h1
        className="font-cinzel font-bold px-6 text-4xl md:text-6xl text-yellowTint text-center mb-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        Brief History of Veena
      </motion.h1>

      {/* Subheading */}
      <motion.h2
        className="text-base md:text-lg text-white text-center mb-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        A Journey Through Time &amp; Sound
      </motion.h2>

      {/* Paragraph */}
      <motion.p
  className="text-white px-4 text-base md:text-lg max-w-4xl text-justify md:text-center mb-6"
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
  transition={{ duration: 1, delay: 0.7 }}
>
  The veena has evolved over centuries, from its early origins in Vedic
  traditions to the modern-day instrument. With each passing era, its
  design, sound, and role in music have undergone significant changes,
  making it one of the most iconic instruments in Indian classical music.
</motion.p>

    </section>
  );
};

export default HistoryHero;
