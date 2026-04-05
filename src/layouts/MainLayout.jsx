import Navbar from "../components/Navbar";

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#f8f8f8] selection:bg-black selection:text-white">
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
