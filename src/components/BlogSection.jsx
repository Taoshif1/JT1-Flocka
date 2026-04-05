import React from "react";
import { motion } from "framer-motion";

const blogPosts = [
  {
    category: "WEB3",
    date: "NOV 07, 2025",
    title: "Seamless user interfaces, crafted with intent.",
    img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800",
    layout: "text-top",
  },
  {
    category: "WEB3",
    date: "NOV 07, 2025",
    title: "Creative web platforms, designed for growth.",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800",
    layout: "text-bottom",
  },
  {
    category: "WEB3",
    date: "NOV 07, 2025",
    title: "Immersive virtual journeys, built with precision.",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800",
    layout: "text-top",
  },
];

const BlogSection = () => {
  return (
    <section className="py-24 bg-[#f2f2f2] text-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">
            Insights
          </span>
          <h2 className="text-4xl md:text-5xl font-black leading-tight tracking-tighter">
            Company blog & updates
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {blogPosts.map((post, index) => {
            const isTextBottom = post.layout === "text-bottom";

            return (
              <motion.div
                key={index}
                whileHover="hover"
                className="group flex flex-col gap-2 cursor-pointer"
              >
                <div
                  className={`overflow-hidden rounded-t-[1.5rem] rounded-b-[2rem] ${isTextBottom ? "order-1" : "order-2"}`}
                >
                  <motion.div
                    variants={{ hover: { scale: 1.05 } }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="relative w-full aspect-[4/5] overflow-hidden"
                  >
                    <img
                      src={post.img}
                      alt={post.title}
                      className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                  </motion.div>
                </div>

                <div
                  className={`p-8 rounded-[2rem] ${isTextBottom ? "bg-white order-2" : "bg-black text-white order-1"} flex flex-col justify-between gap-4 h-48`}
                >
                  <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
                    <span
                      className={
                        isTextBottom ? "text-hyper-blue" : "text-gray-400"
                      }
                    >
                      {post.category}
                    </span>
                    <span className="text-gray-500">{post.date}</span>
                  </div>
                  <h4 className="text-2xl font-black leading-tight tracking-tight max-w-[280px]">
                    {post.title}
                  </h4>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <button className="group flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-black/50 hover:text-black transition-colors cursor-pointer">
            View All Updates
            <span className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center transition-all duration-500 rotate-0 group-hover:rotate-180 group-hover:bg-white group-hover:border-black/20">
              +
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
