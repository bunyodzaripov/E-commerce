import type { GetProductsParams } from "@/@types";
import api from "./api";

export const product = {
  getAll: async (params: GetProductsParams = {}) => {
    const skip = ((params.page ?? 1) - 1) * (params.limit ?? 9);

    const res = await api.get("/products", {
      params: { ...params, skip },
    });
    return res.data;
  },
};
