// src/pages/History.jsx
import Evolution from '../components/Evolution/Evolution.jsx';
import Footer from '../components/Footer/Footer.jsx';
import HistoryHero from '../components/History/HistoryHero.jsx';
import Navbar from '../components/Navbar/Navbar.jsx';


const History = () => {
  return (
    <>
      <Navbar />
      <section>
        <HistoryHero/>
        <Evolution/>
        <Footer/>
      </section>
    </>
  );
};

export default History;
