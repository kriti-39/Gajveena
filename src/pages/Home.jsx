// src/pages/Home.jsx
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";
import Creator from "../components/CreatorHero/CreatorHero";
import HistoryHero from "../components/History/HistoryHero";
import TheStory from "../components/TheStory/TheStory";
import TheStory2 from "../components/TheStory2/TheStory2";
import CraftingOfGajveena from "../components/CraftingOfGajveena/CraftingOfGajveena";
const Home = () => {
  return (
    <main>
      <Hero />
        <TheStory2/>
     <CraftingOfGajveena/>
     <HistoryHero />
      <div className="text-center mt-8 py-4">
        <a
          href="/history"
          className="text-m text-yellowTint font-bold hover:text-white transition-colors duration-300"
        >
          Know more about the history of Veena
        </a>
      </div>
      <Creator />
      <div className="text-center py-10">
        <a
          href="/about"
          className="text-m text-yellowTint font-bold hover:text-white transition-colors duration-300"
        >
          Know more about the Creator
        </a>
      </div>

      
      <Footer/>
    </main>
  );
};

export default Home;
