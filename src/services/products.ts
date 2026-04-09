import api from "./api";

export const product = {
  getAll: () => api.get("/products").then((r) => r.data),
  getById: (id: number) => api.get(`/products/${id}`).then((r) => r.data),
};
