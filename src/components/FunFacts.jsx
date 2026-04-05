import React from "react";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TbPlus, TbStarFilled } from "react-icons/tb";

gsap.registerPlugin(ScrollTrigger);

const FunFacts = () => {
  const containerRef = React.useRef();
  const imageRef = React.useRef();

  useGSAP(
    () => {
      gsap.to(imageRef.current, {
        y: -50,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="py-24 bg-[#f9f9f9] text-black overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16 items-center">
        <div className="w-full lg:w-1/2 relative group rounded-[2.5rem] overflow-hidden shadow-2xl">
          <motion.div
            ref={imageRef}
            className="relative h-[600px] w-full"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.6, ease: "circOut" }}
          >
            <img
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000"
              className="absolute inset-0 w-full h-full object-cover group-hover:opacity-0 transition-opacity duration-700"
              alt="Design team"
            />
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000"
              className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700 scale-110 group-hover:scale-100"
              alt="Functional results"
            />
          </motion.div>
          <div className="absolute right-[-15px] top-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-black/10 bg-white flex items-center justify-center shadow-lg z-10">
            <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col gap-8">
          <div className="space-y-4">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">
              Fun Facts
            </span>
            <h2 className="text-4xl md:text-5xl font-black leading-tight tracking-tighter">
              Consistently delivering impactful results through a perfect blend
              of design and functionality.
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-8 rounded-3xl flex flex-col justify-between h-32 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <p className="text-gray-400 text-xs font-bold leading-tight">
                Successful projects
                <br />
                completed
              </p>
              <h3 className="text-4xl font-black text-black">
                2k<span className="text-gray-300">+</span>
              </h3>
            </div>

            <div className="row-span-2 bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex gap-1 text-orange-500">
                  {[...Array(5)].map((_, i) => (
                    <TbStarFilled key={i} size={18} />
                  ))}
                </div>
                <h3 className="text-7xl font-black tracking-tighter">4.9/5</h3>
              </div>
              <div className="space-y-6">
                <p className="text-gray-500 text-sm leading-relaxed">
                  We offer end-to-end creative solutions that make brands
                  unforgettable.
                </p>
                <button className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest group">
                  <span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center group-hover:bg-hyper-blue transition-colors">
                    <TbPlus size={14} />
                  </span>
                  Hire Us Now
                </button>
              </div>
            </div>

            <motion.div
              whileHover="hover"
              className="relative bg-black p-8 rounded-3xl h-72 flex flex-col justify-end overflow-hidden group/split"
            >
              <div className="absolute top-8 left-1/2 -translate-x-1/2 w-32 h-32">
                <motion.img
                  variants={{ hover: { x: -40, rotate: -15, y: -10 } }}
                  src="https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=300"
                  className="absolute inset-0 w-full h-full object-cover rounded-xl border-2 border-black shadow-xl z-30"
                />
                <motion.img
                  variants={{ hover: { rotate: 0, y: -20 } }}
                  src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=300"
                  className="absolute inset-0 w-full h-full object-cover rounded-xl border-2 border-black shadow-xl z-20"
                />
                <motion.img
                  variants={{ hover: { x: 40, rotate: 15, y: -10 } }}
                  src="https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=300"
                  className="absolute inset-0 w-full h-full object-cover rounded-xl border-2 border-black shadow-xl z-10"
                />
              </div>

              <div className="relative z-40">
                <p className="text-gray-400 text-[10px] leading-relaxed">
                  More than 2k+ projects completed—each crafted to deliver
                  real-world results for ambitious brands.
                </p>
              </div>
            </motion.div>

            <div className="bg-[#1a1a1a] p-8 rounded-3xl relative overflow-hidden h-32 group">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800"
                className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-110 transition-transform duration-700"
              />
              <div className="relative z-10 flex justify-between items-end h-full">
                <p className="text-white text-xs font-bold max-w-[80px]">
                  Worldwide base around the world
                </p>
                <h3 className="text-4xl font-black text-white">
                  5<span className="text-gray-500">+</span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunFacts;
