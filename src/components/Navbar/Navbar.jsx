import React, { useEffect, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const NavMenu = [
  { id: 1, title: 'Home', link: '/' },
  { id: 2, title: 'About', link: '/about' },
  { id: 3, title: 'History', link: '/history' },
];

const Navbar = () => {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Hide navbar on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScrollY && currentScroll > 100) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      setLastScrollY(currentScroll);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-transform duration-500 ${
        showNav ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="bg-black/10 backdrop-blur-md py-4 px-6 md:px-8 text-white">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/assets/debjit-log-45.png" // Vite-friendly path
              alt="Logo"
              className="w-12 h-auto mr-2"
            />
            <span className="font-bold text-xl md:text-2xl"></span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-6">
            {NavMenu.map((menu) => (
              <Link
                key={menu.id}
                to={menu.link}
                className="uppercase px-4 py-2 rounded-md hover:shadow-[0px_0px_10px_4px_rgba(249,231,194,0.5)]
hover:bg-primary transition duration-200"
              >
                {menu.title}
              </Link>
            ))}
          </nav>

          {/* Hamburger */}
          <div
            className="md:hidden cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <GiHamburgerMenu className="text-2xl" />
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <nav className="md:hidden mt-4 flex flex-col gap-3 bg-black/90 rounded-md p-4">
            {NavMenu.map((menu) => (
              <Link
                key={menu.id}
                to={menu.link}
                className="uppercase px-4 py-2 rounded-md hover:bg-yellow-300 hover:text-black transition duration-200"
                onClick={() => setMobileOpen(false)} // Close menu on click
              >
                {menu.title}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
