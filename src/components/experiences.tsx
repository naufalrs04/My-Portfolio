"use client" ;
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { HoverEffect } from "@/components/ui/card-hover-effect";

export const item1 = [
  {
    id : 1,
    time : "August 2024 - Now",
    description1: "RESEARCH ASSISTANT - Prajanto Wahyu Adi, M.Kom",
    description2:
      "I work as a research assistant, helping my lecturer conduct Machine Learning experiments with the goal of publishing in academic journals. My tasks include data preprocessing, model building, hyperparameter tuning, and feature selection",
  },
  {
    id : 2,
    time : "January 2025 - February 2025",
    description1: "WEB-DEVELOPER INTERN - Politeknik Pekerjaan Umum",
    description2:
      "Developed a web-based attendance application integrated with location tracking, selfie verification, and employee management system. Responsible for designing and implementing features, optimizing application performance, and ensuring data accuracy and security in the attendance system.",
  },
];

export const item2 = [
  {
    id : 1,
    time : "August 2024 - December 2024",
    description1: "DATA STRUCTRURE LABORATORY ASSISTANT",
    description2:
      "Taught students data structures using C. Covered some fundamental topics, explained implementation techniques, and algorithm efficiency. Led lab sessions, provided hands-on coding exercises, and assisted students in debugging and optimizing their programs.",
  },
  {
    id : 2,
    time : "February 2024 - October 2024",
    description1: "ALGORITHM AND PROGRAMMING LABORATORY ASSISTANT",
    description2:
      "Taught students the fundamentals of programming using C. Explained procedural programming concepts, demonstrated coding techniques, and helped students debug their code. Led lab sessions to strengthen their problem-solving and algorithmic thinking skills.",
  },
]

export const item3 = [
  {
    id : 1,
    time : "August 2023 - December 2023",
    description1: "BASIC PROGRAMMING LABORATORY ASSISTANT",
    description2:
      "Taught students programming using Python. Explained functional programming concepts, demonstrated coding techniques, and helped students debug their code. Led lab sessions to enhance their problem-solving and algorithmic thinking skills.",
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
