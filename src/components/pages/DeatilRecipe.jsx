import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DeatilRecipe = () => {
  const { recipeId } = useParams();

  const [loading, setLoading] = useState(true);
  const [meal, setMeal] = useState([]);
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
  const instructions = meal?.strInstructions || "";
  return (
    <div className="min-h-screen max-w-6xl m-auto">
      <div className="mt-10 flex gap-6">
        <div className="p-3 shadow-sm rounded-2xl bg-neutral-100 h-120 max-h-107 min-w-100 border border-neutral-200">
          <img
            src={meal.strMealThumb}
            alt="Food Image"
            className="h-100 shadow-sm rounded-2xl"
          />
        </div>
        <div className="w-full p-4 flex flex-col">
          <h1 className="text-5xl">{meal.strMeal} </h1>
          <div className="flex gap-4 mt-4">
            <p className="bg-blue-200/80 px-3 py-2 text-xs rounded-2xl">
              {meal.strCategory}{" "}
            </p>
            <p className="bg-orange-200/80 px-3 py-2 text-xs rounded-2xl">
              {meal.strArea}{" "}
            </p>
          </div>
          <div className="p-3">
            {instructions
              .split("\n")
              .map((line, idx) =>
                line.trim().length > 0 ? <p key={idx}>{line}</p> : null
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeatilRecipe;
