import { useEffect, useState } from "react";
import { MainLoader } from "../ui/MainLoader";
import axios from "axios";
import { motion } from "motion/react";
import { NavLink } from "react-router-dom";

const Recipe = () => {
  const [loading, setLoading] = useState(true);
  const [imgUrl, setImgUrl] = useState([]);

  const mealData = async () => {
    try {
      setLoading(true);
      const res = await axios(
        "https://www.themealdb.com/api/json/v1/1/search.php?f=a"
      );
      const data = res.data.meals;
      setImgUrl(data.slice(0, 21));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    mealData();
  }, []);
  return (
    <div className="h-full relative ">
      {loading ? (
        <div className=" h-screen flex flex-col w-full mt-10">
          <div className="w-full flex flex-col justify-center items-center mb-10 gap-3 ">
            <h1 className="text-5xl md:text-7xl font-medium tracking-tight animate-fade-in-up text-center font-display ">
              Featured Recipes
            </h1>
            <p className="text-neutral-600 text-base md:text-lg  max-w-xs text-center md:w-full">
              Handpicked delicious recipes to inspire your next meal
            </p>
          </div>
          <MainLoader size={50} />
        </div>
      ) : (
        <>
          <div className="w-full flex flex-col justify-center items-center mb-20 gap-3  mt-10">
            <h1 className="text-5xl md:text-7xl font-medium tracking-tight animate-fade-in-up text-center font-display ">
              Featured Recipes
            </h1>
            <p className="text-neutral-600 text-base md:text-lg  max-w-xs text-center md:w-full">
              Handpicked delicious recipes to inspire your next meal
            </p>
          </div>
          <div className="grid  sm:grid-cols-3 gap-10 justify-items-center items-start max-w-6xl m-auto mb-20 px-10 md:px-0">
            {imgUrl.map((meal, index) => (
              <NavLink to={`/recipe/${meal.idMeal}`}>
                <div>
                  <motion.div
                    key={meal.idMeal}
                    initial={{ filter: "blur(10px)", opacity: 0.8, y: 30 }}
                    animate={{ filter: "blur(0)", opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.2,
                      delay: index * 0.09,
                    }}
                    className="bg-white flex flex-col gap-6 justify-center items-center rounded-2xl h-full  cursor-pointer shadow-sm border-neutral-200 border overflow-hidden"
                  >
                    <img
                      src={meal.strMealThumb}
                      className="w-full h-full shadow-sm object-cover"
                    />
                    <div className="w-full pt-0 p-5 flex-1">
                      <h2 className="font-semibold text-neutral-900 text-base ">
                        {meal.strMeal}
                        <p className="font-normal text-neutral-500 text-sm">
                          {meal.strCategory}
                        </p>
                      </h2>
                    </div>
                  </motion.div>
                </div>
              </NavLink>
            ))}
          </div>
        </>
      )}
      ;
    </div>
  );
};
export default Recipe;
