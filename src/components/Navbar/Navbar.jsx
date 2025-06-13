import React, { useEffect, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const NavMenu = [
  { id: 1, title: 'Home', link: '/' },
  { id: 2, title: 'About ', link: '/about' },
  { id: 3, title: 'History ', link: '/history' }, // Updated link for Creator page
];

const Navbar = () => {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScrollY && currentScroll > 100) {
        setShowNav(false); // scrolling down
      } else {
        setShowNav(true); // scrolling up
      }

      setLastScrollY(currentScroll);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <main
      className={`fixed top-0 w-full z-50 transition-transform duration-500 ${
        showNav ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="py-6 px-10 bg-transparent text-white">
        <div className="container">
          <div className="flex justify-between items-center">
            {/* Logo on the left side */}
            <div className="flex items-center">
              <img
                src="src\assets\debjit-log-45.png" // Replace with your logo image path
                alt="Logo"
                className="w-12 h-auto mx-2" // Adjust the size of the logo
              />
            </div>

            {/* nav menu */}
            <ul className="hidden md:flex gap-4">
              {NavMenu.map((menu) => (
                <li key={menu.id}>
                  <Link
                    to={menu.link} // Use 'Link' component for internal routing
                    className="inline-block px-6 py-2 uppercase hover:bg-primary duration-200 rounded-md hover:shadow-[0px_0px_10px_4px_rgba(249,231,194,0.5)]"
                  >
                    {menu.title}
                  </Link>
                </li>
              ))}
            </ul>

            {/* hamburger icon */}
            <div className="md:hidden rounded-icons">
              <GiHamburgerMenu className="text-xl" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Navbar;
