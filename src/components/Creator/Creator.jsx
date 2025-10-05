import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const creatorData = {
  description:
    "Debjit Mahalanobis is a composer, double bassist, and instrument-maker who bridges Indian classical music with Western traditions through innovation and deep-rooted practice. Trained in Western classical double bass for over a decade and a disciple of Ustad Bahauddin Dagar of the Dagarvani Dhrupad lineage, Debjit has long explored the deep, meditative sound world of low-frequency instruments. His quest to find a voice that could fully express the nuances of Indian classical music led him to invent the Gajveena, a hybrid string instrument inspired by the double bass and rudra veena. With its ability to support both bowing and plucking techniques, and designed to accommodate Indian ornamentations like gamak and meend, the Gajveena offers a new bass voice for Indian music. It merges the tonal warmth and harmonic depth of Western instruments with the microtonal flexibility and spiritual essence of the veena tradition, offering a fresh yet grounded musical language for contemporary expression. He has performed with renowned orchestras across India and abroad and continues to lead intercultural collaborations. Through the Gajveena, Debjit invites listeners into a sonic world that is both ancient and boldly new.",
  image: "src/assets/DM.JPG",
};

const Creator = () => {
  return (
    <section className="creator-section py-12 text-offwhite">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
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
      className={`creator-item flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 ${
        hasAnimated ? "visible" : ""
      }`}
    >
      {/* Image */}
      <motion.div
        className="creator-image w-full md:w-1/2 flex justify-center"
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
        className="creator-text w-full md:w-1/2 text-left"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: hasAnimated ? 1 : 0, y: hasAnimated ? 0 : 50 }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        <p className="text-white text-base sm:text-lg leading-relaxed tracking-wide">
          {data.description}
        </p>
      </motion.div>
    </div>
  );
};

export default Creator;
