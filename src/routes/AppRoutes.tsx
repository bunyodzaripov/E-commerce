import { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Layout, PageLoader, LangLayout } from "@/components";
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
        {/* Default — localStorage dagi tilga redirect */}
        <Route
          path="/"
          element={
            <Navigate to={`/${localStorage.getItem("lang") || "en"}`} replace />
          }
        />

        {/* Til prefix bilan */}
        <Route path="/:lang" element={<LangLayout />}>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="products/:category" element={<Products />} />
            <Route path="product/:id" element={<ProductDetail />} />
            <Route path="cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="login" element={<Auth />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
