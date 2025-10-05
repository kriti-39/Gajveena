import React, { useEffect, useState } from "react";
import Image1 from "../../assets/thumba.png";
import Image2 from "../../assets/v9.1.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./TheStory.css";


const TheStory = () => {
  const [parallaxY, setParallaxY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY < 400) {
        setParallaxY(scrollY * 0.1);
      } else {
        setParallaxY(40);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { ref: leftTextRef, inView: leftTextInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const { ref: rightTextRef, inView: rightTextInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section className="the-story-section flex flex-col overflow-x-hidden overflow-y-hidden">
      {/* First Block: Full-width Image with text overlaid */}
      <div className="relative w-full min-h-[100vh] flex items-center justify-center overflow-hidden">
        {/* Image with Parallax in Background */}
        <img
          src={Image1}
          alt="Gajveena Base"
          className="absolute inset-0 w-auto h-full object-contain opacity-55 z-0 transition-all duration-500 mx-auto mt-4"
          style={{ transform: `translateY(-${parallaxY}px)`, right: '0', left: 'auto' }}
        />

        {/* Text over the image */}
        <div
          className="relative  w-full max-w-4xl pt-0 text-white ml-[-20%]"
          ref={leftTextRef}
        >
          <motion.h1
            className="font-cinzel text-4xl md:text-6xl text-yellowTint pb-6 text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            The Story
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: leftTextInView ? 1 : 0,
              y: leftTextInView ? 0 : 30,
            }}
            transition={{ duration: 1, delay: 0.5 }}
            className="font-body w-[85%] text-left text-lg md:text-lg"
          >
            Conceived in 2018, the Gajveena is a groundbreaking musical
            invention by Debjit Mahalanobis, born out of a deep desire to bridge
            the sonic worlds of Western Classical and Indian Classical music.
            Merging the Double Bass, the largest and lowest-pitched instrument
            of the violin family with the Rudraveena, the ancient bass
            instrument of the Dhrupad tradition, the Gajveena is an ambitious
            response to a long-missing voice in Indian classical music: that of
            a bowed bass instrument rooted in both melodic and microtonal
            expression. Standing nearly 7 feet tall and equipped with nine
            strings, including sympathetic and drone strings, the Gajveena is
            designed to be played both plucked and bowed, offering an
            extraordinary range of tonal depth, resonance, and expressive
            nuance. Its unique javari bridge produces a characteristic buzzing
            overtone, while the detachable gourd (tumba) and a hollow wooden
            body echo the architectural elements of traditional Indian
            instruments. It took about 18 months to build the 1st successful prototype with two family of instrument makers - Ranjit Roy of Roy musical from a violin making liniage and Dipen Das of D.K. Das & Sons , Rudra Veena maker.
          </motion.p>
        </div>
      </div>

      {/* Second Block: Image on left, Text on right */}
      <div className="flex flex-col md:flex-row items-center relative">
        <div className="md:w-1/2 mt-[-8%] flex justify-center relative z-20">
          <img
            src={Image2}
            alt="Gajveena Secondary"
            className="w-[75%] h-auto object-cover transition-all duration-500"
            style={{ transform: `translateY(${parallaxY * 0.3}px)` }}
          />
        </div>
        <div
          className="md:w-1/2 text-lg text-white text-left z-10 pr-4"
          ref={rightTextRef}
        >
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: rightTextInView ? 1 : 0,
              y: rightTextInView ? 0 : 30,
            }}
            transition={{ duration: 1, delay: 0.4 }}
            className="pr-[15%] ml-[5%] mt-[-5%]"
          >
            Dedicated to his teacher, Ustad Bahauddin Dagar, who also gave the
            instrument its name, the Gajveena is more than just an instrument,
            it is a living conversation between centuries old traditions and
            modern musical inquiry. It honors the spiritual gravitas of the
            Dhrupad form while embracing the harmonic richness of Western
            orchestration, offering a new sonic pathway for contemporary and
            classical musicians alike.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default TheStory;
