"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

const Landing = () => {
  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <BackgroundBeamsWithCollision className="min-h-screen">
      <section className="flex flex-col items-center justify-center min-h-screen text-center bg-transparent text-white relative">
        <h1 className="text-3xl sm:text-3xl lg:text-5xl font-extrabold mb-4">
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
        <div className="my-12 flex items-center gap-7">
          <Link
            href=""
            target="_blank"
            className="transition-all text-pink-500 hover:scale-125 duration-300"
          >
            <BsGithub size={40} />
          </Link>
          <Link
            href=""
            target="_blank"
            className="transition-all text-pink-500 hover:scale-125 duration-300"
          >
            <BsLinkedin size={40} />
          </Link>
          <Link
            href=""
            target="_blank"
            className="transition-all text-pink-500 hover:scale-125 duration-300"
          >
            <FaInstagram size={40} />
          </Link>
          <Link
            href=""
            target="_blank"
            className="transition-all text-pink-500 hover:scale-125 duration-300"
          >
            <FaWhatsapp size={40} />
          </Link>
        </div>
        <div className="flex gap-4 mt-5">
          <Link
            href="/#contact"
            className="px-6 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:scale-105 hover:shadow-lg"
          >
            Contact Me
          </Link>
          <Link
            href="/"
            className="px-6 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-green-500 to-yellow-500 hover:scale-105 hover:shadow-lg"
          >
            Download CV
          </Link>
        </div>
        <motion.div
          className="absolute bottom-20 cursor-pointer align-middle flex flex-col items-center"
          onClick={handleScroll}
          initial={{ y: 0 }}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <FaArrowDown
            size={40}
            className="text-white hover:scale-110 transition-transform"
          />
          <h2>more info</h2>
        </motion.div>
      </section>
    </BackgroundBeamsWithCollision>
  );
};

export default Landing;
