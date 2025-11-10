import { useState } from "react";
import Navbar from "../layout/Navbar";
import Button from "../ui/Button";
import ButtonTwo from "../ui/ButtonTwo";
import {
  Briefcase,
  CookieIcon,
  CookingPot,
  Search,
  Star,
  TrendingUp,
} from "lucide-react";

const Home = () => {
  const btnName = "Get AI Suggestion";
  const btnNameTwo = "Explore Recipes";
  //  <Button btnname={btnName} />
  //               <ButtonTwo btnname={btnNameTwo} />
  return (
    <div className="h-screen  ">
      <div className="h-full flex flex-col gap-6 items-center justify-center max-w-6xl mx-auto px-4 relative">
        <div className="absolute top-20 -left-25 h-full w-full bg-[url('https://png.pngtree.com/png-vector/20250728/ourmid/pngtree-testy-fast-food-burger-png-image_16906169.webp')] bg-no-repeat "></div>
        
        {/* Badge */}
        <span className=" inline-flex animate-fade-in-down items-center px-6 py-2.5 rounded-full bg-orange-50 text-[#F83002] text-lg font-semibold shadow-sm border border-orange-100">
          <CookingPot size={20} className="mr-2" />
          Smart Cooking Starts Here.
        </span>

        {/* Heading */}
        <h1 className="mt-4 text-4xl md:text-7xl font-bold tracking-tight animate-fade-in-up text-center">
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
              <path
                d="M2 5.8c54-4 98.5-4.3 137.3-3.5 39 .8 78.6 2.7 118.4 3.7 39.7 1 79.6 1.2 98.3 1.2"
                stroke="#6A38C2"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-4 font-normal text-base text-neutral-600 max-w-lg text-center mx-auto">
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
            <Briefcase size={20} className="text-[#6A38C2]" />
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
