import React from "react";

const TextVideoSection = () => {
  return (
    <section className="w-full py-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* MOBILE HEADING */}
        <h2 className="block md:hidden text-3xl font-cinzel text-yellowTint mb-6">
          The Making of Gajveena
        </h2>

        <div className="flex flex-col md:grid md:grid-cols-2 md:gap-12 items-center">
          {/* TEXT (LEFT ON DESKTOP) */}
          <div className="order-3 md:order-1">
            {/* DESKTOP HEADING */}
            <h2 className="hidden md:block text-4xl font-cinzel text-yellowTint mb-6">
              The Making of Gajveena
            </h2>

            <p className="font-body text-white text-lg leading-relaxed">
              This is where your main paragraph goes. You can explain the story
              behind the music, the creative process, or the philosophy of the
              instrument. This text will move below the video on mobile.
            </p>
          </div>

          {/* YOUTUBE VIDEO (RIGHT ON DESKTOP) */}
          <div className="order-2 md:order-2 w-full">
            <div className="relative w-full aspect-video overflow-hidden rounded-xl">
              <iframe
                src="https://www.youtube.com/embed/VIDEO_ID_HERE"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              />
            </div>

            {/* OPTIONAL NOTE */}
            <p className="text-sm text-white/60 mt-2">
              (Replace VIDEO_ID_HERE with your YouTube video ID)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextVideoSection;
