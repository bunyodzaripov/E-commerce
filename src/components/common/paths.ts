export const PATHS = {
  HOME: "/",
  PRODUCTS: "/products",
  PRODUCTS_CATEGORY: "/products/:category",
  PRODUCT: "/product/:id",
  CART: "/cart",
  LOGIN: "/login",
} as const;

export const getProductPath = (id: number) => `/product/${id}`;
