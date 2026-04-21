import { useState, useRef, useEffect } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { useDebounce } from "@/hooks";
import { useSearchProducts } from "@/hooks";
import type { Product } from "@/@types";

export default function SearchBar() {
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
      <div className="flex items-center w-full bg-gray-100 rounded-full gap-2">
        <Search size={16} className="text-gray-400 shrink-0" />
        <Input
          placeholder="Search for products..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          className="border-none bg-transparent shadow-none p-0 h-auto text-sm focus-visible:ring-0 focus:placeholder:text-transparent"
        />
      </div>

      {/* Dropdown */}
      {open && debouncedSearch.length > 1 && (
        <div className="absolute top-10 left-0 right-0 bg-white border border-gray-200 rounded-2xl shadow-lg z-50 overflow-y-scroll max-h-80">
          {isLoading ? (
            <div className="p-4 text-sm text-gray-400">Loading...</div>
          ) : data?.products?.length === 0 ? (
            <div className="p-4 text-sm text-gray-400">No results found</div>
          ) : (
            data?.products?.map((product: Product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                onClick={() => {
                  setOpen(false);
                  setSearch("");
                }}
                className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors "
              >
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="w-10 h-10 object-cover rounded-lg"
                />
                <div>
                  <p className="text-sm font-medium text-black">
                    {product.title}
                  </p>
                  <p className="text-xs text-gray-400">${product.price}</p>
                </div>
              </Link>
            ))
          )}
        </div>
      )}
    </div>
  );
}
