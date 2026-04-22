import { Routes, Route } from "react-router-dom";
import { Layout, PATHS } from "@/components";
import { Cart, Home, NotFound, ProductDetail, Products } from "@/pages";

const AppRoutes = () => {
  return (
    <>
      {/* <ScrollToTop /> */}
      <Routes>
        <Route element={<Layout />}>
          <Route path={PATHS.HOME} element={<Home />} />
          <Route path={PATHS.PRODUCTS} element={<Products />} />
          <Route path={PATHS.PRODUCTS_CATEGORY} element={<Products />} />
          <Route path={PATHS.PRODUCT} element={<ProductDetail />} />
          <Route path={PATHS.CART} element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
