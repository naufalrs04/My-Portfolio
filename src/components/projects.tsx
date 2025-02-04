"use client";
import { cn } from "./lib/utils";

const projects = [
  {
    id: 1,
    title: "Web-based Application",
    subtitle: "SPARTA",
    description:
      "Academic information system designed to help students create Study Plan Forms (IRS) with features tailored to other roles as needed",
    image: "/Projects/Cover_SPARTA.png",
    github: "https://github.com/naufalrs04/SPARTA.git",
  },
  {
    id: 2,
    title: "Web-based Application",
    subtitle: "PALMA",
    description:
      "An employee attendance app with selfie verification and location tracking",
    image:
      "https://images.unsplash.com/photo-1544077960-604201fe74bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80",
    github: "https://github.com/naufalrs04/SPARTA.git",
  },
  {
    id: 3,
    title: "Web-based Application",
    subtitle: "Opta-IDS",
    description:
      "A web application developed with Python and Flask, designed to demonstrate and optimize machine learning models for an anomaly-based Intrusion Detection System",
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {projects.map((project) => (
          <div key={project.id} className="w-full">
            <button
              onClick={() => window.open(project.github, "_blank")}
              className={cn(
                "relative overflow-hidden h-80 sm:h-120 rounded-md shadow-xl flex flex-col justify-end p-2",
                "border-2 border-violet-300", // Border style
                "boxShadow-[0_0_10px_rgba(255,_255,_255,_0.3)]", // Box shadow
                "transition-all duration-300", // Smooth transition for hover
                "hover:border-[#9e8c8c]", // Change border color on hover
                "hover:shadow-xl", // Increase shadow intensity on hover
                "hover:scale-105" // Slightly scale the card on hover
              )}
              style={{
                backgroundImage: `url(${project.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Overlay dengan efek gradient */}
              <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-t from-black/80 to-transparent"></div>

              {/* Konten di atas overlay dengan latar belakang sedikit lebih gelap */}
              <div className="relative z-10 bg-black/60 p-4 rounded-md">
                <h1 className="font-bold text-lg sm:text-xl text-green-600">
                  {project.subtitle} - {project.title}
                </h1>
                <p className="font-normal text-xs sm:text-sm text-gray-200 mt-2">
                  {project.description}
                </p>
              </div>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
