// @flow strict

import { skillsData } from "../components/utils/data/skills";
import skillsImage from "../components/utils/skill-image";
import Image from "next/image";
import Marquee from "react-fast-marquee";

function Skills() {
  return (
    <section className="relative z-40">
      {/* Section title */}
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-gradient-to-r from-transparent via-violet-500 to-transparent"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md shadow-lg">
            Skills
          </span>
          <span className="w-24 h-[2px] bg-gradient-to-r from-transparent via-violet-500 to-transparent"></span>
        </div>
      </div>

      {/* Marquee for skills */}
      <div className="w-full my-10">
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          {skillsData.map((skill, id) => (
            <div
              className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
              key={id}
            >
              <div className="h-full w-full rounded-lg border border-[#2b1a5a] bg-gradient-to-b from-[#1D1616] via-[#25124d] via-90% to-[#1D1616] shadow-lg shadow-indigo-500/50 group-hover:border-indigo-500 transition-all duration-500">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#170a37] to-transparent opacity-20 rounded-lg"></div>

                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-indigo-500/20 blur-xl opacity-40 group-hover:opacity-80 transition-all duration-500"></div>

                {/* Content */}
                <div className="flex flex-col items-center justify-center gap-3 p-6">
                  <div className="h-8 sm:h-10">{skillsImage(skill)}</div>
                  <p className="text-white text-sm sm:text-lg font-semibold">
                    {skill}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}

export default Skills;
