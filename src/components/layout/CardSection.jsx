import React, { useEffect, useState } from "react";
import axios from "axios";
import { AnimatePresence, motion } from "motion/react";
import { MainLoader } from "../ui/MainLoader";

const CardSection = () => {
  const [imgUrl, setImgUrl] = useState([]);
  const [expandedCard, setExpandedCard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeMeal, setActiveMeal] = useState(null);

  const mealData = async () => {
    try {
      setLoading(true);
      const res = await axios(
        "https://www.themealdb.com/api/json/v1/1/search.php?f=a"
      );
      const data = res.data.meals;
      setImgUrl(data.slice(0, 6));
    } finally {
      setLoading(false);
    }
  };

  const handleClick = (meal) => {
    setExpandedCard(meal.idMeal);
    setActiveMeal(meal);
  };

  const closeOverlay = () => {
    setExpandedCard(null);
    setActiveMeal(null);
  };

  useEffect(() => {
    mealData();
  }, []);

  return (
    <div className="h-full relative bg-linear-to-t from-white to-green-50 ">
      {loading ? (
        <div className="flex flex-col w-full min-h-280 items-center justify-center relative">
          <div className="w-full flex flex-col justify-center items-center mb-10 gap-3 absolute top-0 ">
            <h1 className="text-5xl md:text-6xl font-medium tracking-tight animate-fade-in-up text-center font-display ">
              Featured Recipes
            </h1>
            <p className="text-neutral-600 text-base max-w-xs text-center md:w-full">
              Handpicked delicious recipes to inspire your next meal
            </p>
          </div>
          <MainLoader size={50} />
        </div>
      ) : (
        <>
          <div className="w-full flex flex-col justify-center items-center mb-20 gap-3 ">
            <h1 className="text-5xl md:text-7xl font-medium tracking-tight animate-fade-in-up text-center font-display ">
              Featured Recipes
            </h1>
            <p className="text-neutral-600 text-base md:text-lg  max-w-xs text-center md:w-full">
              Handpicked delicious recipes to inspire your next meal
            </p>
          </div>
          <div className="grid  sm:grid-cols-3 gap-5 justify-items-center items-start md:max-w-6xl m-auto mb-20 px-6 md:px-0.5  ">
            {imgUrl.map((meal, index) => (
              <motion.div
                key={meal.idMeal}
                initial={{ filter: "blur(10px)", opacity: 0, y: 30 }}
                whileInView={{ filter: "blur(0)", opacity: 1, y: 0 }}
                transition={{
                  duration: 0.2,
                  delay: index * 0.09,
                }}
                layoutId={`card-container-${meal.idMeal}`}
                onClick={() => handleClick(meal)}
                className="bg-white flex flex-col gap-6 justify-center items-center rounded-2xl h-full  cursor-pointer shadow-sm border-neutral-200 border overflow-hidden"
              >
                <motion.img
                  layoutId={`card-image-${meal.idMeal}`}
                  src={meal.strMealThumb}
                  className="w-full h-90 md:h-full shadow-sm object-cover"
                />
                <motion.div
                  layoutId={`card-body-${meal.idMeal}`}
                  className="w-full pt-0 p-5"
                >
                  <h2 className="font-semibold text-neutral-900 text-base">
                    {meal.strMeal}
                    <p className="font-normal text-neutral-500 text-sm">
                      {meal.strCategory}
                    </p>
                  </h2>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <AnimatePresence>
            {expandedCard && activeMeal && (
              <motion.div
                className="fixed inset-0 bg-black/10 bg-opacity-50 flex items-center justify-center z-50 p-10"
                onClick={closeOverlay}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div
                  layoutId={`card-container-${expandedCard}`}
                  className="max-w-xl w-full rounded-4xl bg-neutral-50 overflow-hidden shadow-md border-neutral-200 border"
                  onClick={(e) => e.stopPropagation()}
                >
                  <motion.img
                    layoutId={`card-image-${expandedCard}`}
                    src={activeMeal.strMealThumb}
                    className="w-full h-80 object-cover"
                  />
                  <motion.div
                    layoutId={`card-body-${expandedCard}`}
                    className="p-6 flex flex-col gap-4 max-h-80 overflow-hidden relative"
                  >
                    {/* Mask / gradient at bottom */}
                    <div className="absolute bottom-0 left-0 w-full h-20 bg-linear-to-t from-neutral-50"></div>

                    <h2 className="font-semibold text-neutral-800 text-base">
                      {activeMeal.strMeal}
                      <p className="text-base font-normal text-neutral-600">
                        {activeMeal.strCategory}
                      </p>
                    </h2>
                    <p className="text-base font-normal text-neutral-600 overflow-x-auto">
                      {activeMeal.strInstructions}
                    </p>
                  </motion.div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </div>
  );
};

export default CardSection;
