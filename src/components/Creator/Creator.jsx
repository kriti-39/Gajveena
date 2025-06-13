import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";  // Import framer-motion for scroll-driven animations

const creatorData = {
  description: "Debjit Mahalanobis is a composer, double bassist, and instrument-maker who bridges Indian classical music with Western traditions through innovation and deep-rooted practice. Trained in Western classical double bass for over a decade and a disciple of Ustad Bahauddin Dagar of the Dagarvani Dhrupad lineage, Debjit has long explored the deep, meditative sound world of low frequency instruments. His quest to find a voice that could fully express the nuances of Indian classical music led him to invent the Gajveena, a hybrid string instrument inspired by the double bass and rudra veena. With its ability to support both bowing and plucking techniques, and designed to accommodate Indian ornamentations like gamak and meend, the Gajveena offers a new bass voice for Indian music. It merges the tonal warmth and harmonic depth of Western instruments with the microtonal flexibility and spiritual essence of the veena tradition offering a fresh yet grounded musical language for contemporary expression. He has performed with renowned orchestras across India and abroad, and continues to lead intercultural collaborations. Through the Gajveena, Debjit invites listeners into a sonic world that is both ancient and boldly new. ",
  image: 'src/assets/DM.JPG',  // Placeholder image for the creator
};

const Creator = () => {
  return (
    <section className="creator-section py-2 text-offwhite">
      <div className="container mx-auto px-6">
        {/* Creator Item */}
        <CreatorItem data={creatorData} />
      </div>
    </section>
  );
};

// Creator Item Component
const CreatorItem = ({ data }) => {
  const [hasAnimated, setHasAnimated] = useState(false); // Track if animation has been triggered
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once when the item comes into view
    threshold: 0.3,  // Start the animation when the item is 30% visible
  });

  // Update state to mark animation as triggered
  if (inView && !hasAnimated) {
    setHasAnimated(true);
  }

  return (
    <div className={`creator-item flex flex-col md:flex-row items-center ${hasAnimated ? 'visible' : ''}`} ref={ref}>
      {/* Image */}
      <motion.div
        className="creator-image w-full md:w-1/2 flex justify-center items-center"
        initial={{ opacity: 0, y: 50 }}  // Start below the normal position
        animate={{ opacity: hasAnimated ? 1 : 0, y: hasAnimated ? 0 : 50 }}  // Move to the normal position only once
        transition={{ delay: 0.2, duration: 1 }}
      >
        <img src={data.image} alt={data.title} className="w-[28rem] h-auto rounded-lg shadow-lg" />
      </motion.div>

      {/* Text */}
      <motion.div
        className="creator-text w-full md:w-1/2 mt-6 md:mt-0 text-left"
        initial={{ opacity: 0, y: 50 }}  // Start below the normal position
        animate={{ opacity: hasAnimated ? 1 : 0, y: hasAnimated ? 0 : 50 }}  // Move to the normal position only once
        transition={{ delay: 0.4, duration: 1 }}
      >
        <p className="text-white text-lg w-[78%]">{data.description}</p>
      </motion.div>
    </div>
  );
};

export default Creator;
