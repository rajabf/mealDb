import { useState } from "react";
import { useMeals } from "../hooks/allMeals";
import LoadingAnimation from "./LoadingAnimation";
import MealDetails from "./MealDetails";

interface Detail {
  name: string;
  isClicked: boolean;
}

const SiteCategories = () => {
  const [isClicked, setClicked] = useState<Detail | null>(null);
  const { data, error, isLoading } = useMeals();

  if (isClicked) return <MealDetails detailName={isClicked.name} />;

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <ul className="px-20 mb-10 flex flex-wrap mt-12 justify-center">
      {isLoading ? (
        <LoadingAnimation />
      ) : (
        data?.map((meal) => (
          <li
            key={meal.idCategory}
            className="border lg:w-1/4 md:w-2/4 sm:w-3/4 px-4 py-5"
          >
            <img src={meal.strCategoryThumb} alt={meal.strCategory} />
            <div>
              <button
                onClick={() =>
                  setClicked({ name: meal.strCategory, isClicked: true })
                }
              >
                <h2 className="mt-1 mb-5 font-bold">{meal.strCategory}</h2>
              </button>
              <p>
                {meal.strCategoryDescription.slice(
                  0,
                  meal.strCategoryDescription.indexOf(".")
                )}
              </p>
            </div>
          </li>
        ))
      )}
    </ul>
  );
};

export default SiteCategories;
