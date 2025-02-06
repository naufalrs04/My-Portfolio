"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Cek apakah halaman di-scroll
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Fungsi untuk navigasi ke section dengan smooth scroll
  const handleNavClick = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); // Tutup menu mobile setelah klik
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full py-5 shadow-lg z-50 px-4 transition-all duration-300 ${
        isScrolled
          ? "bg-gradient-to-r from-black via-indigo-900 to-black"
          : "bg-black"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-3xl font-bold tracking-wide relative bg-gradient-to-r from-indigo-400 via-grey-200 to-white bg-clip-text text-transparent font-orbitron">
          Zergione.
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-gray-300 font-semibold">
          {["About", "Experience", "Skill", "Project", "Education"].map(
            (item) => (
              <button
                key={item}
                className="relative group hover:text-white transition duration-300"
                onClick={() => handleNavClick(item.toLowerCase())}
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-600 group-hover:w-full"></span>
              </button>
            )
          )}
        </div>

        <button
          className="md:hidden text-white p-2 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute left-0 top-full w-full bg-black shadow-lg transition-all duration-500 ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-5 pointer-events-none"
        }`}
      >
        {isOpen && (
          <div className="py-4 flex flex-col items-center">
            {["About", "Experience", "Skill", "Project", "Education"].map(
              (item) => (
                <button
                  key={item}
                  className={`text-gray-300 transition duration-300 px-6 py-3 w-full text-center hover:shadow-lg border-t-2 border-black`}
                  onClick={() => handleNavClick(item.toLowerCase())}
                >
                  {item}
                </button>
              )
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
