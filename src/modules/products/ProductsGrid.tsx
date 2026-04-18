import { useState } from "react";
import { ChevronDown, ChevronRight, Sliders } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container, Pagination, ProductCard } from "@/components";
import { useGetProducts } from "@/hooks";
import type { Product } from "@/@types";
import { FilterSidebar } from "@/modules";
import { useParams } from "react-router-dom";

const LIMIT = 9;

// ---- Breadcrumb ----
function Breadcrumb({ category }: { category: string }) {
  return (
    <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
      <span className="hover:text-black cursor-pointer">Home</span>
      <ChevronRight className="w-3 h-3" />
      <span className="text-black font-medium">{category}</span>
    </div>
  );
}

// ---- Main ----
export default function ProductsGrid() {
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
      <Breadcrumb category={categoryName} />

      <div className="flex gap-6 mt-6">
        {/* Sidebar — Mobile hidden */}
        <aside className="hidden md:block w-[30%]">
          <FilterSidebar filters={filters} onChange={setFilters} />
        </aside>

        {/* Right: Products */}
        <div className="w-full md:w-[70%]">
          {/* Top bar */}
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl md:text-[28px] lg:text-[32px] font-bold text-black">
              {categoryName}
            </h1>

            <div className="flex items-center gap-3">
              <p className="text-sm md:text-base text-gray-400">
                Showing 1-10 of {data?.total} Products
              </p>

              {/* Sort */}
              <div className="hidden md:flex items-center gap-1 text-sm text-gray-500">
                Sort by:
                <button className="font-semibold text-black flex items-center gap-1">
                  Most Popular <ChevronDown className="w-4 h-4" />
                </button>
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
