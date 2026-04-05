import { useQuery } from "@tanstack/react-query";
import { product } from "@/services";

export const useGetProducts = () =>
  useQuery({
    queryKey: ["products"],
    queryFn: product.getAll,
  });
