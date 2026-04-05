import { Plus } from "lucide-react";

const BrandCard = () => {
  return (
    <div className="relative group overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-[1.5rem] w-full max-w-[300px] shadow-xl transition-all duration-500 hover:bg-white/15">
      <div className="flex gap-4 items-center mb-5">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100"
            alt="Lead Architect"
            className="w-12 h-12 rounded-xl object-cover grayscale group-hover:grayscale-0 transition-all duration-700 shadow-md"
          />
          <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
        </div>
        <div>
          <p className="text-[8px] uppercase text-blue-200 font-black tracking-[0.2em] mb-0.5">
            Lead Creative
          </p>
          <h3 className="font-bold text-white text-base">Taoshif Gazi</h3>
        </div>
      </div>

      <div className="space-y-3">
        <p className="text-xs text-white/70 leading-relaxed font-light">
          No cookie-cutter websites. Just real tools and smart strategies to{" "}
          <span className="text-white font-medium">
            elevate your digital presence.
          </span>
        </p>

        <button className="w-full mt-2 bg-white text-black py-3 rounded-lg flex items-center justify-center gap-2 font-bold text-[10px] tracking-widest hover:bg-blue-400 hover:text-white transition-all active:scale-95 cursor-pointer group/btn">
          LET'S COLLABORATE
          <Plus
            size={14}
            className="transition-transform duration-500 group-hover/btn:rotate-90"
          />
        </button>
      </div>
    </div>
  );
};

export default BrandCard;
