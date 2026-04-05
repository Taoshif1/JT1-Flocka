import React from "react";
import { motion } from "framer-motion";
import {
  TbArrowUpRight,
  TbBrandInstagram,
  TbBrandLinkedin,
  TbBrandGithub,
} from "react-icons/tb";
import Logo from "./Logo";

const Footer = () => {
  const socialLinks = [
    { icon: <TbBrandInstagram size={20} />, label: "Instagram", href: "#" },
    { icon: <TbBrandLinkedin size={20} />, label: "LinkedIn", href: "https://linkedin.com/in/taoshif1" },
    {
      icon: <TbBrandGithub size={20} />,
      label: "GitHub",
      href: "https://github.com/taoshif1",
    },
  ];

  return (
    <footer className="relative bg-[#050505] pt-20 pb-10 overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-hyper-blue/10 blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-hyper-green/10 blur-[120px] rounded-full -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
          <div className="lg:col-span-2 space-y-8">
            <h3 className="text-4xl font-black text-white tracking-tighter uppercase">
              <Logo></Logo>
            </h3>
            <p className="text-gray-400 max-w-sm text-lg leading-relaxed font-medium">
              Creating high-performance digital experiences through code and
              creative strategy.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  whileHover={{
                    y: -5,
                    backgroundColor: "rgba(255,255,255,1)",
                    color: "#000",
                  }}
                  className="w-12 h-12 rounded-2xl border border-white/10 flex items-center justify-center text-white/50 transition-all duration-300"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30">
              Navigation
            </h5>
            <ul className="space-y-4">
              {["Works", "Services", "About", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-lg font-bold text-gray-500 hover:text-white transition-colors flex items-center group"
                  >
                    {item}
                    <TbArrowUpRight className="ml-2 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30">
              Mail Us
            </h5>
            <p className="text-lg font-bold text-white cursor-pointer hover:text-hyper-blue transition-colors">
                taoshif2@gmail.com
            </p>
            <p className="text-gray-500 text-sm leading-relaxed">
              Based in Dhaka, Bangladesh <br />
              Available for worldwide projects.
            </p>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">
            © 2026{" "}
            <span className="text-white">Taoshiflex Venture & Solution</span>.
            All Rights Reserved.
          </p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-white/40 hover:text-white transition-all"
          >
            Scroll to top
            <span className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-hyper-blue group-hover:border-hyper-blue transition-all">
              <TbArrowUpRight />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
