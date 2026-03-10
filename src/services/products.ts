import type { Product } from "@/@types";
import { api } from "./api";

export const productService = {
  getAll: () => api.get<Product[]>("/products").then((r) => r.data),

  getById: (id: number) =>
    api.get<Product>(`/products/${id}`).then((r) => r.data),

  getLimited: (limit: number) =>
    api.get<Product[]>(`/products?limit=${limit}`).then((r) => r.data),
};
