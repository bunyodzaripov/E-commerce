import { useQuery } from "@tanstack/react-query";
import { product } from "@services/products";

export const useProducts = () =>
  useQuery({
    queryKey: ["products"],
    queryFn: product.getAll,
  });
