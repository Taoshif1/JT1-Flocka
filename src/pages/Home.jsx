import Hero from "../components/Hero";
import About from "../components/About";
import ParticleScene from "../components/ParticleScene";

const Home = () => {
  return (
     <>
      <Hero />
      <div className="relative z-10">
        <ParticleScene />
      </div>
      <About />
    </>
  );
};

export default Home;