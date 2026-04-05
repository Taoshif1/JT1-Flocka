import { Mail, Menu, X } from "lucide-react";
import { useState } from "react";
import Logo from "./Logo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkStyles =
    "hover:text-white cursor-pointer transition-all relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-white hover:after:w-full after:transition-all after:duration-300";

  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-6 md:px-16 py-6 transition-all duration-300">
      
      {/*  Logo */}
      <Logo light={true}></Logo>

      {/* Desktop Links */}
      <ul className="hidden lg:flex gap-12 font-medium text-[11px] uppercase tracking-[0.2em] text-white/80">
        <li className={linkStyles}>Home</li>
        <li className={linkStyles}>Pages</li>
        <li className={linkStyles}>Portfolio</li>
        <li className={linkStyles}>Blog</li>
      </ul>

      {/* Right Section */}
      <div className="flex items-center gap-6">
        <a
          href="mailto:info@floka.com"
          className="hidden sm:flex items-center gap-2 text-xs font-semibold text-white/90 uppercase tracking-widest border-b border-white/20 pb-1 hover:text-white transition-colors"
        >
          <Mail size={14} />
          info@floka.com
        </a>

        {/* 4-Dots Icon */}
        <div className="grid grid-cols-2 gap-1.5 cursor-pointer group">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="w-1.5 h-1.5 bg-white rounded-full group-hover:bg-blue-300 transition-colors"
            ></div>
          ))}
        </div>

        {/* Hamburger Menu  */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white hover:scale-110 transition-transform cursor-pointer z-[70] lg:hidden"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Overlay */}
      {isOpen && (
        <div className="fixed inset-0 w-full h-screen bg-black/95 flex flex-col items-center justify-center gap-8 text-white z-[60] animate-in fade-in duration-300">
          <ul className="text-3xl font-bold flex flex-col gap-8 text-center tracking-tighter">
            <li
              className="hover:text-blue-300 transition-colors cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              HOME
            </li>
            <li
              className="hover:text-blue-300 transition-colors cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              PAGES
            </li>
            <li
              className="hover:text-blue-300 transition-colors cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              PORTFOLIO
            </li>
            <li
              className="hover:text-blue-300 transition-colors cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              BLOG
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
