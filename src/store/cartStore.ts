import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
  size: string;
  color: string;
  quantity: number;
  discountPercentage?: number;
}

interface CartStore {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: number, size: string) => void;
  updateQuantity: (id: number, size: string, quantity: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      items: [],

      addItem: (item) =>
        set((state) => {
          const existing = state.items.find(
            (i) => i.id === item.id && i.size === item.size,
          );
          if (existing) {
            return {
              items: state.items.map((i) =>
                i.id === item.id && i.size === item.size
                  ? { ...i, quantity: i.quantity + item.quantity }
                  : i,
              ),
            };
          }
          return { items: [...state.items, item] };
        }),

      removeItem: (id, size) =>
        set((state) => ({
          items: state.items.filter((i) => !(i.id === id && i.size === size)),
        })),

      updateQuantity: (id, size, quantity) =>
        set((state) => ({
          items: state.items.map((i) =>
            i.id === id && i.size === size ? { ...i, quantity } : i,
          ),
        })),

      clearCart: () => set({ items: [] }),
    }),
    { name: "cart" }, // localStorage da saqlanadi
  ),
);
