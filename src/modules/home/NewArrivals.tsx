import type { Product } from "@/@types";
import { Container, ProductCard } from "@/components";
import { useGetProducts } from "@/hooks";
import { Button } from "@/components/ui/button";

export default function NewArrivals() {
  const { data, isLoading } = useGetProducts();

  if (isLoading) return <p>Yuklanmoqda...</p>;

  return (
    <Container className="mt-14 md:mt-18">
      <h2 className="text-3xl md:text-5xl font-black text-black text-center uppercase mb-8 md:mb-14 tracking-tight">
        New Arrivals
      </h2>

      {/* Products */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 md:gap-5">
        {data?.products?.slice(0, 4).map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="flex justify-center mt-6 md:mt-9">
        <Button
          variant="outline"
          className="rounded-full border border-gray-300 text-black px-10 py-3 text-sm md:text-base font-medium hover:bg-gray-100 transition-all duration-200"
        >
          View All
        </Button>
      </div>
    </Container>
  );
}
