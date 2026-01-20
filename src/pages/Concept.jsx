// src/pages/History.jsx
import Evolution from '../components/Evolution/Evolution.jsx';
import EvolutionMobile from '../components/Evolution/EvolutionMobile.jsx';
import Footer from '../components/Footer/Footer.jsx';
import HistoryHero from '../components/History/HistoryHero.jsx';
import Navbar from '../components/Navbar/Navbar.jsx';


const Concept = () => {
  return (
    <>
      <Navbar />
      <section className='pt-24'>
        <HistoryHero/>
        <Evolution/>
        <EvolutionMobile/>
        <Footer/>
      </section>
    </>
  );
};

export default Concept;
