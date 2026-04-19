import { useState } from "react";
import { Sliders } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  Container,
  Pagination,
  ProductCard,
  SortSelect,
} from "@/components";
import { useGetProducts } from "@/hooks";
import type { Product } from "@/@types";
import { FilterSidebar } from "@/modules";
import { useParams } from "react-router-dom";

const LIMIT = 9;

// ---- Main ----
export default function ProductsGrid() {
  const [sortBy, setSortBy] = useState("title");
  const [order, setOrder] = useState<"asc" | "desc">("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilter, setShowFilter] = useState(false);
  const [filters, setFilters] = useState({
    priceRange: [0, 500] as [number, number],
    colors: [] as string[],
    sizes: [] as string[],
    dressStyles: [] as string[],
  });

  // get all products
  const { data, isLoading } = useGetProducts({
    page: currentPage,
    limit: LIMIT,
    sortBy,
    order,
  });

  // Pagination
  const products: Product[] = data?.products ?? [];
  const totalPages = Math.ceil((data?.total ?? 0) / LIMIT);

  // ---- Breadcrumb ----
  const { category } = useParams<{ category: string }>();
  const categoryName = category
    ? category.charAt(0).toUpperCase() + category.slice(1)
    : "All Products";

  return (
    <Container className="py-2 md:py-6">
      <hr className="border-t border-gray-200 mb-6" />

      {/* Breadcrumb */}
      <Breadcrumb
        items={[{ label: "Home", href: "/" }, { label: categoryName }]}
      />

      <div className="flex gap-6 mt-6">
        {/* Sidebar — Mobile hidden */}
        <aside className="hidden md:block w-[30%]">
          <FilterSidebar filters={filters} onChange={setFilters} />
        </aside>

        {/* Right: Products */}
        <div className="w-full md:w-[70%]">
          {/* Top bar */}
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-[20px] md:text-[28px] lg:text-[32px] font-bold text-black">
              {categoryName}
            </h1>

            <div className="flex items-center gap-3">
              <p className="text-sm md:text-base text-gray-400">
                Showing 1-10 of {data?.total} Products
              </p>

              {/* Sort */}
              <div>
                <SortSelect
                  sortBy={sortBy}
                  order={order}
                  onChange={(s, o) => {
                    setSortBy(s);
                    setOrder(o);
                    setCurrentPage(1);
                  }}
                />
              </div>

              {/* Mobile filter button */}
              <Button
                variant="outline"
                size="sm"
                className="md:hidden rounded-full"
                onClick={() => setShowFilter(!showFilter)}
              >
                <Sliders className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Mobile filter */}
          {showFilter && (
            <div className="md:hidden mb-6">
              <FilterSidebar filters={filters} onChange={setFilters} />
            </div>
          )}

          {/* Products grid */}
          {isLoading ? (
            // Skeleton
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="h-75 bg-gray-100 rounded-2xl animate-pulse"
                />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}

          {/* Pagination */}
          <Pagination
            current={currentPage}
            total={totalPages}
            onChange={(page) => {
              setCurrentPage(page);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          />
        </div>
      </div>
    </Container>
  );
}
