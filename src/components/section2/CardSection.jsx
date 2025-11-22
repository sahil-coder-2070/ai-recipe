import React, { useEffect, useState } from "react";
import axios from "axios";

const CardSection = () => {
  const [imgUrl, setImgUrl] = useState([]);
  const [expandedCard, setExpandedCard] = useState(null);

  const mealData = async () => {
    const API = "https://www.themealdb.com/api/json/v1/1/search.php?f=a";
    const res = await axios(API);
    const data = await res.data.meals;
    setImgUrl(data.slice(0, 6));
  };

  const handelClick = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  useEffect(() => {
    mealData();
  }, []);

  return (
    <div className="h-full  relative mb-10">
      <div className="grid sm:grid-cols-3 h-full w-fit  cursor-pointer justify-items-center items-center max-w-6xl m-auto">
        {imgUrl.map((meal, index) => {
          return (
            <div
              key={meal.idMeal || index}
              className="hover:bg-neutral-100/50 duration-200 flex flex-col gap-6 justify-center items-center rounded-2xl h-fit p-5 w-fit"
              onClick={() => handelClick(meal.idMeal)}
            >
              {" "}
              <img
                src={meal.strMealThumb}
                alt="food image"
                className="w-80  rounded-2xl"
              />
              <h2 className=" font-semibold text-neutral-800  text-center  text-base">
                {meal.strMeal}
                <p className="text-base font-normal text-neutral-600">
                  {meal.strCategory}
                </p>
              </h2>
              {expandedCard === meal.idMeal && (
                <div className="bg-[#ffffff52] h-full w-full absolute left-0 top-0 flex items-center">
                  <div className="max-w-xl bg-neutral-100 w-full m-auto h-fit overflow-hidden rounded-4xl">
                    <div className="flex flex-col gap-4 mask-b-from-80% ">
                      <img
                        src={meal.strMealThumb}
                        alt="food image"
                        className="w-full h-80 object-cover"
                      />
                      <div className="p-6 flex flex-col gap-4">
                        <h2 className=" font-semibold text-neutral-800 text-base">
                          {meal.strMeal}
                          <p className="text-base font-normal text-neutral-600">
                            {meal.strCategory}
                          </p>
                        </h2>
                        <p className="text-base font-normal text-neutral-600 pb-4">
                          {meal.strInstructions}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardSection;
