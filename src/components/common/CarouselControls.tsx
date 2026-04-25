import { useCarousel } from "@/components/ui/carousel";
import { Button } from "../ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function CarouselControls() {
  const { scrollPrev, scrollNext, canScrollPrev, canScrollNext } =
    useCarousel();

  return (
    <div className="flex gap-2">
      <Button
        aria-label="Previous"
        variant="ghost"
        onClick={scrollPrev}
        disabled={!canScrollPrev}
        className="rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 w-6! h-6!"
      >
        <ArrowLeft className="w-6! h-6!" />
      </Button>
      <Button
        aria-label="Next"
        variant="ghost"
        onClick={scrollNext}
        disabled={!canScrollNext}
        className="rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 w-6! h-6!"
      >
        <ArrowRight className="w-6! h-6!" />
      </Button>
    </div>
  );
}
