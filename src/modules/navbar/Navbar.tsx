import { Link, useParams } from "react-router-dom";
import { Menu, ShoppingCart } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Container, SearchBar } from "@/components";
import NavBanner from "./NavBanner";
import NavLinks from "./NavLinks";
import Logo from "@/assets/images/logos.png";
import { useCartStore } from "@/store/cartStore";
import UserMenu from "./UserIcon";
import LangSwitcher from "./LangSwitcher";
import { useTranslation } from "react-i18next";
import ThemeToggle from "./ThemeToggle";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { lang } = useParams<{ lang: string }>();
  const { t } = useTranslation();

  const mobileLinks = [
    { label: "nav.shop", path: "products" },
    { label: "nav.on_sale", path: "products/on-sale" },
    { label: "nav.new_arrivals", path: "products/new-arrivals" },
    { label: "nav.products", path: "products" },
  ];

  const items = useCartStore((state) => state.items);
  const totalCount = items.reduce((acc, i) => acc + i.quantity, 0);

  return (
    <header className="sticky w-full top-0 left-0 z-50 bg-background">
      <NavBanner />
      {/* Container */}
      <Container className="h-16 flex items-center justify-between gap-2 md:gap-4">
        {/* Mobile Navigation */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            aria-label="Open menu"
            className="md:hidden p-1 cursor-pointer"
          >
            <Menu size={22} className="text-foreground" />
          </SheetTrigger>
          <SheetContent side="left" className="w-72 p-0">
            {/* Mobile Header */}
            <div className="px-4 py-4">
              <Link to={`/${lang ?? "en"}`} onClick={() => setOpen(false)}>
                <img src={Logo} alt="logo" className="max-w-35 h-auto" />
              </Link>
            </div>

            {/* Mobile Search */}
            <div className="px-4 py-3 border-b border-gray-100 dark:border-gray-800">
              <div className="flex items-center bg-muted rounded-full px-4 py-2 gap-2">
                <SearchBar setOpenModal={setOpen} />
              </div>
            </div>

            {/* Mobile Links */}
            <nav className="flex flex-col px-4 py-4 gap-1">
              {mobileLinks.map((link) => (
                <Link
                  onClick={() => setOpen(false)}
                  key={link.label}
                  to={`/${lang ?? "en"}/${link.path}`}
                  className="text-foreground font-medium text-base py-3 border-b border-gray-100 dark:border-gray-800 hover:opacity-70 transition-opacity"
                >
                  {t(link.label)}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>

        <Link to={`/${lang ?? "en"}`} className="max-w-30 md:max-w-40">
          <img src={Logo} alt="logo" className="w-full h-auto dark:invert" />
        </Link>

        <NavLinks />

        <div className="hidden md:flex flex-1 max-w-md">
          <div className="flex items-center w-full bg-muted rounded-full px-4 py-2 gap-2">
            <SearchBar />
          </div>
        </div>

        {/* nav actions */}
        <div className="flex gap-2 md:gap-4">
          <Link
            to={`/${lang ?? "en"}/cart`}
            className="flex items-center relative gap-2 text-foreground font-medium"
          >
            <ShoppingCart size={24} />
            {totalCount > 0 && (
              <span className="absolute -top-2 -right-2 w-5 h-5 bg-foreground text-background text-xs rounded-full flex items-center justify-center">
                {totalCount}
              </span>
            )}
          </Link>
          <UserMenu />
          <ThemeToggle />
          <LangSwitcher />
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
