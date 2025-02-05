"use client";

import { useState, useEffect, ReactNode } from "react";
import { motion } from "framer-motion";
import Nav from "../components/header";
import Landing from "@/components/landing";
import Information from "@/components/information";
import Skills from "@/components/skills";
import Experience from "@/components/experiences";
import Project from "@/components/projects";
import Education from "@/components/educations";
import Footer from "@/components/footer";
import { FaArrowUp } from "react-icons/fa";

export default function Home() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <Nav />
      <div className="container mx-auto py-6 px-6 sm:px-12 lg:px-24">
        <Landing />
        <Divider />
        <Section id="about">
          <Information />
        </Section>
        <Divider />
        <Section id="experience">
          <Experience />
        </Section>
        <Divider />
        <Section id="skill">
          <Skills />
        </Section>
        <Divider />
        <Section id="project">
          <Project />
        </Section>
        <Divider />
        <Section id="education">
          <Education />
        </Section>
      </div>
      <Footer />

      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-7 right-7 bg-blue-700 text-white p-2 sm:p-3 md:p-4 rounded-full shadow-lg hover:bg-blue-800 transition-all z-50"
        >
          <FaArrowUp className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
        </button>
      )}
    </div>
  );
}

interface SectionProps {
  id: string;
  children: ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, children }) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ amount: 0.1 }}
      className="my-10"
    >
      {children}
    </motion.section>
  );
};

const Divider = () => (
  <div className="flex justify-center -translate-y-[1px]">
    <div className="w-3/4">
      <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
    </div>
  </div>
);
