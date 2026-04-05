import Hero from "../components/Hero";
import About from "../components/About";
import ParticleScene from "../components/ParticleScene";
import Portfolio from "../components/Portfolio";

const Home = () => {
  return (
     <>
      <Hero></Hero>
      <div className="relative z-10">
        <ParticleScene></ParticleScene>
      </div>
      <About></About>
      <Portfolio></Portfolio>
    </>
  );
};

export default Home;