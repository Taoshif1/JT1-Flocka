import { Mail, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Logo from "./Logo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navStyles = scrolled
    ? "mt-5 w-[95%] md:w-[85%] lg:w-[70%] bg-white/40 backdrop-blur-xl border border-white/20 shadow-2xl rounded-full py-3"
    : "mt-0 w-full bg-transparent py-8";

  const textColor = scrolled ? "text-black" : "text-white";
  const iconBg = scrolled ? "bg-black" : "bg-white";
  const emailBorder = scrolled ? "border-black/20" : "border-white/20";

  const linkStyles = `hover:opacity-60 cursor-pointer transition-all relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] ${
    scrolled ? "after:bg-black" : "after:bg-white"
  } hover:after:w-full after:transition-all after:duration-300`;

  return (
    <nav className="fixed top-0 w-full flex justify-center z-[100] transition-all duration-500 ease-in-out pointer-events-none">
      <div
        className={`flex justify-between items-center px-8 md:px-12 transition-all duration-500 ease-in-out pointer-events-auto ${navStyles}`}
      >
        <div className="flex-1 flex justify-start">
          <Logo light={!scrolled} />
        </div>

        <div className="hidden lg:flex justify-center">
          <ul
            className={`flex gap-10 font-bold text-[10px] uppercase tracking-[0.2em] transition-colors duration-500 ${textColor}`}
          >
            <li className={linkStyles}>Home</li>
            <li className={linkStyles}>Pages</li>
            <li className={linkStyles}>Portfolio</li>
            <li className={linkStyles}>Blog</li>
          </ul>
        </div>

        <div className="flex-1 flex justify-end items-center gap-6">
          <a
            href="mailto:taoshif2@gmail.com"
            className={`hidden md:flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.2em] border-b pb-0.5 transition-all duration-500 ${textColor} ${emailBorder} hover:opacity-50`}
          >
            <Mail size={12} />
            Contact
          </a>

          <div className="grid grid-cols-2 gap-1 cursor-pointer group">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className={`w-1 h-1 rounded-full transition-all duration-500 ${iconBg} group-hover:scale-125`}
              ></div>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`transition-all duration-500 cursor-pointer z-[110] lg:hidden ${textColor}`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 w-full h-screen bg-black/95 flex flex-col items-center justify-center gap-8 text-white z-[105] animate-in fade-in zoom-in duration-300 pointer-events-auto">
          <ul className="text-5xl font-black flex flex-col gap-6 text-center tracking-tighter uppercase">
            {["Home", "Pages", "Portfolio", "Blog"].map((item) => (
              <li
                key={item}
                className="hover:text-blue-400 transition-colors cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
