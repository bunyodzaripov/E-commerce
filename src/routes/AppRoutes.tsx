import { Routes, Route } from "react-router-dom";
import { PATHS } from "../components/index";
import { Home, NotFound } from "../../src/pages/index";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={PATHS.HOME} element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
