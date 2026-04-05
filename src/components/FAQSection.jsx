import React, { useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { TbPlus, TbMinus } from "react-icons/tb";

const faqData = [
  {
    id: 1,
    question: "What is artificial intelligence (AI)?",
    answer:
      "Explore how we transform ideas into extraordinary digital experiences. Each case study is a testament to our design thinking, strategic approach, and creative execution.",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600",
  },
  {
    id: 2,
    question: "How does AI improve business efficiency?",
    answer:
      "Our development team constructs robust, high-performance backends that ensure your application is secure, scalable, and built to handle massive traffic.",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600",
  },
  {
    id: 3,
    question: "How long does AI implementation take?",
    answer:
      "As we continued to use their tool and found more use cases, our feature requests quickly found their way into their backlog, allowing us to pivot faster.",
    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600",
  },
  {
    id: 4,
    question: "What industries can benefit from AI?",
    answer:
      "Creating high-performance digital experiences through code and creative strategy. We bridge the gap between imagination and technical execution.",
    img: "https://images.unsplash.com/photo-1563207151-f3b609c9165b?q=80&w=600",
  },
];

const FAQSection = () => {
  const [openId, setOpenId] = useState(1);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const xMove = useTransform(scrollYProgress, [0, 1], [0, -500]);

  return (
    <section
      ref={containerRef}
      className="bg-[#f5f5f7] py-24 px-6 md:px-20 overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto mb-20">
        <div className="mb-16 space-y-4">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">
            FAQ & Get Answer
          </span>
          <div className="flex justify-end">
            <h2 className="text-5xl md:text-7xl font-black text-black leading-[0.9] tracking-tighter text-right lg:max-w-2xl">
              Have more questions? We’ve answers.
            </h2>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Image Left */}
          <div className="lg:w-1/3 w-full">
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-2 border-white sticky top-10">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800"
                alt="Support"
                className="w-full h-[500px] object-cover"
              />
              <div className="p-8 bg-white">
                <p className="text-gray-500 font-medium text-lg">
                  Don't found anything yet. Feel free to ask anything.{" "}
                  <span className="text-black font-black underline cursor-pointer">
                    Let's Talk
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3 w-full space-y-4">
            {faqData.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 group"
              >
                <button
                  onClick={() => setOpenId(openId === item.id ? -1 : item.id)}
                  className="w-full flex items-center justify-between p-8 text-left transition-colors hover:bg-gray-50"
                >
                  <span className="text-xl font-bold text-black tracking-tight flex-1">
                    {item.question}
                  </span>

                  <motion.div
                    animate={{ rotate: openId === item.id ? 180 : 0 }}
                    className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center shadow-lg"
                  >
                    {openId === item.id ? (
                      <TbMinus size={20} />
                    ) : (
                      <TbPlus size={20} />
                    )}
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openId === item.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="p-10 pt-0 flex flex-col md:flex-row gap-8 items-start">
                        <motion.div
                          initial={{ scale: 0.95 }}
                          animate={{ scale: 1 }}
                          className="w-full md:w-64 h-40 rounded-2xl overflow-hidden flex-shrink-0"
                        >
                          <img
                            src={item.img}
                            alt={item.question}
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                          />
                        </motion.div>

                        <div className="space-y-8 flex-1">
                          <p className="text-gray-500 font-medium leading-relaxed text-lg">
                            {item.answer}
                          </p>

                          <div className="flex items-center gap-6">
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-full font-black text-[11px] uppercase tracking-widest shadow-md"
                            >
                              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                                <TbPlus size={14} />
                              </div>
                              Get in Touch
                            </motion.button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full border-t border-gray-200 pt-8 pb-4">
        <div className="max-w-7xl mx-auto overflow-hidden px-10">
          <motion.div
            style={{ x: xMove }}
            className="flex gap-8 whitespace-nowrap"
          >
            {[...Array(80)].map((_, i) => (
              <div
                key={i}
                className="w-[1.5px] h-4 bg-black flex-shrink-0"
                style={{ opacity: i % 4 === 0 ? 1 : 0.2 }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
