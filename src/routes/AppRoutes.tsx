import { Routes, Route } from "react-router-dom";
import { Home, NotFound } from "@/pages";
import { PATHS } from "@/components";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={PATHS.HOME} element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
