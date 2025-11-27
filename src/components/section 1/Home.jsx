import Button from "../ui/Button";
import ButtonTwo from "../ui/ButtonTwo";
import { motion } from "motion/react";
import { Star, TrendingUp } from "lucide-react";
import { BrifCaseIconLogo, StartLogoIcon } from "../ui/IconsFile";

const Home = () => {
  const btnName = "Get AI Suggestion";
  const btnNameTwo = "Explore Recipes";
  //  <Button btnname={btnName} />
  //               <ButtonTwo btnname={btnNameTwo} />
  return (
    <div className=" h-screen max-h-[90vh]  ">
      <div className="h-full flex flex-col gap-6 items-center justify-center max-w-6xl mx-auto px-4 ">
        {/* Badge */}
        <span className=" inline-flex animate-fade-in-down items-center px-6 py-2.5 rounded-full bg-orange-50 text-[#F83002] text-sm md:text-lg font-semibold shadow-sm border border-orange-100">
          <StartLogoIcon />
          Smart Cooking Starts Here.
        </span>

        {/* Heading */}
        <h1 className="mt-4 text-3xl md:text-7xl font-bold tracking-tight animate-fade-in-up text-center relative">
          <span className="absolute -top-60 -left-60 h-30 w-30  sm:h-100 sm:w-100 bg-[url('https://png.pngtree.com/png-vector/20250728/ourmid/pngtree-testy-fast-food-burger-png-image_16906169.webp')] bg-no-repeat bg-cover"></span>
          Quick Recipes &amp; <br />
          Better Ways{" "}
          <span className="text-[#6A38C2] relative">
            to Cook
            <svg
              className="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 358 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                d="M2 5.8c54-4 98.5-4.3 137.3-3.5 39 .8 78.6 2.7 118.4 3.7 39.7 1 79.6 1.2 98.3 1.3"
                stroke="#6A38C2"
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

        {/* Subtitle */}
        <p className="mt-4 font-normal text-sm sm:text-base text-neutral-600 max-w-lg text-center mx-auto">
          AI Chef brings innovation to your kitchen, serving smart recipe ideas
          that balance flavor, freshness, and modern technology.
        </p>

        {/* Search Bar */}
        <div className="relative  animate-fade-in-up animation-delay-300 flex gap-4">
          <Button btnname={btnName} />
          <ButtonTwo btnname={btnNameTwo} />
        </div>

        {/* Stats */}
        <div className="flex gap-8 mt-8 animate-fade-in-up animation-delay-450">
          <div className="flex items-center gap-2">
            <TrendingUp className="text-[#6A38C2]  " size={24} />
            <span className="text-lg">
              <strong className="font-bold">10k+</strong> Jobs Posted
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Star size={20} className="text-[#F83002]" />
            <span className="text-lg">
              <strong className="font-bold">8k+</strong> Companies
            </span>
          </div>

          <div className="flex items-center gap-2">
            <BrifCaseIconLogo />
            <span className="text-lg">
              <strong className="font-bold">15k+</strong> Candidates
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
