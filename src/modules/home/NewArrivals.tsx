import type { Product } from "@/@types";
import { Container, ProductCard, UIButton } from "@/components";
import { useGetProducts } from "@/hooks";

export default function NewArrivals() {
  const { data, isLoading } = useGetProducts();

  if (isLoading) return <p>Yuklanmoqda...</p>;

  return (
    <Container className="mt-14 md:mt-18">
      {/* New arrivals section */}
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
        <UIButton>View All</UIButton>
      </div>

      {/* Top selling section */}
      <h2 className="mt-20 md:mt-32 text-3xl md:text-5xl font-black text-black text-center uppercase mb-8 md:mb-14 tracking-tight">
        top selling
      </h2>

      {/* Products */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 md:gap-5">
        {data?.products?.slice(0, 4).map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="flex justify-center mt-6 md:mt-9">
        <UIButton>View All</UIButton>
      </div>
    </Container>
  );
}
