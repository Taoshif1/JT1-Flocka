import Hero from "../components/Hero";
import About from "../components/About";
import ParticleScene from "../components/ParticleScene";
import Portfolio from "../components/Portfolio";
import ExpertiseAccordion from "../components/ExpertiseAccordion";

const Home = () => {
  return (
     <>
      <Hero></Hero>
      <div className="relative z-10">
        <ParticleScene></ParticleScene>
      </div>
      <About></About>
      <Portfolio></Portfolio>
      <ExpertiseAccordion></ExpertiseAccordion>
    </>
  );
};

export default Home;