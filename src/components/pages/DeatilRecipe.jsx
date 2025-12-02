import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MainLoader } from "../ui/MainLoader";

const DetailRecipe = () => {
  const { recipeId } = useParams();
  const [loading, setLoading] = useState(true);
  const [meal, setMeal] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  const mealData = async () => {
    try {
      setLoading(true);
      const res = await axios(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`
      );
      const data = res.data.meals;
      setMeal(data[0]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    mealData();
  }, [recipeId]);

  useEffect(() => {
    if (!meal || Object.keys(meal).length === 0) return;

    const mealingredients = [];

    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];

      if (ingredient && ingredient.trim() !== "") {
        mealingredients.push({
          ingredient,
          measure,
        });
      }
    }

    setIngredients(mealingredients);
  }, [meal]);

  const instructions = meal.strInstructions;
  const videoId = meal.strYoutube?.split("v=")[1];

  return (
    <div className="min-h-screen">
      {loading ? (
        <div className="flex flex-col w-full h-screen mt-100">
          <MainLoader size={50} />
        </div>
      ) : (
        <>
          <div className="min-h-screen max-w-6xl m-auto">
            <div className="mt-10 flex flex-col md:flex-row gap-6">
              <div className="m-8 md:m-0 p-3 shadow-sm rounded-2xl bg-neutral-100  md:h-120 md:max-h-107 md:min-w-100 border border-neutral-200 object-cover">
                <img
                  src={meal.strMealThumb}
                  alt="Food Image"
                  className="  md:h-100 shadow-sm rounded-2xl object-cover"
                />
              </div>
              <div className="w-full p-4 md:p-0flex flex-col">
                <h1 className="text-5xl text-center md:text-left">
                  {meal.strMeal}{" "}
                </h1>
                <div className="flex gap-4 mt-4 justify-center md:justify-start">
                  <p className="bg-blue-200/80 px-3 py-2 text-xs rounded-2xl">
                    {meal.strCategory}{" "}
                  </p>
                  <p className="bg-orange-200/80 px-3 py-2 text-xs rounded-2xl">
                    {meal.strArea}{" "}
                  </p>
                </div>
                <div className="p-3">
                  <ul className="list-disc ml-5 mt-2">
                    {ingredients.map((item, idx) => (
                      <li key={idx} className="text-base text-neutral-600">
                        {item.ingredient} — {item.measure}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>{" "}
            <div className="mt-10 flex gap-6 items-center flex-col">
              <div className="w-full p-4 flex flex-col">
                <h1 className="text-5xl">Steps</h1>
                <div className="p-3">
                  {instructions.split("\r\n").map((line, index) => (
                    <p
                      key={index}
                      className="text-base md:text-lg text-neutral-500 font-medium"
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>
              <h1 className="text-5xl ">YouTube Video</h1>
              <div className="m-10 p-3 shadow-sm rounded-2xl bg-neutral-100  h-fit min-w-100 border border-neutral-200 max-w-2xl text-center mb-20">
                <a
                  href={meal.strYoutube}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                    className=" shadow-sm rounded-2xl object-cover"
                    alt="YouTube video thumbnail"
                  />
                </a>

                <a href={meal.strYoutube}></a>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DetailRecipe;
