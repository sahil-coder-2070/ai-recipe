import { ListChecks, NotebookPen, UserRoundPen } from "lucide-react";

const Feature = () => {
  const features = [
    {
      icon: UserRoundPen,
      title: "Personalized Recipe Suggestions",
      description:
        "Get custom recipe recommendations based on your taste preferences, dietary needs, and cooking skill level.",
    },
    {
      icon: NotebookPen,
      title: "Step-by-Step Cooking Assistance",
      description:
        "Follow clear, detailed instructions with helpful tips and tricks to ensure perfect results every time.",
    },
    {
      icon: ListChecks,
      title: "Smart Meal Planning",
      description:
        "Plan your weekly meals effortlessly with balanced nutrition and grocery lists generated automatically.",
    },
  ];

  return (
    <div className="max-w-6xl m-auto mb-20">
      <div className="w-full flex flex-col justify-center items-center mb-10 gap-3 ">
        <h1 className="text-2xl md:text-7xl font-medium tracking-tight animate-fade-in-up text-center font-display ">
          How AI Helps You Cook
        </h1>
        <p className="text-neutral-600 text-base">
          Your intelligent cooking companion for every step of the journey
        </p>
      </div>
      <div className="grid grid-cols-3 justify-items-center items-center">
        {features.map((feature, index) => {
          return (
            <div
              key={index}
              className=" bg-white duration-200 flex flex-col gap-6 justify-center items-start rounded-2xl h-80 w-85 p-10 cursor-pointer shadow-sm border-neutral-200 border "
            >
              <span className="bg-linear-to-br from-orange-400 to-orange-600 p-4 shadow-lg rounded-2xl ">
                <feature.icon className="w-8 h-8 text-white" />
              </span>
              <h2 className="font-bold font-man text-lg">{feature.title}</h2>
              <p className="text-neutral-600 text-sm">{feature.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Feature;
