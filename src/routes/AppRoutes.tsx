import { Routes, Route } from "react-router-dom";
import { Layout, PATHS } from "@/components";
import { Home, NotFound, Products } from "@/pages";

const AppRoutes = () => {
  return (
    <>
      {/* <ScrollToTop /> */}
      <Routes>
        <Route element={<Layout />}>
          <Route path={PATHS.HOME} element={<Home />} />
          <Route path={PATHS.PRODUCTS} element={<Products />} />
          <Route path={PATHS.PRODUCTS_CATEGORY} element={<Products />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
