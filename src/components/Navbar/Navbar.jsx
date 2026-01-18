import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

const NavMenu = [
  { id: 1, title: "Home", link: "/" },
  { id: 2, title: "About", link: "/about" },
  { id: 3, title: "History", link: "/history" },
];

const Navbar = () => {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  /* ============================
     SCROLL SHOW / HIDE (DESKTOP)
  ============================ */
  useEffect(() => {
    const handleScroll = () => {
      if (mobileOpen) return; // ⛔ don't hide navbar when menu is open

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
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

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
        <div className="bg-black/10 backdrop-blur-md py-4 px-6 md:px-8 text-white">
          <div className="flex justify-between items-center max-w-7xl mx-auto">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img
                src="/assets/debjit-log-45.png"
                alt="Logo"
                className="w-12 h-auto"
              />
            </Link>

            {/* Desktop Menu */}
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

            {/* Hamburger (Mobile) */}
            <button
              className="md:hidden"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              <GiHamburgerMenu className="text-2xl" />
            </button>
          </div>
        </div>
      </header>

      {/* ================= MOBILE MENU OVERLAY ================= */}
      {mobileOpen && (
        <nav className="md:hidden fixed top-[4.5rem] left-0 w-full h-[calc(35vh-4.5rem)] bg-black/95 backdrop-blur-md z-40 flex flex-col items-center justify-center gap-8">
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
