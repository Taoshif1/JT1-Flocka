import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { motion } from "framer-motion";
import { TbArrowUpRight, TbPlus } from "react-icons/tb";
import Logo from "./Logo";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import { link } from "framer-motion/client";
import { SiGithub } from "react-icons/si";

const projects = [
  {
    id: 1,
    image: image1,
    logo: <Logo light={true} className="w-6 h-6" />,
    branding: "LIFESTREAM",
    date: "2026",
    size: "col-span-1",
    link: "https://bloodapp2client.vercel.app/",
  },
  {
    id: 2,
    image: image2,
    logo: <Logo light={true} className="w-16 h-16" />,
    branding: "GARIWALA",
    date: "2024",
    size: "col-span-1",
    link: "https://gariwala.netlify.app/",
  },
  {
    id: 3,
    image: image3,
    logo: <Logo light={true} className="w-16 h-16" />,
    branding: "WARMPAWS",
    date: "2025",
    size: "col-span-2",
    link: "https://warmpaws2.netlify.app/",
  },
  {
    id: 4,
    image: image4,
    logo: <Logo light={true} className="w-16 h-16" />,
    branding: "FROM CHAINS TO FREEDOM",
    date: "2023",
    size: "col-span-1",
    link: "https://startling-pavlova-74c5c3.netlify.app/",
  },
  {
    id: 5,
    image: image5,
    logo: <Logo light={true} className="w-16 h-16" />,
    branding: "HEALTHBUDDY+",
    date: "2022",
    size: "col-span-1",
    link: "https://healthbuddyplus.netlify.app/",
  },
];

const Portfolio = () => {
  const containerRef = useRef();

  useGSAP(
    () => {
      gsap.from(".reveal-item", {
        scrollTrigger: { trigger: containerRef.current, start: "top 80%" },
        opacity: 0,
        y: 60,
        duration: 1.2,
        ease: "expo.out",
        stagger: 0.1,
      });

      gsap.to(".pulsing-icon", {
        scale: 1.15,
        repeat: -1,
        yoyo: true,
        duration: 1.2,
        ease: "power2.inOut",
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="py-24 bg-[#030303] overflow-hidden relative"
    >
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(#ffffff15 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      ></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-hyper-blue/10 rounded-full blur-[150px] z-0 pointer-events-none"></div>

      <div className="relative z-10 max-w-[1500px] mx-auto px-6">
        <div className="reveal-item flex flex-col md:flex-row justify-between items-start md:items-center mb-20 gap-8">
          <div className="space-y-4">
            <Logo light={true} className="w-16 h-16" />
            <p className="text-gray-500 text-xs font-black uppercase tracking-[0.5em]">
              Portfolio & Selected Works
            </p>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight max-w-2xl tracking-tighter">
            Strategy to build <span className="text-hyper-green">powerful</span>{" "}
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "1px white" }}
            >
              digital
            </span>{" "}
            solutions.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`reveal-item ${project.size} bento-card rounded-[2.5rem] bg-black/40 border border-white/5 overflow-hidden group`}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.branding}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-black/20 to-transparent"></div>

                <div className="absolute top-8 left-8 p-3 bg-black/50 backdrop-blur-sm rounded-xl border border-white/10">
                  <p className="text-xs text-white font-mono">{project.logo}</p>
                </div>

                <a
                  href={project.link}
                  target="blank"
                  className="absolute top-8 right-8 p-3.5 bg-white text-black rounded-full hover:bg-hyper-green hover:scale-110 transition-all opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-3 duration-500"
                >
                  <TbArrowUpRight size={20} />
                </a>
              </div>

              <div className="relative p-10 flex justify-between items-center bg-[#0a0a0a] border-t border-white/10 rounded-b-[2.5rem]">
                <div className="space-y-1">
                  <h4 className="text-white text-xl font-bold tracking-tight">
                    {project.branding}
                  </h4>
                  <p className="text-gray-500 text-[11px] font-mono uppercase tracking-widest">
                    TAOSHIFLEX
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-black text-white">
                    {project.date}
                  </p>
                  <p className="text-gray-600 text-[9px] uppercase font-bold tracking-widest mt-1">
                    Release Yr.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal-item mt-24 flex justify-center">
          <motion.a
            href="https://github.com/Taoshif1"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-5 px-10 py-5 rounded-full bg-white text-black text-sm font-black uppercase tracking-widest group transition-all hover:bg-hyper-blue hover:text-white cursor-pointer shadow-xl hover:shadow-hyper-blue/20"
          >
            <div className="pulsing-icon w-10 h-10 rounded-full bg-black/5 group-hover:bg-white/20 flex items-center justify-center transition-all duration-500 group-hover:rotate-90">
              <TbPlus
                size={22}
                className="text-black group-hover:text-white transition-colors"
              />
            </div>

            <span>SEE MORE</span>

            <SiGithub
              className="opacity-0 group-hover:opacity-100 transition-opacity ml-2"
              size={18}
            />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
