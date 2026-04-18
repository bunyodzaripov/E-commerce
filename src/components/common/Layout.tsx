import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "@/modules";

export default function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
