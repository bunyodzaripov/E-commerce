import type { CartItem } from "@/@types";
import api from "./api";

export const cart = {
  checkout: (items: CartItem[]) =>
    api
      .post("/carts/add", {
        userId: 1, // login bo'lganda real userId
        products: items.map((item) => ({
          id: item.id,
          quantity: item.quantity,
        })),
      })
      .then((r) => r.data),
};
