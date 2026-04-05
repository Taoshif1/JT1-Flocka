import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import BrandCard from "./BrandCard";
import HeroVideo from "../assets/heroVdo.mp4";

const Hero = () => {
  const container = useRef();

  useGSAP(() => {
    gsap.from(".hero-title", {
      y: 100,
      opacity: 0,
      duration: 1.2,
      ease: "power4.out",
      stagger: 0.2
    });
  }, { scope: container });

  return (
    <section ref={container} className="relative h-screen w-full flex items-center justify-center overflow-hidden px-10">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="w-full h-full object-cover brightness-75"
        >
          <source src={HeroVideo} type="video/mp4" />
        </video>
      </div>

      <div className="relative z-10 w-full flex flex-col md:flex-row justify-between items-end pb-20 h-full min-h-screen">
        {/* Large Text */}
        <div className="text-white">
          <h1 className="hero-title text-[10rem] font-bold leading-none tracking-tighter">Floka</h1>
          <p className="hero-title text-4xl font-light opacity-60 ml-4">Studio</p>
        </div>

        {/* Floating Info Card */}
        <div className="hero-title">
          <BrandCard />
        </div>
      </div>
    </section>
  );
};

export default Hero;