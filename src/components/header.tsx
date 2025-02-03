"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

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
          ? "bg-gradient-to-r border-b-2 border-indigo-800 from-black via-indigo-900 to-black"
          : "bg-black"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-white tracking-wide relative">
          NOPAL
          <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500"></span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-gray-300 font-semibold">
          {["About", "Experience", "Skill", "Project", "Education"].map(
            (item) => (
              <button
                key={item}
                className="hover:text-white transition duration-300"
                onClick={() => handleNavClick(item.toLowerCase())}
              >
                {item}
              </button>
            )
          )}
        </div>

        {/* Hamburger Menu Button */}
        <button
          className="md:hidden text-white p-2 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute left-0 top-full w-full bg-gradient-to-r from-black via-indigo-900 to-black shadow-lg transition-all duration-500 ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-5 pointer-events-none"
        }`}
      >
        {isOpen && (
          <div className="py-4 flex flex-col items-center">
            {["About", "Experience", "Skill", "Project", "Education"].map(
              (item, index, array) => (
                <button
                  key={item}
                  className={`text-gray-300 transition duration-300 px-6 py-3 w-full text-center border-gray-700 hover:shadow-lg hover:border-t-2 hover:border-b-2 border-white`}
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
