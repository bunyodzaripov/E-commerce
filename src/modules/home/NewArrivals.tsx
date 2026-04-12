import type { Product } from "@/@types";
import { Container, ProductCard, Title, UIButton } from "@/components";
import { useGetProducts } from "@/hooks";

export default function NewArrivals() {
  const { data, isLoading, error } = useGetProducts();

  if (error) return <p>{error.message}</p>;
  if (isLoading) return <p>Yuklanmoqda...</p>;

  return (
    <Container className="mt-14 lg:mt-18">
      {/* New arrivals section */}
      <Title title="New Arrivals" />

      {/* Products */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        {data?.products?.slice(0, 4).map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="flex justify-center mt-6 md:mt-9 mb-20 md:mb-32 ">
        <UIButton className="w-full md:w-auto">View All</UIButton>
      </div>

      {/* Top selling section */}
      <Title title="Top Selling" />

      {/* Products */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        {data?.products?.slice(0, 4).map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="flex justify-center mt-6 md:mt-9">
        <UIButton className="w-full md:w-auto">View All</UIButton>
      </div>
    </Container>
  );
}
