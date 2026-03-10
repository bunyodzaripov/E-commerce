export const PATHS = {
  HOME: "/",
  SHOP: "/shop",
  PRODUCT: "/product/:id",
  CART: "/cart",
} as const;

// Helper — product ID bilan link yasash
export const getProductPath = (id: number) => `/product/${id}`;
