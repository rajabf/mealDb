import { useQuery } from "@tanstack/react-query";
import { APIClient } from "../services/api-client";
import LoadingAnimation from "./LoadingAnimation";

interface Detail {
  detailName: string;
}

export interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

const MealDetails: React.FC<Detail> = ({ detailName }) => {
  const apiClient = new APIClient(`filter.php?c=${detailName}`);

  const searchQuery = useQuery<Meal[], Error>({
    queryKey: [detailName],
    queryFn: async () => {
      const data = await apiClient.getAll();
      console.log(data.meals);
      return data.meals;
    },
  });
  const { data, error, isLoading } = searchQuery;

  if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <ul className="px-20 flex flex-wrap mt-12 mb-10">
      {isLoading ? (
        <LoadingAnimation />
      ) : (
        data?.map((meal) => (
          <li
            key={meal.idMeal}
            className="border lg:w-1/4 md:w-2/4 sm:w-full px-4 py-5"
          >
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            <div>
              <h2 className="mt-5 font-bold">{meal.strMeal}</h2>
            </div>
          </li>
        ))
      )}
    </ul>
  );
};

export default MealDetails;
