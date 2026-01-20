import { useEffect, useRef, useState } from "react";
import "./TheStorySection.css";

const TheStorySection = ({
  title = "The Story",
  text = "Conceived in 2018, the Gajveena is a musical invention by Debjit Mahalanobis merging the bass register and bowing capability of the Double Bass with the grammar and timbre of the Rudraveena, the lowest pitched Indian classical instrument. Standing nearly 7 feet tall and equipped with nine strings, it is designed to be both plucked and bowed, offering extraordinary tonal depth and resonance. It took about 18 months to build the first successful prototype with two families of instrument makers from Bengal before being christened as the Gajveena by Ustad Bahauddiin Dagar. Gajveena makes bass-range polyphony feel effortless. A bowed line rides over tonic–fifth drones or shifting raga centers while meends up to an octave stays focused and in tune. Radiused frets support Western intonation yet welcomes microtonality. The articulation palette can move mid-phrase from arco legato to nail-pluck to slap without losing pulse, with different drone strings adding a lucid upper sheen. Dual sound projection invites the ability to be extremely nuanced. Its dynamic range from whisper to orchestral forte and a frequency range of 40-800hz lets Gajveena speak as a solo storyteller or lock foundation in ensemble and electro-acoustic settings.",
  image = "/assets/gajveenawithoutbg.png",
}) => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  const [showText, setShowText] = useState(false);
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;

    // TEXT VISIBILITY
    if (isMobile) {
      // Show heading + paragraph immediately on mobile
      setShowText(true);
    } else {
      // Desktop: show text on scroll
      const textObserver = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setShowText(true);
            textObserver.disconnect();
          }
        },
        { threshold: 0.3 }
      );

      if (sectionRef.current) textObserver.observe(sectionRef.current);
    }

    // IMAGE VISIBILITY (always on scroll)
    const imageObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowImage(true);
          imageObserver.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (imageRef.current) imageObserver.observe(imageRef.current);

    return () => {
      imageObserver.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} className="story-wrapper">
      <div className="story-grid">

        {/* Heading */}
        <h2 className={`story-heading ${showText ? "show" : ""}`}>
          {title}
        </h2>

        {/* Image */}
        <div
          ref={imageRef}
          className={`story-image ${showImage ? "show" : ""}`}
        >
          <img src={image} alt="Gajveena" />
        </div>

        {/* Paragraph */}
        <div className={`story-text ${showText ? "show" : ""}`}>
          <p>{text}</p>
        </div>

      </div>
    </section>
  );
};

export default TheStorySection;
