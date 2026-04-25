import { Link, useParams } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const categories = [
  { id: "men's clothing", label: "nav.categories.men_clothing" },
  { id: "women's clothing", label: "nav.categories.women_clothing" },
  { id: "electronics", label: "nav.categories.electronics" },
  { id: "jewelery", label: "nav.categories.jewelery" },
];

const NavLinks = () => {
  const { lang } = useParams<{ lang: string }>();
  const { t } = useTranslation();

  return (
    <nav className="hidden md:flex items-center gap-6">
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center cursor-pointer gap-1 text-foreground font-medium hover:text-gray-600 dark:hover:text-gray-400 outline-none">
          {t("nav.shop")} <ChevronDown size={16} />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-48 rounded-xl">
          {categories.map((cat) => (
            <DropdownMenuItem key={cat.id} className="p-0">
              <Link
                to={`/${lang ?? "en"}/products/${cat.id}`}
                className="w-full px-2 py-1.5 capitalize cursor-pointer"
              >
                {t(cat.label)}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <a
        href="#top-selling"
        className="text-foreground font-medium hover:text-gray-600 dark:hover:text-gray-400 transition-opacity"
      >
        {t("nav.on_sale")}
      </a>

      <a
        href="#new-arrivals"
        className="text-foreground font-medium hover:text-gray-600 dark:hover:text-gray-400 transition-opacity"
      >
        {t("nav.new_arrivals")}
      </a>

      <Link
        to={`/${lang ?? "en"}/products`}
        className="text-foreground font-medium hover:text-gray-600 dark:hover:text-gray-400 transition-opacity"
      >
        {t("nav.products")}
      </Link>
    </nav>
  );
};

export default NavLinks;
