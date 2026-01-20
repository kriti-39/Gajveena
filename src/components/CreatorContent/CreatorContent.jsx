import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

// ✅ Import the creator image
import DMImg from "/assets/DM.JPG";

const creatorData = {
  description:
    "Debjit’s musical philosophy is shaped by curiosity and experimentation. His technical research as a performer-practitioner channels his heritage and musical voice into expressions that reflect contemporary realities. Influenced by his Indian roots, early Western classical training, experiences in India’s music scene, and studies in Dhrupad, his compositions explore the interconnectedness of diverse forms through the double bass and his invention, the Gajveena.Debjit’s musical journey started two decades ago with the double bass, where he performed with orchestras like the Bombay Chamber and South Asian Symphony Orchestras. Exploring the double bass beyond Western Classical and Jazz, led to collaborations across Indian folk genres, Bengali pop, Rabindra Sangeet, semi-classical, theater and electro-acoustic music, allowing him to integrate the double bass into diverse cultural contexts. Debjit has since immersed himself in Indian classical and folk genres, studying Dhrupad under Ustad Bahauddin Dagar. The minimalist frequencies and improvisational style of Dhrupad on the rudraveena inspired him to blend Indian musical grammar with Western techniques. Collaborations with Sufi, Baul, and classical musicians expanded his approach, fostering intercultural experimentation and establishing the double bass within these genres. His solo double bass composition Katha, received recognition from Rolling Stone India for its innovative integration of Kathak rhythms. Experimentation and expansion of his musical vocabulary led to creating and recently patenting the Gajveena, the first upright veena engineered to seamlessly merge the expressive depth of the double bass with the microtonal qualities of the veena. ",
  image: DMImg, // ✅ Use the imported image
};

const CreatorContent = () => {
  return (
    <section className="creator-section py-8 text-offwhite">
      <div className="container mx-auto px-6 sm:px-6 md:px-8">
        <CreatorItem data={creatorData} />
      </div>
    </section>
  );
};

const CreatorItem = ({ data }) => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  if (inView && !hasAnimated) {
    setHasAnimated(true);
  }

  return (
    <div
  ref={ref}
  className={`creator-item flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-0 ${
    hasAnimated ? "visible" : ""
  }`}
>
  {/* Image */}
  <motion.div
    className="creator-image w-full md:w-1/2 flex justify-center px-2"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: hasAnimated ? 1 : 0, y: hasAnimated ? 0 : 50 }}
    transition={{ delay: 0.2, duration: 1 }}
  >
    <img
      src={data.image}
      alt="Debjit Mahalanobis"
      className="w-full max-w-[26rem] md:max-w-[28rem] h-auto rounded-lg shadow-lg object-cover transition-transform duration-300 hover:scale-105"
    />
  </motion.div>

  {/* Text */}
  <motion.div
    className=" font-body creator-text w-full md:w-[60%] md:pr-[8%] text-justify md:text-left px-2"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: hasAnimated ? 1 : 0, y: hasAnimated ? 0 : 50 }}
    transition={{ delay: 0.4, duration: 1 }}
  >
    <p className=" font-body text-white text-base sm:text-m leading-relaxed tracking-wide">
      {data.description}
    </p>
  </motion.div>
</div>

  );
};

export default CreatorContent;
