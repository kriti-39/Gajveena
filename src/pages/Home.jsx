// src/pages/Home.jsx
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";
import Creator from "../components/CreatorHero/CreatorHero";
import TheStorySection from "../components/TheStorySection/TheStorySection";
import Origins from "../components/Origins/Origins"
import CreatorContent from "../components/CreatorContent/CreatorContent";

const Home = () => {
  return (
    <main>
    
      <Hero />
      <TheStorySection/>
      <Origins/>
      <Creator />
      <div className="text-center py-5">
        <a
          href="/creator"
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
