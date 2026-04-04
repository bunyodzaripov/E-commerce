import type { Product } from "@/@types/index";
import api from "./api";

export const product = {
  getAll: () => api.get<Product>("/products").then((r) => r.data),

  getById: (id: number) =>
    api.get<Product>(`/products/${id}`).then((r) => r.data),
};
