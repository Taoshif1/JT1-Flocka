import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  SiVercel,
  SiStripe,
  SiFramer,
  SiAirbnb,
  SiNike,
  SiApple,
  SiSlack,
  SiLinear,
} from "react-icons/si";
import { TbArrowUpRight } from "react-icons/tb";

const row1 = [
  { icon: SiVercel, name: "Vercel", color: "#000000" },
  { icon: SiStripe, name: "Stripe", color: "#635bff" },
  { icon: SiFramer, name: "Framer", color: "#0055ff" },
  { icon: SiAirbnb, name: "Airbnb", color: "#ff5a5f" },
  { icon: SiLinear, name: "Linear", color: "#5e6ad2" },
];

const row2 = [
  { icon: SiApple, name: "Apple", color: "#000000" },
  { icon: SiNike, name: "Nike", color: "#ff6b00" },
  { icon: SiSlack, name: "Slack", color: "#4a154b" },
  { icon: SiVercel, name: "Vercel", color: "#111111" },
];

// Combine all unique brand colors for the auto-cycle
const allColors = [...new Set([...row1, ...row2].map((item) => item.color))];

const HappyUsers = () => {
  const [activeColor, setActiveColor] = useState(allColors[0]);
  const [isHovering, setIsHovering] = useState(false);

  // 🔄 AUTO-CYCLE LOGIC
  useEffect(() => {
    if (isHovering) return; // Pause cycle if user is interacting

    const interval = setInterval(() => {
      setActiveColor((prev) => {
        const currentIndex = allColors.indexOf(prev);
        const nextIndex = (currentIndex + 1) % allColors.length;
        return allColors[nextIndex];
      });
    }, 3000); // Changes every 3 seconds

    return () => clearInterval(interval);
  }, [isHovering]);

  const cardBase =
    "w-[260px] h-[160px] flex flex-col items-center justify-center transition-all duration-700 cursor-pointer group/card border-r border-b border-white/10 bg-transparent relative overflow-hidden";

  return (
    <motion.section
      animate={{ backgroundColor: activeColor }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      className="py-32 overflow-hidden relative border-y border-white/5"
    >
      {/* Header */}
      <div className="max-w-[1400px] mx-auto px-6 mb-10 flex justify-between items-end pb-4 relative z-30 ">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full animate-pulse bg-white"></span>
          <span className="text-xl font-black uppercase tracking-[0.4em] text-white transition-colors">
            Special Partners
          </span>
        </div>
        <p className="text-xl font-bold uppercase tracking-widest text-white/50 transition-colors">
          <span className="text-black font-bold">TAOSHIFLEX</span> EST <span className="text-white">2026</span>
        </p>
      </div>

      <div className="relative border-t border-l border-white/10 max-w-fit mx-auto z-20">
        <div className="flex overflow-hidden group">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="flex whitespace-nowrap"
          >
            {[...row1, ...row1].map((client, index) => (
              <div
                key={index}
                className={cardBase}
                onMouseEnter={() => {
                  setActiveColor(client.color);
                  setIsHovering(true);
                }}
                onMouseLeave={() => setIsHovering(false)}
              >
                <client.icon
                  size={32}
                  className="transition-all duration-500 mb-3 z-10 text-white scale-110"
                />
                <span className="text-[9px] font-black uppercase tracking-[0.2em] transition-all duration-500 z-10 text-white/70">
                  {client.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
        <div className="flex overflow-hidden group">
          <motion.div
            animate={{ x: ["-50%", "0%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex whitespace-nowrap"
          >
            {[...row2, ...row2].map((client, index) => (
              <div
                key={index}
                className={cardBase}
                onMouseEnter={() => {
                  setActiveColor(client.color);
                  setIsHovering(true);
                }}
                onMouseLeave={() => setIsHovering(false)}
              >
                <client.icon
                  size={32}
                  className="transition-all duration-500 mb-3 z-10 text-white scale-110"
                />
                <span className="text-[9px] font-black uppercase tracking-[0.2em] transition-all duration-500 z-10 text-white/70">
                  {client.name}
                </span>
              </div>
            ))}

            <a
              href="mailto:hello@taoshiflex.com"
              onMouseEnter={() => {
                setActiveColor("#007bff");
                setIsHovering(true);
              }}
              onMouseLeave={() => setIsHovering(false)}
              className="w-[260px] h-[160px] bg-black/40 backdrop-blur-sm flex flex-col items-center justify-center text-center group/cta cursor-pointer relative transition-all no-underline border-r border-b border-white/10 hover:bg-black"
            >
              <TbArrowUpRight
                className="text-white transition-all mb-2"
                size={24}
              />
              <h4 className="text-[10px] font-black text-white uppercase tracking-[0.3em]">
                Join the Labs
              </h4>
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{
          background: `linear-gradient(to right, ${activeColor}, transparent)`,
        }}
        transition={{ duration: 1.5 }}
        className="pointer-events-none absolute inset-y-0 left-0 w-60 z-30"
      />
      <motion.div
        animate={{
          background: `linear-gradient(to left, ${activeColor}, transparent)`,
        }}
        transition={{ duration: 1.5 }}
        className="pointer-events-none absolute inset-y-0 right-0 w-60 z-30"
      />
    </motion.section>
  );
};

export default HappyUsers;
