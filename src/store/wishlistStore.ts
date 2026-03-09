import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { WishlistStore, Product } from "../@types";

export const useWishlistStore = create<WishlistStore>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (product: Product) => {
        if (!get().isWishlisted(product.id)) {
          set((state) => ({ items: [...state.items, product] }));
        }
      },

      removeItem: (id: number) =>
        set((state) => ({
          items: state.items.filter((i) => i.id !== id),
        })),

      isWishlisted: (id: number) => get().items.some((i) => i.id === id),
    }),
    { name: "wishlist-storage" },
  ),
);
