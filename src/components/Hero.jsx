import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import BrandCard from "./BrandCard";
import Logo from "./Logo";
import HeroVideo from "../assets/heroVdo.mp4";

const Hero = () => {
  const container = useRef();

  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.from(".hero-line", {
        y: 150,
        skewY: 10,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
        stagger: 0.2,
      }).from(
        ".card-anim",
        { scale: 0.8, opacity: 0, duration: 1, ease: "back.out(1.7)" },
        "-=1",
      );
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 z-10"></div>
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={HeroVideo} type="video/mp4" />
        </video>
      </div>

      {/* Responsive Container */}
      <div className="relative z-20 w-full h-full flex flex-col items-center justify-center lg:flex-row lg:justify-between lg:items-end px-6 md:px-16 pb-12 md:pb-24">
        <div className="lg:hidden absolute top-10">
          <Logo />
        </div>

        {/* Middle Text */}
        <div className="text-white text-center lg:text-left mt-20 lg:mt-0">
          <div className="overflow-hidden">
            <h1 className="hero-line text-[clamp(3.5rem,12vw,12rem)] font-bold leading-[0.8] tracking-tighter">
              Floka
            </h1>
          </div>
          <div className="overflow-hidden">
            <p className="hero-line text-lg md:text-5xl font-extralight opacity-70 mt-2 tracking-widest uppercase">
              Digital Studio
            </p>
          </div>
        </div>

        {/* Bottom Right Card */}
        <div className="card-anim absolute bottom-8 right-6 lg:relative lg:bottom-0 lg:right-0 scale-90 md:scale-100">
          <BrandCard />
        </div>
      </div>
    </section>
  );
};

export default Hero;
