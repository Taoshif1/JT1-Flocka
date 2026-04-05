const Logo = ({ light = true }) => (
  <div className="flex items-center gap-3 group cursor-pointer">
    <div className="relative w-10 h-10 flex items-center justify-center">
      <div
        className={`absolute inset-0 ${light ? "bg-white/20" : "bg-black/10"} backdrop-blur-md rounded-full border ${light ? "border-white/30" : "border-black/20"} group-hover:scale-110 transition-all duration-500`}
      ></div>
      <span
        className={`relative font-black text-xl ${light ? "text-white" : "text-black"} tracking-tighter`}
      >
        F.
      </span>
    </div>
    <h1
      className={`text-2xl font-bold tracking-tighter ${light ? "text-white" : "text-black"}`}
    >
      Floka
    </h1>
  </div>
);

export default Logo;
