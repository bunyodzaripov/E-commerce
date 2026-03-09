import { useQuery } from "@tanstack/react-query";
import { productService, categoryService } from "../services/api";

export const useProducts = () =>
  useQuery({
    queryKey: ["products"],
    queryFn: productService.getAll,
    staleTime: 5 * 60 * 1000,
  });

export const useProduct = (id: number) =>
  useQuery({
    queryKey: ["product", id],
    queryFn: () => productService.getById(id),
    enabled: !!id,
  });

export const useCategories = () =>
  useQuery({
    queryKey: ["categories"],
    queryFn: categoryService.getAll,
    staleTime: 10 * 60 * 1000,
  });

export const useFeaturedProducts = (limit = 8) =>
  useQuery({
    queryKey: ["products", "featured", limit],
    queryFn: () => productService.getLimited(limit),
    staleTime: 5 * 60 * 1000,
  });
