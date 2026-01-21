import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const ImageLinkSection = ({
  title = "Origins",
  leftImage = "/assets/o1.png",
  rightImage = "/assets/o2.png",
  leftName = "Rudra Veena",
  rightName = "Double Bass",
}) => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="px-[10%] py-8 overflow-hidden text-center"
    >
      {/* Heading */}
      <h2
        className={`font-cinzel text-4xl font-bold md:text-5xl text-[#f5e6c8] mb-12
          transition-all duration-700 ease-out
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
        `}
      >
        {title}
      </h2>

      {/* Images */}
      <div
        className={`grid grid-cols-1 md:grid-cols-2 gap-10
          transition-all duration-1000 ease-out delay-200
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
        `}
      >
        {/* Left Image */}
        <div
          /*onClick={() => navigate("/placeholder-left")}*/
          className="cursor-pointer group flex flex-col items-center"
        >
          <div className="overflow-hidden rounded-2xl">
            <img
              src={leftImage}
              alt={leftName}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Name */}
          <p className="mt-4 font-cinzel text-lg text-[#f5e6c8] tracking-wide">
            {leftName}
          </p>
        </div>

        {/* Right Image */}
        <div
          /*onClick={() => navigate("/placeholder-right")}*/
          className="cursor-pointer group flex flex-col items-center"
        >
          <div className="overflow-hidden rounded-2xl">
            <img
              src={rightImage}
              alt={rightName}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Name */}
          <p className="mt-4 font-cinzel text-lg text-[#f5e6c8] tracking-wide">
            {rightName}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ImageLinkSection;
