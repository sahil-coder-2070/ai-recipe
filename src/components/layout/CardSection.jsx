import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "motion/react";
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
    <div className="h-full relative mb-10">
      {loading ? (
        <div className="flex flex-col w-full min-h-280 items-center justify-center">
          <div className="w-full flex flex-col justify-center items-center mb-10 gap-3 ">
            <h1 className="text-2xl md:text-7xl font-medium tracking-tight animate-fade-in-up text-center font-display ">
              Featured Recipes
            </h1>
            <p className="text-neutral-600 text-base">
              Handpicked delicious recipes to inspire your next meal
            </p>
          </div>
          <MainLoader size={50} />
        </div>
      ) : (
        <>
          <div className="w-full flex flex-col justify-center items-center mb-20 gap-3 ">
            <h1 className="text-2xl md:text-7xl font-medium tracking-tight animate-fade-in-up text-center font-display ">
              Featured Recipes
            </h1>
            <p className="text-neutral-600 text-base">
              Handpicked delicious recipes to inspire your next meal
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-5 justify-items-center items-start max-w-6xl m-auto mb-20 ">
            {imgUrl.map((meal, index) => (
              <motion.div
                key={meal.idMeal}
                initial={{ filter: "blur(10px)", opacity: 0 }}
                whileInView={{ filter: "blur(0)", opacity: 1 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.05,
                }}
                onClick={() => handleClick(meal)}
                className="bg-white duration-200 flex flex-col gap-6 justify-center items-center rounded-2xl h-full p-5 cursor-pointer shadow-sm border-neutral-200 border"
              >
                <img
                  src={meal.strMealThumb}
                  className="w-80 rounded-2xl shadow-sm "
                />
                <h2 className="font-semibold text-neutral-900 text-base text-start w-full text-[16px]">
                  {meal.strMeal}
                  <p className="font-normal text-neutral-500 text-sm">
                    {meal.strCategory}
                  </p>
                </h2>
              </motion.div>
            ))}
          </div>

          {expandedCard && activeMeal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.55, 0, 0.58, 1] }}
              className="bg-[#ffffff52] fixed inset-0 flex items-center justify-center z-50 p-10"
              onClick={closeOverlay}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, ease: [0.55, 0, 0.58, 1] }}
                className="max-w-xl bg-neutral-50  w-full m-auto h-fit overflow-hidden rounded-4xl "
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex flex-col gap-4 mask-b-from-80%">
                  <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    src={activeMeal.strMealThumb}
                    className="w-full h-80 object-cover"
                  />

                  <div className="p-6 flex flex-col gap-4 max-h-80">
                    <motion.h2
                      initial={{ paddingLeft: "50px", opacity: 0 }}
                      animate={{ paddingLeft: "0px", opacity: 1 }}
                      transition={{ duration: 0.35, ease: [0.42, 0, 0.58, 1] }}
                      className="font-semibold text-neutral-800 text-base  "
                    >
                      {activeMeal.strMeal}
                      <p className="text-base font-normal text-neutral-600">
                        {activeMeal.strCategory}
                      </p>
                    </motion.h2>

                    <motion.p
                      initial={{ height: 20, paddingLeft: "10px", opacity: 0 }}
                      animate={{
                        height: "auto",
                        paddingLeft: "0px",
                        opacity: 1,
                      }}
                      transition={{ duration: 0.35, ease: [0.55, 0, 0.58, 1] }}
                      className="text-base font-normal text-neutral-600 pb-4"
                    >
                      {activeMeal.strInstructions}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </>
      )}
    </div>
  );
};

export default CardSection;
