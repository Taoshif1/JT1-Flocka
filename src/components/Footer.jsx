import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  TbBrandInstagram,
  TbBrandLinkedin,
  TbBrandGithub,
  TbArrowRight,
} from "react-icons/tb";

const Footer = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll();

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 720]);

  const navLinks = [
    { name: "About Us", href: "#" },
    { name: "Journal", href: "#" },
    { name: "Faq", href: "#" },
    { name: "Get In Touch", href: "#" },
    { name: "Careers", href: "#" },
  ];

  const socialLinks = [
    { icon: <TbBrandInstagram size={16} />, href: "#" },
    {
      icon: <TbBrandLinkedin size={16} />,
      href: "https://linkedin.com/in/taoshif1",
    },
    { icon: <TbBrandGithub size={16} />, href: "https://github.com/taoshif1" },
  ];

  return (
    <footer
      ref={containerRef}
      className="bg-black text-white pt-32 pb-10 px-6 md:px-20 relative overflow-hidden"
    >
      <div className="relative mb-40 flex flex-col items-center justify-center text-center">

        <h2 className="text-[13vw] font-bold leading-[0.7] tracking-tighter uppercase opacity-90 z-0">
          Lets
        </h2>

        <h2 className="text-[13vw] font-bold leading-[0.9] tracking-tighter uppercase text-transparent stroke-text z-0 fading-text">
          Talk Now
        </h2>

        <motion.div
          style={{ rotate }}
          className="absolute top-[65%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-56 md:h-56 flex items-center justify-center cursor-pointer group z-10"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path
              id="textPath"
              d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
              fill="none"
            />
            <text className="text-[8px] font-black uppercase fill-white tracking-[4px]">
              <textPath href="#textPath">
                • GET IN TOUCH • GET IN TOUCH • 
              </textPath>
            </text>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              <TbArrowRight className="text-2xl" />
            </div>
          </div>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        <div className="lg:col-span-4 space-y-8">
          <div className="space-y-4">
            <h3 className="text-4xl font-black tracking-tighter uppercase">
              Taoshiflex
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Crafting high-performance digital experiences through code and
              creative strategy.
            </p>
          </div>

          <div className="flex gap-3">
            {socialLinks.map((social, i) => (
              <a
                key={i}
                href={social.href}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-500"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="lg:col-span-3">
          <ul className="space-y-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-2xl font-bold hover:text-gray-400 transition-colors uppercase tracking-tight"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-2">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30">
              Contact Info
            </span>
            <a
              href="mailto:taoshif2@gmail.com"
              className="block text-xl font-bold hover:underline"
            >
              taoshif2@gmail.com
            </a>
            <p className="text-xl font-bold">+880 1XXX XXXXXX</p>
          </div>

          <div className="space-y-2">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30">
              Location
            </span>
            <p className="text-gray-400 font-medium">
              Dhaka, Bangladesh <br />
              North Avenue, Gulshan.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] text-gray-600 uppercase font-bold tracking-[0.2em]">
          © 2026 TAOSHIFLEX VENTURES. ALL RIGHTS RESERVED.
        </p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-2 group"
        >
          Back to top
          <span className="group-hover:-translate-y-1 transition-transform">
            ↑
          </span>
        </button>
      </div>

      <style jsx>{`
        .stroke-text {
          -webkit-text-stroke: 1.5px rgba(255, 255, 255, 0.4);
        }
        .fading-text {
          mask-image: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 1) 20%,
            rgba(0, 0, 0, 0) 100%
          );
          -webkit-mask-image: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 1) 20%,
            rgba(0, 0, 0, 0) 100%
          );
        }
      `}</style>
    </footer>
  );
};

export default Footer;
