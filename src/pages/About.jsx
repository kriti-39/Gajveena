// src/pages/About.jsx

import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer.jsx';
import CreatorHero from '../components/CreatorHero/CreatorHero.jsx';
import Creator from '../components/Creator/Creator.jsx';



const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className='pt-20'></div>
      <CreatorHero/>
      <Creator/>
      <div className="text-center pt-0 pb-8">
        <a
          href="http://debjitmahalanobis.com/"
          className="text-lg text-yellowTint font-bold hover:text-white transition-colors duration-300"
        >
          Explore my other work
        </a>
      </div>
      <Footer/>
    </>
  );
};

export default AboutPage;
