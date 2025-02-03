"use client";

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export default function Education() {
  const testimonials = [
    {
      time: "2022 - Present",
      name: "Bachelor Degree",
      instansi: "Diponegoro University",
      src: "/Educations/Undip.png",
    },
    {
      time: "2019 - 2022",
      name: "Senior High School",
      instansi: "SMAN 11 Semarang",
      src: "/Educations/SMA11_Semarang.png",
    },
    {
      time: "2016 - 2019",
      name: "Junior High School",
      instansi: "SMPN 9 Semarang",
      src: "/Educations/SMP9_Semarang.png",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="flex w-full justify-center py-8">
        <div className="flex items-center">
          <span className="w-16 sm:w-24 h-[2px] bg-gradient-to-r from-transparent via-violet-500 to-transparent"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-lg sm:text-xl rounded-md shadow-lg">
            Education
          </span>
          <span className="w-16 sm:w-24 h-[2px] bg-gradient-to-r from-transparent via-violet-500 to-transparent"></span>
        </div>
      </div>
      <AnimatedTestimonials testimonials={testimonials} />
    </div>
  );
}
