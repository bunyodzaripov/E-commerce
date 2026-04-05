import { Link } from "react-router-dom";
import { Menu, ShoppingCart, User, Search } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Container, PATHS } from "@/components";
import NavBanner from "./NavBanner";
import NavLinks from "./NavLinks";
import Logo from "@/assets/images/logos.png";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white">
      <NavBanner />

      <div className="border-b border-gray-200">
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
                <Link to={PATHS.HOME} className="shrink-0">
                  <img src={Logo} alt="logo" className="h-16 w-auto" />
                </Link>
              </div>

              {/* Mobile Search */}
              <div className="px-4 py-3 border-b border-gray-100">
                <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 gap-2">
                  <Search size={16} className="text-gray-400 shrink-0" />
                  <Input
                    placeholder="Search for products..."
                    className="border-none bg-transparent shadow-none p-0 h-auto text-sm focus-visible:ring-0"
                  />
                </div>
              </div>

              {/* Mobile Links */}
              <nav className="flex flex-col px-4 py-4 gap-1">
                {["Shop", "On Sale", "New Arrivals", "Brands"].map((link) => (
                  <Link
                    key={link}
                    to={PATHS.SHOP}
                    className="text-black font-medium text-base py-3 border-b border-gray-100 hover:opacity-70 transition-opacity"
                  >
                    {link}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>

          <Link to={PATHS.HOME} className="shrink-0">
            <img src={Logo} alt="logo" className="h-16 w-auto" />
          </Link>

          <NavLinks />

          <div className="hidden md:flex flex-1 max-w-md">
            <div className="flex items-center w-full bg-gray-100 rounded-full px-4 py-2 gap-2">
              <Search size={16} className="text-gray-400 shrink-0" />
              <Input
                placeholder="Search for products..."
                className="border-none bg-transparent shadow-none p-0 h-auto text-sm focus-visible:ring-0"
              />
            </div>
          </div>

          {/* nav actions */}
          <div className="flex gap-4">
            <Link
              to={PATHS.CART}
              className="flex items-center gap-2 text-black font-medium"
            >
              <ShoppingCart size={24} />
            </Link>
            <button className="flex items-center gap-2 text-black font-medium">
              <User size={24} />
            </button>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Navbar;
