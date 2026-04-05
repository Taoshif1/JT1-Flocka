import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  TbPlus,
  TbChevronDown,
  TbMapPin,
  TbMessageCircle,
} from "react-icons/tb";

const ContactSection = () => {
  return (
    <section className="relative pt-24 pb-0 bg-[#050505] overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-hyper-blue/5 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          <div className="lg:w-1/2 space-y-12">
            <div className="space-y-6">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500">
                Get In Touch
              </span>
              <h2 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tighter">
                Tell us about your project — whether it’s a website, SEO, or
                marketing.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-10 border-t border-white/10">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-white/50 text-[10px] font-black uppercase tracking-widest">
                  <TbMessageCircle size={18} className="text-hyper-green" />
                  Talk To Us
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Work and general inquiries
                  <br />
                  <span className="text-white font-bold text-lg">
                    +880 1XXX XXXXXX
                  </span>
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-white/50 text-[10px] font-black uppercase tracking-widest">
                  <TbMapPin size={18} className="text-hyper-blue" />
                  Post Address
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Aftabnagar
                  <br />
                  <span className="text-white font-bold text-lg">
                    Dhaka, Bangladesh
                  </span>
                </p>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl"
          >
            <h3 className="text-2xl font-black text-black mb-10 tracking-tight">
              Have a project in mind?
            </h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Gazi Taoshif"
                    className="w-full bg-gray-50 border-none rounded-2xl p-4 text-black placeholder:text-gray-300 focus:ring-2 focus:ring-black transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">
                    Business Email
                  </label>
                  <input
                    type="email"
                    placeholder="hello@taoshiflex.com"
                    className="w-full bg-gray-50 border-none rounded-2xl p-4 text-black placeholder:text-gray-300 focus:ring-2 focus:ring-black transition-all"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">
                    Budget
                  </label>
                  <div className="relative group">
                    <select className="w-full bg-gray-50 border-none rounded-2xl p-4 text-black appearance-none cursor-pointer focus:ring-2 focus:ring-black">
                      <option>$1000 - $5000</option>
                      <option>$5000 - $10000</option>
                      <option>$10000+</option>
                    </select>
                    <TbChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">
                    Service
                  </label>
                  <div className="relative">
                    <select className="w-full bg-gray-50 border-none rounded-2xl p-4 text-black appearance-none cursor-pointer focus:ring-2 focus:ring-black">
                      <option>Web Design</option>
                      <option>MERN Development</option>
                      <option>Branding</option>
                    </select>
                    <TbChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400" />
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Tell us about your goals..."
                  className="w-full bg-gray-50 border-none rounded-2xl p-4 text-black placeholder:text-gray-300 focus:ring-2 focus:ring-black transition-all resize-none"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full md:w-auto flex items-center justify-center gap-4 bg-black text-white px-10 py-5 rounded-2xl font-black text-xs tracking-widest uppercase hover:bg-hyper-blue transition-colors group"
              >
                <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:rotate-90 transition-transform">
                  <TbPlus size={18} />
                </span>
                Let's Talk
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      <div className="leading-[0.8] select-none pointer-events-none translate-y-10">
        <h4 className="text-[18vw] font-black text-white/[0.03] uppercase text-center tracking-tighter">
          Taoshiflex
        </h4>
      </div>
    </section>
  );
};

export default ContactSection;
