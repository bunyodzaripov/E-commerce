import { useState } from "react";
import { Sliders } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  AnimatedCard,
  AnimatedSection,
  Breadcrumb,
  Container,
  EmptyState,
  Pagination,
  ProductCard,
  ProductSkeleton,
  SortSelect,
} from "@/components";
import { useGetProducts } from "@/hooks";
import type { Product } from "@/@types";
import { FilterSidebar } from "@/modules";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

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
  const { category, lang } = useParams<{ category: string; lang: string }>();

  // get all products
  const { data, isLoading } = useGetProducts({
    page: currentPage,
    limit: LIMIT,
    sortBy,
    order,
    category,
  });

  const { t } = useTranslation();

  // Pagination
  const products: Product[] = data?.products ?? [];
  const totalPages = Math.ceil((data?.total ?? 0) / LIMIT);

  // ---- Breadcrumb ----
  const categoryName = category
    ? category.charAt(0).toUpperCase() + category.slice(1)
    : "All Products";

  return (
    <Container className="py-2 md:py-6">
      <hr className="border-t border-gray-200 dark:border-gray-800 mb-6" />

      {/* Breadcrumb */}
      <Breadcrumb
        items={[{ label: "Home", href: `/${lang}` }, { label: categoryName }]}
      />

      <div className="flex gap-6 mt-6">
        {/* Sidebar — Mobile hidden */}
        <aside className="hidden md:block w-[30%]">
          <AnimatedSection direction="left" delay={0.2}>
            <FilterSidebar filters={filters} onChange={setFilters} />
          </AnimatedSection>
        </aside>

        {/* Right: Products */}
        <div className="w-full md:w-[70%]">
          {/* Top bar */}
          <div className="flex items-center justify-between mb-6">
            <h1 className="font-display text-[20px] md:text-[28px] lg:text-[32px] font-bold text-foreground uppercase">
              {categoryName}
            </h1>

            <div className="flex items-center gap-3">
              <p className="text-sm md:text-base text-gray-400">
                {t("products.pagination_info", { total: data?.total ?? 0 })}
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

          {/* Products */}
          {isLoading ? (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {Array.from({ length: 4 }).map((_, i) => (
                <ProductSkeleton key={i} />
              ))}
            </div>
          ) : products.length === 0 ? (
            <EmptyState />
          ) : (
            <motion.div
              key={currentPage}
              className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
              variants={{ animate: { transition: { staggerChildren: 0.1 } } }}
              initial="initial"
              animate="animate"
            >
              {products.map((product) => (
                <AnimatedCard key={product.id}>
                  <ProductCard product={product} />
                </AnimatedCard>
              ))}
            </motion.div>
          )}

          {/* Pagination */}
          {products.length > 0 && (
            <Pagination
              current={currentPage}
              total={totalPages}
              onChange={(page) => {
                setCurrentPage(page);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            />
          )}
        </div>
      </div>
    </Container>
  );
}
