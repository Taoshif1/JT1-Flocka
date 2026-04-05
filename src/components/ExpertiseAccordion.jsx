import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TbPlus, TbMinus } from "react-icons/tb";

const expertiseData = [
  {
    id: "01",
    title: "User Interface & Experience Design",
    description:
      "From brand strategy to immersive digital experiences, we offer end-to-end creative solutions tailored to your unique vision.",
    tags: ["BRANDING", "MAGAZINE", "PRODUCT"],
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800",
  },
  {
    id: "02",
    title: "Web Development",
    description:
      "Building high-performance, scalable web applications using modern stacks like MERN, ensuring speed and security.",
    tags: ["REACT", "NEXT.JS", "ANIMATION"],
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800",
  },
  {
    id: "03",
    title: "Search Engine Optimization",
    description:
      "Data-driven strategies to boost your organic visibility and ensure your brand reaches the right audience at the right time.",
    tags: ["ANALYTICS", "STRATEGY", "GROWTH"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800",
  },
  {
    id: "04",
    title: "Low-Code Development",
    description:
      "Rapid prototyping and deployment using premium low-code tools to get your MVP to market faster than ever.",
    tags: ["WEBFLOW", "SHOPIFY", "FRAMER"],
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800",
  },
];

const ExpertiseAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 bg-[#030303] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-8xl font-black uppercase leading-[0.8] tracking-tighter">
            Company <br />
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "1px #444" }}
            >
              expertise
            </span>
          </h2>
        </div>

        <div className="border-t border-white/10">
          {expertiseData.map((item, index) => (
            <div
              key={item.id}
              className="border-b border-white/10 group cursor-pointer"
              onClick={() => setActiveIndex(index)}
            >
              <div className="flex flex-col md:flex-row py-8 items-start md:items-center justify-between gap-8">
                <div className="flex items-center gap-8 flex-1">
                  <div
                    className={`w-10 h-10 rounded-full border border-white/20 flex items-center justify-center transition-colors ${activeIndex === index ? "bg-white text-black" : "group-hover:border-white"}`}
                  >
                    {activeIndex === index ? (
                      <TbMinus size={20} />
                    ) : (
                      <TbPlus size={20} />
                    )}
                  </div>
                  <h3
                    className={`text-2xl md:text-3xl font-bold transition-all ${activeIndex === index ? "text-white" : "text-gray-500 group-hover:text-gray-300"}`}
                  >
                    {item.title}
                  </h3>
                </div>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="flex flex-col md:flex-row gap-10 items-start overflow-hidden w-full"
                    >
                      <div className="max-w-md space-y-6">
                        <p className="text-gray-400 text-lg leading-relaxed">
                          {item.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-4 py-1.5 rounded-full border border-white/10 text-[10px] font-black tracking-widest bg-white/5"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <motion.div
                        initial={{ scale: 0.8, x: 20 }}
                        animate={{ scale: 1, x: 0 }}
                        className="relative w-full md:w-[400px] aspect-[16/10] rounded-3xl overflow-hidden border border-white/5 shadow-2xl"
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <button className="group flex items-center gap-4 bg-white text-black px-8 py-4 rounded-full font-black text-xs tracking-widest uppercase hover:bg-hyper-blue hover:text-white transition-all">
            <span className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center group-hover:bg-white/20">
              <TbPlus size={18} />
            </span>
            Hire Us Today
          </button>
        </div>
      </div>

      <div className="mt-32 border-t border-white/5 py-12 flex overflow-hidden select-none">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap gap-20 items-center text-sm font-bold text-gray-500 italic uppercase tracking-wider"
        >
          <div className="flex items-center gap-4">
            <img
              src="https://i.pravatar.cc/40?u=1"
              className="rounded-full w-8 h-8 grayscale"
            />{" "}
            "Best design communicator"
          </div>
          <div className="flex items-center gap-4">
            <img
              src="https://i.pravatar.cc/40?u=2"
              className="rounded-full w-8 h-8 grayscale"
            />{" "}
            "10/10 well recommended"
          </div>
          <div className="flex items-center gap-4">
            <img
              src="https://i.pravatar.cc/40?u=3"
              className="rounded-full w-8 h-8 grayscale"
            />{" "}
            "Super speedy website designer"
          </div>
          <div className="flex items-center gap-4">
            <img
              src="https://i.pravatar.cc/40?u=4"
              className="rounded-full w-8 h-8 grayscale"
            />{" "}
            "Great in UI/UX"
          </div>
          <div className="flex items-center gap-4">
            <img
              src="https://i.pravatar.cc/40?u=1"
              className="rounded-full w-8 h-8 grayscale"
            />{" "}
            "Best design communicator"
          </div>
          <div className="flex items-center gap-4">
            <img
              src="https://i.pravatar.cc/40?u=2"
              className="rounded-full w-8 h-8 grayscale"
            />{" "}
            "10/10 well recommended"
          </div>
          <div className="flex items-center gap-4">
            <img
              src="https://i.pravatar.cc/40?u=3"
              className="rounded-full w-8 h-8 grayscale"
            />{" "}
            "Super speedy website designer"
          </div>
          <div className="flex items-center gap-4">
            <img
              src="https://i.pravatar.cc/40?u=4"
              className="rounded-full w-8 h-8 grayscale"
            />{" "}
            "Great in UI/UX"
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExpertiseAccordion;
