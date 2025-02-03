"use client";

import { useState, useEffect, ReactNode } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import Nav from "../components/header";
import Landing from "@/components/landing";
import Information from "@/components/information";
import Skills from "@/components/skills";
import Experience from "@/components/experiences";
import Project from "@/components/projects";
import Education from "@/components/educations";
import Footer from "@/components/footer";

export default function Home() {
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
      viewport={{ amount: 0.3 }} 
      className="my-10"
    >
      {children}
    </motion.section>
  );
};

// 🔹 Komponen Divider
const Divider = () => (
  <div className="flex justify-center -translate-y-[1px]">
    <div className="w-3/4">
      <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
    </div>
  </div>
);
