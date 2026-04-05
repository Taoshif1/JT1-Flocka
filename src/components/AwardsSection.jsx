import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const AwardsSection = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  const awards = [
    { title: "Best Designer Awards", provider: "AWWWARDS", year: "2025" },
    { title: "Peaky UI Designer", provider: "GOOGLE", year: "2024" },
    { title: "Great in UX", provider: "APPLE", year: "2023" },
    { title: "Best Website Pick", provider: "MICROSOFT", year: "2022" },
    { title: "Nelson UI & UX Designer", provider: "SAMSUNG", year: "2021" },
  ];

  return (
    <section
      ref={sectionRef}
      className="bg-[#f5f5f7] py-24 px-6 md:px-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center mb-16 relative">
          <motion.div
            style={{ rotate }}
            className="w-32 h-32 flex items-center justify-center"
          >
            <svg viewBox="0 0 100 100" className="absolute w-full h-full">
              <path
                id="circlePath"
                d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                fill="none"
              />
              <text className="text-[8px] font-bold uppercase fill-gray-400 tracking-[2px]">
                <textPath xlinkHref="#circlePath">
                  Driven by passion • creative innovation • grounded in
                  expertise •
                </textPath>
              </text>
            </svg>
            <div className="w-12 h-12 flex items-center justify-center text-gray-300">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                <path d="M18 3H6C4.9 3 4 3.9 4 5V8C4 10.2 5.8 12 8 12V14C8 16.2 9.8 18 12 18S16 16.2 16 14V12C18.2 12 20 10.2 20 8V5C20 3.9 19.1 3 18 3M6 5H8V10C6.9 10 6 9.1 6 8V5M18 8C18 9.1 17.1 10 16 10V5H18V8M12 22C10.9 22 10 21.1 10 20H14C14 21.1 13.1 22 12 22Z" />
              </svg>
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">
              Get Rewards
            </span>
            <div className="rounded-[2.5rem] overflow-hidden shadow-xl mb-6">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
                alt="Award Winning Team"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>

          <div className="lg:w-2/3">
            <h2 className="text-4xl md:text-6xl font-black text-black leading-tight tracking-tighter mb-16">
              Driven by passion and grounded in expertise, our team turns bold
              ideas into reality, leading the way in creative innovation.
            </h2>

            <div className="border-t border-gray-200">
              {awards.map((award, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 30 }} 
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-gray-200 cursor-pointer"
                >
                  <span className="text-xs font-black uppercase tracking-widest text-black mb-2 md:mb-0">
                    {award.title}
                  </span>

                  <div className="flex items-center justify-between md:w-1/2">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest group-hover:text-black transition-colors">
                      {award.provider}
                    </span>
                    <span className="text-xs font-bold text-gray-300 group-hover:text-black transition-colors">
                      {award.year}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
