import { Mail } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-10 py-6 bg-transparent">
      {/* Logo */}
      <div className="flex items-center gap-2 cursor-pointer">
        <div className="bg-black text-white p-1 rounded">
          <span className="font-black text-xl">F</span>
        </div>
        <h1 className="text-2xl font-bold tracking-tighter">Floka</h1>
      </div>

      {/* Nav Links */}
      <ul className="hidden md:flex gap-10 font-medium text-sm uppercase tracking-widest">
        <li className="hover:text-gray-500 cursor-pointer transition">Home</li>
        <li className="hover:text-gray-500 cursor-pointer transition">Pages</li>
        <li className="hover:text-gray-500 cursor-pointer transition">Portfolio</li>
        <li className="hover:text-gray-500 cursor-pointer transition">Blog</li>
      </ul>

      {/* Right Side Info */}
      <div className="flex items-center gap-4">
        <a href="mailto:info@floka.com" className="flex items-center gap-2 text-sm font-medium">
          <Mail size={16} />
          info@floka.com
        </a>
        <div className="grid grid-cols-2 gap-1 cursor-pointer hover:rotate-90 transition-all duration-300">
           {[...Array(4)].map((_, i) => <div key={i} className="w-1 h-1 bg-black rounded-full"></div>)}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;