import { useQuery } from "@tanstack/react-query";
import { APIClient } from "../services/api-client";

const apiClient = new APIClient("categories.php");

export interface Meal {
  idCategory: string;
  strCategory: string;
  strCategoryDescription: string;
  strCategoryThumb: string;
}

const useMeals = () => {
  return useQuery<Meal[], Error>({
    queryKey: ["meal"],
    queryFn: async () => {
      const data = await apiClient.getAll();
      return data.categories;
    },
  });
};

export { useMeals };
