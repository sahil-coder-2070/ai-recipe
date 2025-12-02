import { ListChecksIcon, NotebookPenIcon, PersonalIcon } from "../ui/IconsFile";
import { motion } from "motion/react";

const Feature = () => {
  const features = [
    {
      icon: PersonalIcon,
      title: "Personalized Recipe Suggestions",
      description:
        "Get custom recipe recommendations based on your taste preferences, dietary needs, and cooking skill level.",
    },
    {
      icon: NotebookPenIcon,
      title: "Step-by-Step Cooking Assistance",
      description:
        "Follow clear, detailed instructions with helpful tips and tricks to ensure perfect results every time.",
    },
    {
      icon: ListChecksIcon,
      title: "Smart Meal Planning & Cook Better",
      description:
        "Plan your weekly meals effortlessly with balanced nutrition and grocery lists generated automatically.",
    },
  ];

  const MotionDiv = motion.div;

  return (
    <div className="max-w-6xl m-auto mb-20">
      <div className="w-full flex flex-col justify-center items-center mt-50 mb-20 gap-3 ">
        <h1 className="text-3xl md:text-7xl font-medium tracking-tight animate-fade-in-up text-center font-display  ">
          How AI Helps You Cook
        </h1>
        <p className="text-neutral-600 text-xs max-w-50 md:max-w-full md:text-base text-center">
          Your intelligent cooking companion for every step of the journey
        </p>
      </div>
      <div className="grid md:grid-cols-3 justify-items-center items-center gap-4">
        {features.map((feature, index) => {
          return (
            <MotionDiv
              key={index}
              initial={{ filter: "blur(10px)", opacity: 0, y: 30 }}
              whileInView={{ filter: "blur(0)", opacity: 1, y: 0 }}
              transition={{
                duration: 0.2,
                delay: index * 0.09,
              }}
              className=" bg-white duration-200 flex flex-col gap-4 md:gap-6 justify-around items-start rounded-2xl md:h-80 w-85 p-10 cursor-pointer shadow-sm border-neutral-200 border  hover:shadow-2xl "
            >
              <span className="bg-linear-to-br from-orange-400 to-orange-600 p-4 shadow-lg rounded-2xl ">
                <feature.icon className="w-3 md:w-8 h-8 text-white" />
              </span>
              <h2 className="font-bold font-man text-sm md:text-lg">{feature.title}</h2>
              <p className="text-neutral-600 text-xs md:text-sm">{feature.description}</p>
            </MotionDiv>
          );
        })}
      </div>
    </div>
  );
};

export default Feature;
