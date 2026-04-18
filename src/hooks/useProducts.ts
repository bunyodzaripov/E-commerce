import { useQuery } from "@tanstack/react-query";
import { product } from "@/services";
import type { GetProductsParams } from "@/@types";

export const useGetProducts = (params: GetProductsParams = {}) => {
  return useQuery({
    queryKey: ["products", params],
    queryFn: () => product.getAll(params),
  });
};
