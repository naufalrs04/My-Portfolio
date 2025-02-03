"use client" ;

import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { desc } from "motion/react-client";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link} from "@heroui/react";
import { HoverEffect } from "@/components/ui/card-hover-effect";


export const item1 = [
  {
    id : 1,
    time : "August 2024 - Now",
    description1: "RESEARCH ASSISTANT",
    description2:
      "I work as a research assistant, helping my lecturer conduct Machine Learning experiments with the goal of publishing in academic journals. My tasks include data preprocessing, model building, hyperparameter tuning, and feature selection",
  },
  {
    id : 2,
    time : "January 2025 - February 2025",
    description1: "SOFTWARE ENGINEER INTERN",
    description2:
      "I worked as a software engineer intern at a startup company. I was responsible for developing a web application using React.js and Node.js. I also worked on the backend, creating RESTful APIs and integrating third-party services.",
  },
];

export const item2 = [
  {
    id : 1,
    time : "August 2024 - December 2024",
    description1: "DATA STRUCTRURE LABORATORY ASSISTANT",
    description2:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id : 2,
    time : "February 2024 - October 2024",
    description1: "ALGORITHM AND PROGRAMMING LABORATORY ASSISTANT",
    description2:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
]

export const item3 = [
  {
    id : 1,
    time : "August 2023 - December 2023",
    description1: "BASIC PROGRAMMING LABORATORY ASSISTANT",
    description2:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  }
]
export default function Experience() {
  const data = [
    {
      title: "2025",
      content: (
        <HoverEffect items={item1} />
        
      ),
    },
    {
      title: "2024",
      content: (
        
        <HoverEffect items={item2} />
        
      ),
    },
    {
      title: "2023",
      content: (
        
        <HoverEffect items={item3} />
        
      ),
    }
  ];
  return (
    <section className="w-full">
      <Timeline data={data} />
    </section>
  );
}
