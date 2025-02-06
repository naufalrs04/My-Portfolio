"use client";
import React from "react";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";

const Information = () => {
  return (
    <section className="relative w-full overflow-hidden">
  <div className="grid grid-cols-1 py-8 pb-2 sm:grid-cols-12 sm:py-20 items-center bg-transparent text-white relative z-10">
    {/* Foto Profil */}
    <div className="col-span-4 flex justify-center group transition-all duration-500">
      <div className="relative w-44 h-44 md:w-72 md:h-72 rounded-full overflow-hidden animate-spin-slow transition-transform duration-500 group-hover:scale-105">
        <Image
          src="/Information/my_photo.png"
          alt="my_photo"
          height="300"
          width="300"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
    </div>

    {/* Konten About Me */}
    <div className="col-span-8 text-center sm:text-left">
      <h2 className="text-2xl sm:text-5xl pt-8 sm:pb-8 px-4 sm:px-10 font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-gray-200 md:text-transparent bg-clip-text">
        About Me
      </h2>

      <p className="text-md sm:text-xl py-6 sm:py-0 px-4 sm:px-10 leading-relaxed font-sans text-[#CFE5FF]">
        I am a third-year Informatics undergraduate student at Universitas Diponegoro. 
        I am interested in problem-solving through programming and am continuously learning 
        about software engineering development. Additionally, I have a strong interest in 
        machine learning and am eager to explore its applications and advancements.
      </p>

      <div className="mt-4 sm:mt-8 px-4 sm:px-10 flex justify-center sm:justify-start">
        <a
          href="https://www.linkedin.com/in/naufalrs"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-lg font-semibold text-white bg-blue-800 rounded-lg shadow-lg hover:bg-blue-900 transition-all duration-300"
        >
          <FaLinkedin className="w-4 sm:w-5 h-4 sm:h-5" />
          LinkedIn
        </a>
      </div>
    </div>
  </div>

  <div className="absolute inset-0 z-0">
    {Array.from({ length: 60 }).map((_, i) => (
      <div
        key={i}
        className="absolute bg-white rounded-full opacity-80"
        style={{
          width: `${Math.random() * 3 + 1}px`,
          height: `${Math.random() * 3 + 1}px`,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animation: `twinkle ${Math.random() * 5 + 3}s infinite alternate ease-in-out`,
        }}
      />
    ))}
  </div>

  <style jsx>{`
    @keyframes twinkle {
      0% {
        opacity: 0.6;
      }
      50% {
        opacity: 1;
      }
      100% {
        opacity: 0.6;
      }
    }
  `}</style>
</section>

  );
};

export default Information;
