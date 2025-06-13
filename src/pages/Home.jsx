// src/pages/Home.jsx
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";
import Creator from "../components/CreatorHero/CreatorHero";
import HistoryHero from "../components/History/HistoryHero";
import TheStory from "../components/TheStory/TheStory";
import CraftingOfGajveena from "../components/CraftingOfGajveena/CraftingOfGajveena";
const Home = () => {
  return (
    <main>
      <Hero />
     <TheStory/>
     <CraftingOfGajveena/>
     <HistoryHero />
      <div className="text-center">
        <a
          href="/history"
          className="text-xl text-yellowTint font-bold hover:text-white transition-colors duration-300"
        >
          Know more about the history of Veena
        </a>
      </div>
      <Creator />
      <div className="text-center">
        <a
          href="/about"
          className="text-xl text-yellowTint font-bold hover:text-white transition-colors duration-300"
        >
          Know more about the Creator
        </a>
      </div>

      
      <Footer/>
    </main>
  );
};

export default Home;
