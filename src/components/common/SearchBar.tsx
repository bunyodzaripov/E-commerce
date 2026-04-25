import { useState, useRef, useEffect } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Link, useParams } from "react-router-dom";
import { useDebounce } from "@/hooks";
import { useSearchProducts } from "@/hooks";
import type { Product } from "@/@types";
import { useTranslation } from "react-i18next";

export default function SearchBar() {
  const { lang } = useParams<{ lang: string }>();
  const { t } = useTranslation();
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const debouncedSearch = useDebounce(search, 400);
  const ref = useRef<HTMLDivElement>(null);

  const { data, isLoading } = useSearchProducts(debouncedSearch);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative w-full">
      <div className="flex items-center w-full bg-muted rounded-full gap-2">
        <Search size={16} className="text-gray-400 shrink-0" />
        <Input
          placeholder={t("nav.placeholder")}
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          className="border-none bg-transparent! shadow-none px-2 h-auto text-sm focus-visible:ring-0 focus:placeholder:text-transparent"
        />
      </div>

      {/* Dropdown */}
      {open && debouncedSearch.length > 1 && (
        <div className="absolute top-10 left-0 right-0 bg-background border border-gray-200 dark:border-gray-800 rounded-2xl shadow-lg z-50 overflow-y-scroll max-h-80">
          {isLoading ? (
            <div className="p-4 text-sm text-gray-400 dark:text-gray-500">
              Loading...
            </div>
          ) : data?.products?.length === 0 ? (
            <div className="p-4 text-sm text-gray-400 dark:text-gray-500">
              No results found
            </div>
          ) : (
            data?.products?.map((product: Product) => (
              <Link
                key={product.id}
                to={`/${lang ?? "en"}/product/${product.id}`}
                onClick={() => {
                  setOpen(false);
                  setSearch("");
                }}
                className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors "
              >
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="w-10 h-10 object-cover rounded-lg"
                />
                <div>
                  <p className="text-sm font-medium text-foreground">
                    {product.title}
                  </p>
                  <p className="text-xs text-gray-400 dark:text-gray-500">
                    ${product.price}
                  </p>
                </div>
              </Link>
            ))
          )}
        </div>
      )}
    </div>
  );
}
