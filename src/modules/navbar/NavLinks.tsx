import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@components/ui/dropdown-menu";
import { PATHS } from "@components/index";

const categories = [
  "men's clothing",
  "women's clothing",
  "electronics",
  "jewelery",
];

const NavLinks = () => {
  return (
    <nav className="hidden md:flex items-center gap-6">
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center gap-1 text-black font-medium hover:opacity-70 transition-opacity outline-none">
          Shop <ChevronDown size={16} />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-48 rounded-xl">
          {categories.map((cat) => (
            <DropdownMenuItem key={cat} className="p-0">
              <Link
                to={`${PATHS.SHOP}?category=${cat}`}
                className="w-full px-2 py-1.5 capitalize cursor-pointer"
              >
                {cat}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <Link
        to={PATHS.SHOP}
        className="text-black font-medium hover:opacity-70 transition-opacity"
      >
        On Sale
      </Link>
      <Link
        to={PATHS.SHOP}
        className="text-black font-medium hover:opacity-70 transition-opacity"
      >
        New Arrivals
      </Link>
      <Link
        to={PATHS.SHOP}
        className="text-black font-medium hover:opacity-70 transition-opacity"
      >
        Brands
      </Link>
    </nav>
  );
};

export default NavLinks;
