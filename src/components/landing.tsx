"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
// import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

const Landing = () => {
  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    // <BackgroundBeamsWithCollision className="min-h-screen">
      <section className="flex flex-col items-center justify-center min-h-screen text-center bg-transparent text-white">
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold mb-4 z-40">
          Hello, <br /> My Name is Naufal <br /> I&apos;m a{" "}
          <TypeAnimation
            sequence={[
              "Computer Science Student",
              1000,
              "Web-Developer",
              1000,
              "Machine Learning Engineer",
              1000,
            ]}
            wrapper="span"
            speed={20}
            repeat={Infinity}
            className="bg-gradient-to-r from-blue-400 to-green-400 text-transparent bg-clip-text"
          />
        </h1>
        <div className="my-8 flex items-center gap-7 z-40">
          <Link
            href="https://github.com/naufalrs04"
            target="_blank"
            className="transition-all text-pink-500 hover:scale-125 duration-300"
          >
            <BsGithub size={40} />
          </Link>
          <Link
            href="www.linkedin.com/in/naufalrs"
            target="_blank"
            className="transition-all text-pink-500 hover:scale-125 duration-300"
          >
            <BsLinkedin size={40} />
          </Link>
          <Link
            href="https://www.instagram.com/naufalrs_04"
            target="_blank"
            className="transition-all text-pink-500 hover:scale-125 duration-300"
          >
            <FaInstagram size={40} />
          </Link>
          <Link
            href="https://wa.me/6281225717674"
            target="_blank"
            className="transition-all text-pink-500 hover:scale-125 duration-300"
          >
            <FaWhatsapp size={40} />
          </Link>
        </div>
        <div className="flex justify-center gap-4 md:gap-10 mt-5">
          <Link
            href="/#contact"
            className="px-6 py-3 rounded-full text-sm md:text-base text-white font-semibold bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 hover:scale-105 hover:shadow-lg w-[140px] md:w-[170px] z-40"
          >
            Contact Me
          </Link>
          <a
            href="/CV/Naufal_Rizki_Saputra_CV.pdf"
            download
            className="px-6 py-3 rounded-full text-sm md:text-base text-white font-semibold bg-gradient-to-r from-green-600 to-yellow-600 hover:scale-105 hover:shadow-lg w-[140px] md:w-[170px] z-40"
          >
            Download CV
          </a>
        </div>

        <motion.div
          className="absolute bottom-3 cursor-pointer flex flex-col items-center z-40"
          onClick={handleScroll}
          initial={{ y: 0 }}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <FaArrowDown
            className="text-white hover:scale-110 transition-transform"
            size={30}
          />
          <h2 className="text-sm sm:text-base">more info</h2>
        </motion.div>
      </section>
    // </BackgroundBeamsWithCollision>
  );
};

export default Landing;
