import type { GetProductsParams } from "@/@types";
import api from "./api";

export const product = {
  getAll: async (params: GetProductsParams = {}) => {
    const skip = ((params.page ?? 1) - 1) * (params.limit ?? 9);
    const { category, ...rest } = params;
    const url = category ? `/products/category/${category}` : "/products";
    const r = await api.get(url, { params: { ...rest, skip } });
    return r.data;
  },
  search: (q: string) =>
    api.get("/products/search", { params: { q } }).then((r) => r.data),
  getCategories: () => api.get("/products/categories").then((r) => r.data),
  getById: (id: number) => api.get(`/products/${id}`).then((r) => r.data),
};
