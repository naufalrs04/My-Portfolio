"use client";
import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setHeight(rect.height); // Update height based on element's position
      }
    };

    window.addEventListener("resize", handleResize); // Listen for resize event
    handleResize(); // Initial height calculation

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0%", "end 90%"], // Adjust offset to avoid exceeding container height
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]); 
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-transparent font-sans"
      ref={containerRef}
    >
      <div className="flex justify-center max-w-7xl mx-auto pb-20 pt-10 px-4 md:px-8 lg:px-10">
        <div className="flex items-center">
            <span className="w-24 h-[2px] bg-gradient-to-r from-transparent via-violet-500 to-transparent"></span>
            <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md shadow-lg">
            Experience
            </span>
            <span className="w-24 h-[2px] bg-gradient-to-r from-transparent via-violet-500 to-transparent"></span>
        </div>
      </div>
      
      <div ref={ref} className="relative w-full mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center py-4 top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-slate-600 flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-4xl font-bold text-slate-300">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-0 py-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-slate-300">
                {item.title} 
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
