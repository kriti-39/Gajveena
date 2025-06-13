import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CraftingOfGajveena = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section
      ref={ref}
      className="relative text-offwhite pt-20 px-6 flex flex-col items-center justify-center"
    >
      {/* Heading */}
      <motion.h2
        className="font-cinzel text-4xl md:text-6xl text-yellowTint text-center mb-4 mt-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
        transition={{ duration: 1, delay: 0.1 }}
      >
        Crafting of Gajveena
      </motion.h2>

      {/* Paragraph */}
      <motion.p
        className="text-white text-lg md:text-xl max-w-4xl text-center mb-16 tracking-wide"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Discover how traditional elements come together to form this timeless musical instrument. A blend of craftsmanship and culture, the veena is built with care and precision.
      </motion.p>

      {/* Two-column grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 max-w-6xl w-full">
        {/* Column 1 */}
        <motion.div
          className="flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <img
            src="src/assets/rv.png"
            alt="Rudra Veena"
            className="w-[32rem] h-auto rounded-lg shadow-md mb-4 transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
          <p className="text-xl text-white-300 max-w-xs">Rudra Veena</p>
        </motion.div>

        {/* Column 2 */}
        <motion.div
          className="flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <img
            src="src/assets/db.png"
            alt="Double Base"
            className="w-[32rem] h-auto rounded-lg shadow-md mb-4 transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
          <p className="text-xl text-white-300 max-w-xs">Double Base</p>
        </motion.div>
      </div>

      {/* Final Combined Image Row */}
      <motion.div
        className="w-full flex justify-between items-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
        transition={{ duration: 1, delay: 1.1 }}
      >
        {/* Left design image - flush left, hidden on mobile */}
        <img
          src="src/assets/side.png"
          alt="Left design"
          className="hidden md:block w-[12rem] h-auto object-contain opacity-50 transition-transform duration-300 ease-in-out transform hover:scale-105"
        />

        {/* Center combined veena image */}
        <img
          src="src/assets/gajveena.JPG"
          alt="Gajveena"
          className="w-[28rem] h-auto rounded-lg shadow-lg object-contain transition-transform duration-300 ease-in-out transform hover:scale-105"
        />
        {/* Right design image - flush right, hidden on mobile */}
        <img
          src="src/assets/side2.png"
          alt="Right Design"
          className="hidden md:block w-[12rem] h-auto object-contain opacity-50 transition-transform duration-300 ease-in-out transform hover:scale-105"
        />
      </motion.div>
    </section>
  );
};

export default CraftingOfGajveena;
