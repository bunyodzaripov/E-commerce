import { useQuery } from "@tanstack/react-query";
import { productService } from "@/services";

// Query keys — bir joyda boshqaramiz
export const productKeys = {
  all: ["products"] as const,
  byId: (id: number) => ["products", id] as const,
  limited: (limit: number) => ["products", "limited", limit] as const,
};

// ✅ Barcha mahsulotlar
export const useProducts = () =>
  useQuery({
    queryKey: productKeys.all,
    queryFn: productService.getAll,
  });

// ✅ Bitta mahsulot ID bo'yicha
export const useProduct = (id: number) =>
  useQuery({
    queryKey: productKeys.byId(id),
    queryFn: () => productService.getById(id),
    enabled: !!id, // id bo'lmasa so'rov ketmaydi
  });

// ✅ Cheklangan miqdorda mahsulotlar (Home page uchun)
export const useLimitedProducts = (limit: number) =>
  useQuery({
    queryKey: productKeys.limited(limit),
    queryFn: () => productService.getLimited(limit),
    enabled: limit > 0,
  });
