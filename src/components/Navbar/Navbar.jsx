import React, { useEffect, useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";

const NavMenu = [
  { id: 1, title: "Home", link: "/" },
  { id: 2, title: "Concept", link: "/concept" },
  { id: 3, title: "Creator", link: "/creator"},
];

const Navbar = () => {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  /* ============================
     MUSIC STATE
  ============================ */
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Load saved music preference
  useEffect(() => {
    const saved = localStorage.getItem("music-playing");
    if (saved === "true") setIsPlaying(true);
  }, []);

  // Play / Pause music
  useEffect(() => {
    if (!audioRef.current) return;

    audioRef.current.volume = 0.3;

    if (isPlaying) {
      audioRef.current.play().catch(() => {});
      localStorage.setItem("music-playing", "true");
    } else {
      audioRef.current.pause();
      localStorage.setItem("music-playing", "false");
    }
  }, [isPlaying]);

  /* ============================
     SCROLL SHOW / HIDE
  ============================ */
  useEffect(() => {
    const handleScroll = () => {
      if (mobileOpen) return;

      const currentScroll = window.scrollY;
      if (currentScroll > lastScrollY && currentScroll > 100) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      setLastScrollY(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, mobileOpen]);

  /* ============================
     LOCK SCROLL WHEN MENU OPEN
  ============================ */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      {/* ================= HEADER ================= */}
      <header
        className={`fixed top-0 w-full z-50 transition-transform duration-500 ${
          showNav ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* 🔹 MOBILE: darker + stronger blur | DESKTOP: lighter glass */}
        <div className="bg-black/10 backdrop-blur-lg md:bg-black/10 md:backdrop-blur-md py-4 px-6 md:px-8 text-white">
          <div className="flex items-center max-w-7xl mx-auto w-full">
            {/* LOGO — LEFT */}
            <Link to="/" className="flex items-center">
              <img
                src="/assets/debjit-log-45.png"
                alt="Logo"
                className="w-12 h-auto"
              />
            </Link>

            {/* AUDIO ELEMENT */}
            <audio
              ref={audioRef}
              src="/assets/bgmusic.mp4"
              loop
              preload="auto"
            />

            {/* RIGHT SIDE */}
            <div className="ml-auto flex items-center gap-4">
              {/* MUSIC TOGGLE — ALL SCREENS */}
              <button
                onClick={() => setIsPlaying((prev) => !prev)}
                aria-label="Toggle music"
                className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/10 transition"
              >
                {isPlaying ? (
                  <FaVolumeUp className="text-lg" />
                ) : (
                  <FaVolumeMute className="text-lg opacity-70" />
                )}
              </button>

              {/* DESKTOP MENU */}
              <nav className="hidden md:flex gap-6">
                {NavMenu.map((menu) => (
                  <Link
                    key={menu.id}
                    to={menu.link}
                    className="uppercase px-4 py-2 rounded-md transition duration-200 hover:shadow-[0px_0px_10px_4px_rgba(249,231,194,0.5)]"
                  >
                    {menu.title}
                  </Link>
                ))}
              </nav>

              {/* HAMBURGER — MOBILE ONLY (EXTREME RIGHT) */}
              <button
                className="md:hidden"
                onClick={() => setMobileOpen((prev) => !prev)}
                aria-label="Toggle menu"
              >
                <GiHamburgerMenu className="text-2xl" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ================= MOBILE MENU OVERLAY ================= */}
      {mobileOpen && (
        <nav className="md:hidden fixed top-[4.5rem] left-0 w-full h-[calc(35vh-4.5rem)] bg-black/95 backdrop-blur-lg z-40 flex flex-col items-center justify-center gap-8">
          {NavMenu.map((menu) => (
            <Link
              key={menu.id}
              to={menu.link}
              className="uppercase text-lg tracking-widest text-white"
              onClick={() => setMobileOpen(false)}
            >
              {menu.title}
            </Link>
          ))}
        </nav>
      )}
    </>
  );
};

export default Navbar;
