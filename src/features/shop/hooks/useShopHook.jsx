import { useQuery } from "@tanstack/react-query";
import { getAllProducts, getProductCategories, getProductsByCategory } from "../api/storeApi";

export const useAllProducts = (search) => {
  const { data } = useQuery({
    queryKey: ['products', search],
    queryFn: () => getAllProducts(search),
  });
  return { data };
};

export const useProductCategories = () => {
    const { data } = useQuery({
        queryKey: ['productCategories'],
        queryFn: getProductCategories,
    });
    return { data };
}

export const useProductsByCategory = (category) => {
    const { data } = useQuery({
        queryKey: ['productsByCategory', category],
        queryFn: () => getProductsByCategory(category),
    });
    return { data };
}