import axios from "axios";
import type { Product, Category } from "../@types";

const api = axios.create({
  baseURL: "https://fakestoreapi.com",
  timeout: 10000,
});

export const productService = {
  getAll: () => api.get<Product[]>("/products").then((r) => r.data),
  getById: (id: number) =>
    api.get<Product>(`/products/${id}`).then((r) => r.data),
  getByCategory: (category: string) =>
    api.get<Product[]>(`/products/category/${category}`).then((r) => r.data),
  getLimited: (limit: number) =>
    api.get<Product[]>(`/products?limit=${limit}`).then((r) => r.data),
};

export const categoryService = {
  getAll: () => api.get<Category[]>("/products/categories").then((r) => r.data),
};
