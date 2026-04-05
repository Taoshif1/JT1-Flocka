import { Plus } from "lucide-react";

const BrandCard = () => {
  return (
    <div className="bg-white p-6 rounded-2xl w-80 shadow-2xl flex flex-col gap-4">
      <div className="flex gap-4 items-center">
        <img 
          src="https://i.pravatar.cc/100?img=33" 
          alt="Almond D. Nelsi" 
          className="w-16 h-16 rounded-xl object-cover"
        />
        <div>
          <p className="text-[10px] uppercase text-gray-400 font-bold tracking-widest">Head of Idea</p>
          <h3 className="font-bold text-gray-800">Almond D. Nelsi</h3>
          <button className="mt-2 flex items-center gap-2 text-xs font-bold hover:gap-3 transition-all">
            <div className="bg-black text-white p-1 rounded-full"><Plus size={12}/></div>
            LET'S TALK
          </button>
        </div>
      </div>
      <div className="border-t pt-4">
        <p className="text-sm text-gray-600 font-medium">
          No cookie-cutter websites. No fluff. Just real tools and smart strategies.
        </p>
      </div>
    </div>
  );
};

export default BrandCard;