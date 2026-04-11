import type { Review } from "@/@types";
import { CarouselControls, Container, ReviewCard, Title } from "@/components";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useGetProducts } from "@/hooks/useProducts";

export default function HappyCustomers() {
  const { data, isLoading } = useGetProducts();

  if (isLoading) return <p>Yuklanmoqda...</p>;
  const reviews = data.products.flatMap((product: Review) => product.reviews);

  console.log(reviews);

  return (
    <section className="mt-13 md:mt-20">
      <Carousel opts={{ align: "start", loop: false }}>
        <Container className="flex items-center justify-between mb-8 md:mb-10">
          <Title title="Our Happy Customers" />
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
