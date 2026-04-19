import { useQuery } from "@tanstack/react-query";
import { product } from "@/services";
import type { GetProductsParams } from "@/@types";

export const useGetProducts = (params: GetProductsParams = {}) => {
  return useQuery({
    queryKey: ["products", params],
    queryFn: () => product.getAll(params),
  });
};

export const useSearchProducts = (search: string) => {
  return useQuery({
    queryKey: ["products", "search", search],
    queryFn: () => product.search(search),
    enabled: search.length > 1,
  });
};

export const useGetCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: () => product.getCategories(),
  });
};
