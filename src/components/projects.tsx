"use client";
import React from "react";

const projects = [
  {
    id: 1,
    title: "Web-based Application",
    subtitle: "SPARTA",
    description:
      "Academic information system designed to help students create Study Plan Forms (IRS) with features tailored to other roles as needed",
    technologies: ["Laravel", "Tailwind CSS", "Flowbite", "MySQL"],
    image: "/Projects/Cover_SPARTA.png",
    github: "https://github.com/naufalrs04/SPARTA.git",
  },
  {
    id: 2,
    title: "Web-based Application",
    subtitle: "PALMA",
    description:
      "An employee attendance app with selfie verification and location tracking",
    technologies: ["React", "MySQL", "Laravel"],
    image: "/Projects/Cover_PALMA.png",
    github: "https://github.com/naufalrs04/PALMA.git",
  },
  {
    id: 3,
    title: "Web-based Application",
    subtitle: "Opta-IDS",
    description:
      "A web application developed with Python and Flask, designed to demonstrate and optimize machine learning models for an anomaly-based Intrusion Detection System",
    technologies: ["Python", "Flask", "Scikit-learn"],
    image: "/Projects/Cover_Opta-IDS.png",
    github: "https://github.com/naufalrs04/Opta-IDS.git",
  },
];

export default function Project() {
  return (
    <div className="flex flex-col pb-20 items-center justify-center w-full">
      <div className="flex w-full justify-center py-8">
        <div className="flex items-center">
          <span className="w-16 sm:w-24 h-[2px] bg-gradient-to-r from-transparent via-violet-500 to-transparent"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 sm:text-sm lg:text-xl rounded-md shadow-lg">
            Projects
          </span>
          <span className="w-16 sm:w-24 h-[2px] bg-gradient-to-r from-transparent via-violet-500 to-transparent"></span>
        </div>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full px-6">
        {projects.map((project) => (
          <div className="w-full flex justify-center">
            <div
              key={project.id}
              className="bg-[#1a1443] shadow-lg rounded-lg overflow-hidden w-full max-w-md flex flex-col h-full transition-transform duration-300 transform hover:scale-105 relative group"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 lg:h-60 object-cover"
              />

              <div className="p-4 flex-1">
                <h2 className="text-lg font-bold text-violet-100">
                  {project.subtitle} - {project.title}
                </h2>
                <p className="text-sm text-gray-300 mt-2">
                  {project.description}
                </p>
              </div>

              <div className="p-4 bg-[#302b63] mt-auto flex flex-col justify-between min-h-[150px]">
                <div>
                  <h3 className="text-sm font-semibold text-gray-300">
                    Technologies:
                  </h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-cyan-600 text-white text-xs font-medium px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => window.open(project.github, "_blank")}
                  className="mt-4 w-full bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700 text-white font-semibold py-2 rounded-md transition duration-300"
                >
                  View on GitHub
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
