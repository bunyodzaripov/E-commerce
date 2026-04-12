import type { Review } from "@/@types";
import { CarouselControls, Container, ReviewCard, Title } from "@/components";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useGetProducts } from "@/hooks/useProducts";

export default function HappyCustomers() {
  const { data, isLoading, error } = useGetProducts();

  if (error) return <p>{error.message}</p>;
  if (isLoading) return <p>Yuklanmoqda...</p>;
  const reviews = data.products.flatMap((product: Review) => product.reviews);

  return (
    <section className="mt-13 md:mt-20">
      <Carousel opts={{ align: "start", loop: false }}>
        <Container className="flex items-center justify-between">
          <Title title="Our Happy Customers" className="text-start" />
          <CarouselControls />
        </Container>

        <CarouselContent className="gap-5">
          {reviews.slice(0, 20).map((review: Review, id: number) => (
            <CarouselItem key={id} className="basis-100">
              <ReviewCard review={review} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
