import { Link } from "react-router-dom";
import { Menu, ShoppingCart, User } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Container, PATHS, SearchBar } from "@/components";
import NavBanner from "./NavBanner";
import NavLinks from "./NavLinks";
import Logo from "@/assets/images/logos.png";
import { useCartStore } from "@/store/cartStore";

const Navbar = () => {
  const items = useCartStore((state) => state.items);
  const totalCount = items.reduce((acc, i) => acc + i.quantity, 0);

  return (
    <header className="sticky w-full top-0 left-0 z-50 bg-white">
      <NavBanner />
      {/* Container */}
      <Container className="h-16 flex items-center justify-between gap-4">
        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger className="md:hidden p-1">
            <Menu size={22} className="text-black" />
          </SheetTrigger>
          <SheetContent side="left" className="w-72 p-0">
            {/* Mobile Header */}
            <div className="px-4 py-4">
              <Link to={PATHS.HOME}>
                <img src={Logo} alt="logo" className="max-w-35 h-auto" />
              </Link>
            </div>

            {/* Mobile Search */}
            <div className="px-4 py-3 border-b border-gray-100">
              <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 gap-2">
                <SearchBar />
              </div>
            </div>

            {/* Mobile Links */}
            <nav className="flex flex-col px-4 py-4 gap-1">
              {["Shop", "On Sale", "New Arrivals", "Brands"].map((link) => (
                <Link
                  key={link}
                  to={PATHS.PRODUCTS}
                  className="text-black font-medium text-base py-3 border-b border-gray-100 hover:opacity-70 transition-opacity"
                >
                  {link}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>

        <Link to={PATHS.HOME} className="max-w-40">
          <img src={Logo} alt="logo" className="w-full h-auto" />
        </Link>

        <NavLinks />

        <div className="hidden md:flex flex-1 max-w-md">
          <div className="flex items-center w-full bg-gray-100 rounded-full px-4 py-2 gap-2">
            <SearchBar />
          </div>
        </div>

        {/* nav actions */}
        <div className="flex gap-4">
          <Link
            to={PATHS.CART}
            className="flex items-center relative gap-2 text-black font-medium"
          >
            <ShoppingCart size={24} />
            {totalCount > 0 && (
              <span className="absolute -top-2 -right-2 w-5 h-5 bg-black text-white text-xs rounded-full flex items-center justify-center">
                {totalCount}
              </span>
            )}
          </Link>
          <button className="flex items-center gap-2 text-black font-medium">
            <User size={24} />
          </button>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
