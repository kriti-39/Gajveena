import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";  // Import framer-motion for scroll-driven animations

// ✅ Import all images
import avImg from "/assets/av.png";
import rvImg from "/assets/rv.png";
import vvImg from "/assets/vv.png";
import svImg from "/assets/sv.png";
import gajveenaImg from "/assets/maingajveena.jpg";
import psImg from "/assets/ps.png";
import sitarImg from "/assets/sitar.png"


const evolutionData = [
  {
    title: 'Ancient Veena',
    description: 'The earliest veena, used during the Vedic period, was a simple, single-stringed instrument with a small resonator, often a gourd. Its physical design was minimalistic, with a straightforward structure that lacked frets or complex tuning mechanisms. The sound produced was soft, subtle, and primarily used for accompanying chants in spiritual rituals. Due to its limited string and basic structure, the tonal range was constrained, making it suitable for simpler musical expressions, primarily in spiritual and ceremonial contexts.',
    image: avImg,
  },
  {
    title: 'Rudra Veena',
    description: 'During the post-Vedic era, the rudra veena underwent significant physical changes, evolving into a much larger instrument with two resonating gourds and multiple strings. The fretted neck provided a more structured tuning system, and the larger gourds acted as resonators, amplifying the sound. This allowed the veena to produce a deeper, richer, and more resonant tone. With these modifications, the rudra veena became central to Dhrupad music in North India, enabling greater tonal depth, louder projection, and more nuanced melodic expression. ',
    image: rvImg,
  },
  {
    title: 'Vichitra Veena',
    description: 'The vichitra veena featured a fretless neck, which allowed the musician to slide between notes continuously, much like a slide guitar or sitar. This design enabled the creation of a smooth, flowing tone, ideal for the expressive improvisations typical of solo performances. The absence of frets allowed for more flexibility in tuning, enabling the veena to produce microtones (smaller intervals between notes), which are crucial in the performance of complex ragas. ',
    image: vvImg,
  },
  {
    title: 'Saraswati Veena',
    description: "The Saraswati veena, which emerged as the dominant veena in Carnatic music, featured a fretted neck, a large resonating body, and seven strings (four main and three sympathetic strings). Its design allowed for a balanced sound, with a mix of deep bass tones and bright treble sounds. The larger gourds helped to amplify the sound, ensuring that the veena was loud enough to be heard in ensemble performances. The frets provided more precise tuning and intonation, which was essential for performing intricate ragas with clarity. This made the Saraswati veena particularly suited for Carnatic compositions, where precision and control over pitch and tone were necessary.",
    image: svImg,
  },
  {
    title: 'Persian Setar',
    description: 'Indian classical music (ICM) has evolved through centuries of cultural exchange, particularly between Persian, Afghan, and Indian traditions. Early instruments like the Persian setar introduced sympathetic strings but lacked the microtonal flexibility (shruti) required for Indian ragas. As musical needs evolved, instruments were redesigned to accommodate greater tonal depth and expressive nuance.',
    image : psImg, 
  },
  {
    title: 'Sitar',
    description: 'The global recognition of ICM in the 20th century, through artists such as Ravi Shankar and Ali Akbar Khan, reflects this long history of adaptation and innovation. The sitar emerged by integrating sympathetic drone strings (taraf), rhythmic drone strings (chikari), and resonating gourds (tumba), allowing for sustained resonance and melodic complexity',
    image : sitarImg,
  },
  {
    title: 'Gajveena',
    description: 'The Gajveena is a pioneering hybrid string instrument, born from the confluence of the North Indian Rudra Veena and the Western double bass, meticulously engineered to occupy a unique sonic niche in Indian Classical Music (ICM). Traditional ICM instruments fall neatly into plucked (sitar, tanpura) or bowed (esraj, dilruba) categories, leaving the bass register, so central to Western harmony largely unexplored; the Gajveena remedies this by marrying both playing techniques, allowing performers to alternate seamlessly between deep, resonant arco passages and percussive, drone rich pizzicato. Its four main strings, tuned to mirror the double bass’s low-end range, pass over a bespoke javari bridge that imparts the characteristic veena buzz and harmonic overtones, while an array of chikari drone strings sustains the essential shruti framework of Dhrupad. The instrument’s hollow neck and detachable tumba resonator amplify its dynamic range, from whisper-soft alap explorations to full bodied ensemble roles, enabling microtonal meend, gamak ornamentations, and extended sustain rarely achievable on conventional bass or veena alone. More than a technical innovation, the Gajveena symbolizes a philosophical bridge honoring centuries-old spiritual traditions of Nāda Brahma while inviting global musical dialogues, and charting a new course for both solo recital and cross-genre collaboration.',
    image: gajveenaImg,
  }
];

const Evolution = () => {
  return (
    <section className="evolution-section hidden md:block pt-24 md:pt-10 pb-10 text-offwhite">
      <div className="container mx-auto px-6">
        {/* Evolution Items */}
        <div className="flex flex-col space-y-20">
          {evolutionData.map((item, index) => (
            <EvolutionItem key={index} index={index} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Evolution Item Component
const EvolutionItem = ({ index, data }) => {
  const { ref, inView } = useInView({
  triggerOnce: true, 
  threshold: 0.2,
});


  return (
    <div
  ref={ref}
  className={`evolution-item flex flex-col md:flex-row items-center gap-6 ${
    inView ? "visible" : ""
  }`}
>

  {index % 2 === 0 ? (
    <>
      {/* IMAGE - LEFT */}
      <motion.div
        className=" font-body text-sm md:text-base evolution-image w-full md:w-1/2 flex justify-center items-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
        transition={{ delay: 0.2, duration: 1 }}
      >
        <img
          src={data.image}
          alt={data.title}
          className="w-full max-w-[20rem] md:max-w-[30rem] h-auto rounded-lg shadow-lg"
        />
      </motion.div>

      {/* TEXT - LEFT */}
      <motion.div
        className="font-body text-sm md:text-base evolution-text w-full md:w-1/2 mt-6 md:mt-0 text-left"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        <h3 className="text-2xl md:text-5xl font-cinzel text-yellowTint mb-4">
          {data.title}
        </h3>
        <p className=" font-montserrat text-white text-base md:text-lg w-full md:w-[78%] text-justify md:text-left">
          {data.description}
        </p>
      </motion.div>
    </>
  ) : (
    <>
      {/* TEXT - RIGHT */}
      <motion.div
        className="evolution-text w-full md:w-1/2 mt-6 md:mt-0 text-right"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
        transition={{ delay: 0.2, duration: 1 }}
      >
        <h3 className="text-4xl md:text-5xl font-cinzel text-yellowTint mb-4">
          {data.title}
        </h3>
        <p className="font-montserrat text-white text-base md:text-lg w-full md:w-[78%] text-justify md:text-right md:ml-auto">
          {data.description}
        </p>
      </motion.div>

      {/* IMAGE - RIGHT */}
      <motion.div
        className="evolution-image w-full md:w-1/2 flex justify-center items-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        <img
          src={data.image}
          alt={data.title}
          className="w-full max-w-[20rem] md:max-w-[30rem] h-auto rounded-lg shadow-lg"
        />
      </motion.div>
    </>
  )}
</div>

  );
};

export default Evolution;
