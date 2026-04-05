import React from "react";
import { motion } from "framer-motion";
import { TbStarFilled } from "react-icons/tb";

const feedbackData = [
  {
    id: 1,
    name: "Nicolas K. Ellington",
    role: "IT Specialist",
    review:
      "As we continued to use their tool and found more use cases, our feature requests quickly found their way into their backlog.",
    tag: "GREAT DESIGN SOLUTIONS",
    layout: "normal",
  },
  {
    id: 2,
    name: "Julian T. Beaumont",
    role: "Full-Stack Dev",
    review:
      "The level of technical expertise and the speed of delivery exceeded our expectations. Truly a powerful digital partner.",
    tag: "EXCELLENT EXECUTION",
    layout: "inverted",
  },
  {
    id: 3,
    name: "Felipe D. Hawthorne",
    role: "Product Manager",
    review:
      "They didn't just build what we asked for; they built what we actually needed to scale our branding globally.",
    tag: "STRATEGIC PARTNER",
    layout: "normal",
  },
];

const FeedbackCard = ({ data }) => {
  const isNormal = data.layout === "normal";

  const instant = { duration: 0 };

  const ProfileBox = (
    <motion.div
      variants={{
        hover: { backgroundColor: "#000000", color: "#ffffff" },
      }}
      transition={instant}
      className="p-8 rounded-[1.5rem] bg-white flex flex-col justify-center h-24 shadow-sm"
    >
      <h4 className="text-lg font-black tracking-tighter transition-none">
        {data.name}
      </h4>
      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest group-hover:text-white/40 transition-none">
        {data.role}
      </p>
    </motion.div>
  );

  const ReviewBox = (
    <motion.div
      variants={{
        hover: { backgroundColor: "#111111", color: "#ffffff" },
      }}
      transition={instant}
      className="p-10 rounded-[2rem] bg-white flex-1 flex flex-col justify-between gap-6 shadow-sm"
    >
      <div className="space-y-6">
        <div className="flex gap-1 text-orange-500 transition-none">
          {[...Array(5)].map((_, i) => (
            <motion.span
              key={i}
              variants={{ hover: { scale: 1.2, color: "#00ff88" } }} 
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <TbStarFilled size={16} />
            </motion.span>
          ))}
        </div>
        <p className="text-lg leading-relaxed font-medium transition-none">
          " {data.review} "
        </p>
      </div>
      <span className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40 group-hover:opacity-100 group-hover:text-green-400 transition-all duration-200">
        “ {data.tag} ”
      </span>
    </motion.div>
  );

  return (
    <motion.div
      whileHover="hover"
      whileTap={{ scale: 0.98 }}
      className="group flex flex-col gap-3 h-full cursor-pointer"
    >
      {isNormal ? (
        <>
          {ProfileBox}
          {ReviewBox}
        </>
      ) : (
        <>
          {ReviewBox}
          {ProfileBox}
        </>
      )}
    </motion.div>
  );
};

const UserFeedbacks = () => {
  return (
    <section className="py-32 bg-[#f2f2f2] text-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-20 border-t border-black/10 pt-12">
          <div className="flex items-center gap-3 mb-6 md:mb-0">
            <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-black">
              User Feedbacks
            </span>
          </div>

          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-6xl font-black leading-tight tracking-tighter">
              Accelerating growth, and unlocking new potential.
              <span className="inline-flex items-center -space-x-4 mx-4 translate-y-2">
                <img
                  src="https://i.pravatar.cc/100?u=a"
                  className="w-12 h-12 rounded-full border-2 border-white"
                />
                <img
                  src="https://i.pravatar.cc/100?u=b"
                  className="w-12 h-12 rounded-full border-2 border-white"
                />
                <img
                  src="https://i.pravatar.cc/100?u=c"
                  className="w-12 h-12 rounded-full border-2 border-white"
                />
              </span>
              Let's build your brand—together.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {feedbackData.map((feedback) => (
            <FeedbackCard key={feedback.id} data={feedback} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserFeedbacks;
