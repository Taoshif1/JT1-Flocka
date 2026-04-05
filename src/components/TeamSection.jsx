import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  TbPlus,
  TbBrandFacebook,
  TbBrandTwitter,
  TbBrandLinkedin,
} from "react-icons/tb";

const TeamSection = () => {
  const [activeTab, setActiveTab] = useState("design");

  const teamData = {
    design: [
      {
        name: "Nicolas K. Ellington",
        role: "Founder",
        img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400",
      },
      {
        name: "Carlos E. Ashcroft",
        role: "CEO",
        img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400",
      },
      {
        name: "Leonardo F. Ashton",
        role: "UX Designer",
        img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400",
      },
      {
        name: "Ricardo P. Winslow",
        role: "UI Designer",
        img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400",
      },
    ],
    development: [
      {
        name: "Al Amin",
        role: "Full-Stack Dev",
        img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400",
      },
      {
        name: "Moinul Islam",
        role: "Backend Lead",
        img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400",
      },
    ],
  };

  return (
    <section className="bg-white py-24 px-6 md:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
        <div className="lg:w-1/3 space-y-10">
          <div className="space-y-4">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">
              Our Avengers
            </span>
            <h2 className="text-5xl md:text-6xl font-black text-black leading-tight tracking-tighter">
              Meet with our team member
            </h2>
          </div>

          <div className="flex gap-8 border-b border-gray-100 pb-4">
            {["design", "development"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-xs font-black uppercase tracking-widest transition-all relative ${
                  activeTab === tab
                    ? "text-black"
                    : "text-gray-300 hover:text-gray-500"
                }`}
              >
                {tab} Team
                {activeTab === tab && (
                  <motion.div
                    layoutId="tabUnderline"
                    className="absolute -bottom-4 left-0 right-0 h-0.5 bg-black"
                  />
                )}
              </button>
            ))}
          </div>

          <p className="text-gray-500 text-lg leading-relaxed font-medium max-w-sm">
            What began over coffee-fueled brainstorming sessions has grown into
            a thriving digital agency dedicated to helping brands stand out.
          </p>

          <button className="group flex items-center gap-4 text-xs font-black uppercase tracking-widest">
            <span className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center group-hover:rotate-90 transition-transform duration-300">
              <TbPlus size={20} />
            </span>
            Join With Us
          </button>

          <div className="rounded-[2.5rem] overflow-hidden hidden lg:block">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800"
              alt="Team Culture"
              className="w-full h-[250px] object-cover"
            />
          </div>
        </div>

        <div className="lg:w-2/3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatePresence mode="wait">
              {teamData[activeTab].map((member, idx) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: idx * 0.1 }}
                  className="space-y-6 group"
                >
                  <div className="aspect-[4/5] rounded-[2rem] overflow-hidden bg-[#e5d5c5]">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  <div className="px-2 space-y-4">
                    <div>
                      <h4 className="text-xl font-black text-black tracking-tight">
                        {member.name}
                      </h4>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">
                        {member.role}
                      </p>
                    </div>
                    <div className="flex gap-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <TbBrandFacebook className="text-gray-400 hover:text-black cursor-pointer" />
                      <TbBrandTwitter className="text-gray-400 hover:text-black cursor-pointer" />
                      <TbBrandLinkedin className="text-gray-400 hover:text-black cursor-pointer" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
