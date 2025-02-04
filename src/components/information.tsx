"use client";
import React from "react";
import Image from "next/image";

const information = () => {
  return (
    <section>
      <div className="flex justify-center max-w-7xl mx-auto pt-10 px-4 md:px-8 lg:px-10">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-gradient-to-r from-transparent via-violet-500 to-transparent"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 sm:text-sm lg:text-xl rounded-md shadow-lg">
            About Me
          </span>
          <span className="w-24 h-[2px] bg-gradient-to-r from-transparent via-violet-500 to-transparent"></span>
        </div>
      </div>
      <div className="grid grid-cols-1 pt-10 pb-2 sm:grid-cols-12 sm:py-20 items-center bg-transparent text-white">
        <div className="col-span-4 flex justify-center">
          <div className="relative w-44 h-44 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-white animate-spin-slow">
            <div className="absolute inset-0 border-4 border-transparent rounded-xl animate-border-spin"></div>
            <Image
              src="/Information/my_photo.png"
              alt="my_photo"
              height="300"
              width="300"
              className="object-cover"
            />
          </div>
        </div>
        <div className="col-span-8 text-left">
          <p className="text-sm md:text-xl py-16 md:py-0 px-0 md:px-10 text-justify leading-relaxed font-sans">
            I am a third-year Informatics undergraduate student at Universitas
            Diponegoro. I am interested in problem-solving through programming
            and am continuously learning about the development of programming
            for software engineering. Additionally, I have a strong interest in
            the field of machine learning and am eager to explore its
            applications and advancements.
          </p>
        </div>
      </div>
    </section>
  );
};

export default information;
