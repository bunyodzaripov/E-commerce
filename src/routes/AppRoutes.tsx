import { Routes, Route } from "react-router-dom";
import { Home, NotFound } from "@/pages";
import { Paths } from "@/components";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={Paths.HOME} element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
