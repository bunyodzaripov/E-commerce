export const PATHS = {
  HOME: "/:lang",
  PRODUCTS: "/:lang/products",
  PRODUCTS_CATEGORY: "/:lang/products/:category",
  PRODUCT: "/:lang/product/:id",
  CART: "/:lang/cart",
  LOGIN: "/:lang/login",
} as const;

// Link yasash uchun helper
export const getPath = (lang: string, path: string) => `/${lang}${path}`;
