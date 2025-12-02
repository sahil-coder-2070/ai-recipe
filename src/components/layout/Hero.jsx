import { motion as Motion } from "motion/react";

import { Herobtn, HerobtnTwo } from "../ui/Button";

const Hero = () => {
  return (
    <div className="bg-linear-to-b from-white to-green-50">
      <div className=" h-140 md:h-200 flex flex-col gap-15 items-center justify-center max-w-6xl mx-auto pb-25 relative ">
        <h1 className="mt-4 text-4xl md:text-8xl font-medium tracking-tight animate-fade-in-up text-center font-display">
          Quick Recipes &amp; <br />
          Better Ways{" "}
          <span className="text-[#F83002] relative">
            to Cook
            <svg
              className="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 358 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <Motion.path
                d="M2 5.8c54-4 98.5-4.3 137.3-3.5 39 .8 78.6 2.7 118.4 3.7 39.7 1 79.6 1.2 98.3 1.3"
                stroke="#F83002"
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                exit={{ pathLength: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />
            </svg>
          </span>
        </h1>
        <div className="flex gap-3">
          <Herobtn />
          <HerobtnTwo />
        </div>
      </div>
    </div>
  );
};

export default Hero;