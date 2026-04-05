import Hero from "../components/Hero";
import About from "../components/About";
import ParticleScene from "../components/ParticleScene";
import Portfolio from "../components/Portfolio";
import ExpertiseAccordion from "../components/ExpertiseAccordion";
import FunFacts from "../components/FunFacts";
import HappyUsers from "../components/HappyUsers";
import UserFeedbacks from "../components/UserFeedbacks";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import AwardsSection from "../components/AwardsSection";
import TeamSection from "../components/TeamSection";
import FAQSection from "../components/FAQSection";

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
      <FunFacts></FunFacts>
      <HappyUsers></HappyUsers>
      <UserFeedbacks></UserFeedbacks>
      <ContactSection></ContactSection>
      <AwardsSection></AwardsSection>
      <TeamSection></TeamSection>
      <FAQSection></FAQSection>
      <Footer></Footer>
    </>
  );
};

export default Home;