import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout, PATHS, PageLoader } from "@/components";
// import ScrollToTop from "@/components/common/ScrollToTop";

const Home = lazy(() => import("@/pages/Home"));
const Products = lazy(() => import("@/pages/Products"));
const ProductDetail = lazy(() => import("@/pages/ProductDetail"));
const Cart = lazy(() => import("@/pages/Cart"));
const Auth = lazy(() => import("@/pages/Auth"));
const NotFound = lazy(() => import("@/pages/NotFound"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<PageLoader />}>
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
        <Route path={PATHS.LOGIN} element={<Auth />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
