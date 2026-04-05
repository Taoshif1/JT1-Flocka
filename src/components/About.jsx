import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaLinkedinIn,
  FaReact,
  FaNodeJs,
  FaFigma,
  FaCode,
  FaBolt,
  FaShieldHalved,
  FaGlobe,
  FaTerminal,
} from "react-icons/fa6";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiGithub,
  SiVercel,
  SiPostman,
} from "react-icons/si";
import { TbBrandFramer, TbArrowUpRight, TbCircleDot } from "react-icons/tb";
import Logo from "./Logo";

const About = () => {
  const containerRef = useRef();
  const headerMarqueeRef = useRef();
  const footerMarqueeRef = useRef();
  const bgGlowRef = useRef();
  const [time, setTime] = useState("");

  // Real-time clock logic for Dhaka (GMT+6)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: "Asia/Dhaka",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setTime(new Intl.DateTimeFormat("en-US", options).format(now));
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  useGSAP(
    () => {
      gsap.from(".bento-card", {
        scrollTrigger: { trigger: containerRef.current, start: "top 80%" },
        opacity: 0,
        y: 60,
        scale: 0.9,
        duration: 1,
        ease: "expo.out",
        stagger: 0.1,
      });

      gsap.to(headerMarqueeRef.current, {
        xPercent: 50,
        repeat: -1,
        duration: 20,
        ease: "none",
      });

      gsap.to(footerMarqueeRef.current, {
        xPercent: -50,
        repeat: -1,
        duration: 15,
        ease: "none",
      });

      gsap.to(".tech-float", {
        y: -10,
        repeat: -1,
        yoyo: true,
        duration: 2,
        ease: "power1.inOut",
        stagger: 0.2,
      });
    },
    { scope: containerRef },
  );

  const handleMouseEnter = (colorClass) => {
    gsap.to(bgGlowRef.current, {
      backgroundColor: colorClass,
      opacity: 0.15,
      duration: 0.6,
    });
  };

  const handleMouseLeave = () => {
    gsap.to(bgGlowRef.current, {
      backgroundColor: "transparent",
      opacity: 0.1,
      duration: 0.6,
    });
  };

  const socials = [
    {
      name: "Instagram",
      Icon: FaInstagram,
      color: "hover:bg-pink-500",
      username: "@taoshiflex",
    },
    {
      name: "Linkedin",
      Icon: FaLinkedinIn,
      color: "hover:bg-blue-600",
      username: "taoshif1",
    },
    {
      name: "Github",
      Icon: SiGithub,
      color: "hover:bg-white/20",
      username: "taoshiflex1",
    },
  ];

  const techStack = [
    { Icon: FaReact, color: "text-sky-400" },
    { Icon: SiMongodb, color: "text-green-500" },
    { Icon: FaNodeJs, color: "text-green-400" },
    { Icon: SiExpress, color: "text-white/70" },
    { Icon: SiTailwindcss, color: "text-cyan-400" },
    { Icon: TbBrandFramer, color: "text-pink-400" },
    { Icon: FaFigma, color: "text-orange-400" },
  ];

  return (
    <section
      ref={containerRef}
      className="py-16 bg-[#030303] overflow-hidden relative"
    >
      <div
        ref={bgGlowRef}
        className="absolute inset-0 z-0 pointer-events-none transition-colors duration-700"
      ></div>

      <div className="absolute inset-0 z-0 opacity-40">
        <div className="w-[500px] h-[500px] bg-hyper-blue/20 blur-[150px] rounded-full absolute -top-40 -left-20"></div>
        <div className="w-[500px] h-[500px] bg-hyper-green/20 blur-[150px] rounded-full absolute -bottom-40 -right-20"></div>
      </div>
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      ></div>

      <div className="relative z-20 mb-10 border-y border-white/5 py-8 bg-white/[0.01] backdrop-blur-3xl whitespace-nowrap overflow-hidden">
        <div ref={headerMarqueeRef} className="flex gap-20 items-center">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex gap-20 items-center flex-none">
              <Logo light={true} />
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white uppercase italic">
                Precision <span className="text-hyper-green">Over</span> Work
              </h2>
              <div className="w-3 h-3 bg-hyper-purple rounded-full animate-pulse"></div>
              <h2
                className="text-5xl md:text-7xl font-black tracking-tighter text-transparent"
                style={{ WebkitTextStroke: "1px rgba(255,255,255,0.4)" }}
              >
                Code <span className="text-hyper-blue">As</span> Art
              </h2>
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-[1500px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          <div
            onMouseEnter={() => handleMouseEnter("#00ff88")}
            onMouseLeave={handleMouseLeave}
            className="bento-card md:col-span-4 group relative rounded-[2.5rem] p-[1px] overflow-hidden bg-white/5 border border-white/10"
          >
            <div className="relative bg-[#0a0a0a]/80 backdrop-blur-xl h-full rounded-[2.4rem] p-10 flex flex-col justify-between">
              <div>
                <h3 className="text-7xl font-black text-white mb-2">
                  1.8k<span className="text-hyper-green">+</span>
                </h3>
                <p className="text-gray-500 text-xs font-bold uppercase tracking-[0.3em]">
                  GitHub Contributions & Counting
                </p>
              </div>
              <div className="mt-8 p-6 rounded-3xl bg-white/5 border border-white/10">
                <div className="flex flex-wrap gap-4 justify-center">
                  {techStack.map(({ Icon, color }, i) => (
                    <Icon key={i} className={`tech-float ${color}`} size={24} />
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-white/5 flex justify-between items-center">
                  <span className="text-[10px] text-white/40 uppercase font-bold tracking-widest">
                    Stack Proficiency
                  </span>
                  <span className="text-[10px] text-hyper-green font-mono">
                    98.2%
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="bento-card md:col-span-5 bg-black rounded-[2.5rem] overflow-hidden relative group min-h-[400px] border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200"
              className="absolute inset-0 w-full h-full object-cover opacity-30 saturate-0 group-hover:saturate-100 group-hover:scale-110 transition-all duration-1000"
              alt="Work"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent"></div>
            <div className="absolute bottom-10 left-10 right-10 p-8 rounded-3xl bg-black/40 backdrop-blur-md border border-white/10 group-hover:border-white/20 transition-all">
              <p className="text-white text-xl font-medium leading-tight italic">
                "Logic will get you from A to B.{" "}
                <span className="text-hyper-blue">Imagination</span> will take
                you everywhere."
              </p>
            </div>
          </div>

          <div className="bento-card md:col-span-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 flex flex-col justify-between">
            <div className="space-y-6 w-full">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 px-3 py-1 bg-hyper-green/10 border border-hyper-green/20 rounded-full">
                  <div className="w-2 h-2 bg-hyper-green rounded-full animate-ping"></div>
                  <span className="text-[9px] text-hyper-green font-bold uppercase">
                    Live Status
                  </span>
                </div>
                <FaGlobe className="text-white/20" size={16} />
              </div>
              <div>
                <h4 className="text-white text-4xl font-black tracking-tighter leading-[0.9]">
                  Dhaka,
                  <br />
                  Bangladesh
                </h4>
                <div className="mt-6 pt-6 border-t border-white/5 space-y-3">
                  <p className="text-white/40 text-[9px] font-bold uppercase tracking-widest">
                    Shipped Projects
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 group/p">
                      <TbCircleDot
                        className="text-hyper-blue animate-pulse"
                        size={10}
                      />
                      <span className="text-white text-[10px] font-bold">
                        CivicPulse AI
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <TbCircleDot className="text-hyper-green" size={10} />
                      <span className="text-white text-[10px] font-bold">
                        LifeStream
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <TbCircleDot className="text-hyper-purple" size={10} />
                      <span className="text-white text-[10px] font-bold">
                        Electrobox
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full space-y-2 mt-4">
              <div className="flex justify-between text-[9px] font-bold text-white/40 uppercase">
                <span>Local Time</span>
                <span className="text-white font-mono">{time}</span>
              </div>
              <div className="h-[1px] w-full bg-white/10"></div>
              <div className="flex justify-between text-[9px] font-bold text-white/40 uppercase">
                <span>Current Focus</span>
                <span className="text-hyper-blue">Full-Stack</span>
              </div>
            </div>
          </div>

          <div
            onMouseEnter={() => handleMouseEnter("#bd00ff")}
            onMouseLeave={handleMouseLeave}
            className="bento-card md:col-span-6 bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-10 group"
          >
            <div className="flex justify-between items-start mb-10">
              <h4 className="text-white text-2xl font-black uppercase tracking-widest leading-none">
                Core
                <br />
                Workflow
              </h4>
              <div className="p-3 bg-white/5 rounded-2xl border border-white/10 group-hover:rotate-12 transition-transform">
                <FaTerminal className="text-hyper-purple" size={20} />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { title: "Design", icon: FaBolt, desc: "GSAP & Three.js" },
                { title: "Engine", icon: FaCode, desc: "MERN Stack" },
                { title: "Security", icon: FaShieldHalved, desc: "Web CTF" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="relative overflow-hidden group/item p-5 rounded-[2rem] bg-black/40 border border-white/5 hover:border-hyper-purple/50 transition-all"
                >
                  <item.icon className="text-hyper-purple mb-4" size={22} />
                  <p className="text-white font-bold text-xs mb-1">
                    {item.title}
                  </p>
                  <p className="text-gray-500 text-[9px] leading-tight">
                    {item.desc}
                  </p>
                  <TbArrowUpRight
                    className="absolute top-4 right-4 text-white/10 group-hover/item:text-hyper-purple transition-colors"
                    size={14}
                  />
                </div>
              ))}
            </div>
          </div>

          <div
            onMouseEnter={() => handleMouseEnter("#007bff")}
            onMouseLeave={handleMouseLeave}
            className="bento-card md:col-span-6 bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-10 group"
          >
            <div className="flex flex-col md:flex-row gap-8 justify-between items-center h-full">
              <div className="space-y-4 shrink-0 text-center md:text-left">
                <h4 className="text-white text-4xl font-black tracking-tighter leading-none">
                  Let's build
                  <br />
                  together.
                </h4>
                <p className="text-gray-500 text-xs max-w-[180px]">
                  Currently accepting custom branding and full-stack projects.
                </p>
                <button className="px-6 py-3 bg-white text-black text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-hyper-blue hover:text-white transition-all">
                  Drop a Line
                </button>
              </div>
              <div className="flex flex-col gap-3 w-full max-w-[240px]">
                {socials.map(({ name, Icon, color, username }) => (
                  <div
                    key={name}
                    className={`flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5 ${color} transition-all group/s cursor-pointer hover:translate-x-2`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon
                        className="text-white/60 group-hover/s:text-white"
                        size={16}
                      />
                      <span className="text-[10px] text-white/80 font-black uppercase tracking-tighter">
                        {name}
                      </span>
                    </div>
                    <span className="text-[9px] text-white/20 font-mono group-hover/s:text-white/60">
                      {username}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bento-card md:col-span-12 bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-10 flex flex-wrap items-center justify-around gap-10">
            <div className="text-center group cursor-default">
              <p className="text-6xl font-black text-white group-hover:text-hyper-green transition-all group-hover:scale-110">
                1150<span className="text-hyper-green">+</span>
              </p>
              <p className="text-[10px] text-gray-500 uppercase font-black tracking-[0.5em] mt-2">
                Coding Hours
              </p>
            </div>
            <div className="h-12 w-[1px] bg-white/10 hidden md:block"></div>
            <div className="text-center group cursor-default">
              <p className="text-6xl font-black text-white group-hover:text-hyper-blue transition-all group-hover:scale-110">
                100<span className="text-hyper-blue">%</span>
              </p>
              <p className="text-[10px] text-gray-500 uppercase font-black tracking-[0.5em] mt-2">
                Client Satisfaction
              </p>
            </div>
            <div className="h-12 w-[1px] bg-white/10 hidden md:block"></div>
            <div className="text-center group cursor-default">
              <p className="text-6xl font-black text-white group-hover:text-hyper-purple transition-all group-hover:scale-110">
                7th
              </p>
              <p className="text-[10px] text-gray-500 uppercase font-black tracking-[0.5em] mt-2">
                Semester / CSE
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 border-t border-white/5 bg-gradient-to-r from-hyper-green/5 via-hyper-blue/5 to-hyper-purple/5 py-12 whitespace-nowrap overflow-hidden relative">
        <div ref={footerMarqueeRef} className="flex gap-16 items-center">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex gap-16 items-center flex-none">
              <span className="text-[12vw] font-black text-white tracking-tighter">
                SCALE
              </span>
              <div className="w-8 h-8 bg-hyper-green rounded-full shadow-[0_0_20px_#00ff88]"></div>
              <span
                className="text-[12vw] font-black text-transparent"
                style={{ WebkitTextStroke: "1px #007bff" }}
              >
                FLOW
              </span>
              <div className="w-8 h-8 bg-hyper-blue rotate-45 shadow-[0_0_20px_#007bff]"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
