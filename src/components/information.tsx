"use client";
import React from "react";
import Image from "next/image";

const information = () => {
  return (
    <section>
      <div className="flex justify-center max-w-7xl mx-auto pt-10 px-4 md:px-8 lg:px-10">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-gradient-to-r from-transparent via-violet-500 to-transparent"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md shadow-lg">
            About Me
          </span>
          <span className="w-24 h-[2px] bg-gradient-to-r from-transparent via-violet-500 to-transparent"></span>
        </div>
      </div>
      <div className="grid grid-cols-1 py-10 sm:grid-cols-12 sm:py-28 items-center bg-transparent text-white">
        <div className="col-span-8 text-left">
          <p className="text-xl py-16 md:py-0 px-0 md:px-10 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit earum
            veritatis, sit veniam ipsum officia impedit delectus quos ipsa
            voluptas dolore vero necessitatibus voluptatibus est, minima
            molestias corrupti. Minus ut ad omnis natus impedit vel quam? Veniam
            tempore, laboriosam assumenda magni mollitia voluptas, autem quo
            amet sint eum nisi ullam.
          </p>
        </div>
        <div className="col-span-4 flex justify-center">
          <div className="relative w-72 h-72 grayscale hover:grayscale-0 rounded-xl overflow-hidden border-4 border-white animate-spin-slow">
            <div className="absolute inset-0 border-4 border-transparent rounded-xl animate-border-spin"></div>
            <Image
              src="/my_photo.jpg"
              alt="my_photo"
              height="300"
              width="300"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default information;


