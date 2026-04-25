import type { Review } from "@/@types";
import { CircleCheck, Star } from "lucide-react";

export default function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="border border-[#0000001a] dark:border-[#ffffff1a] rounded-[20px] py-7 px-8 flex flex-col gap-3 bg-background shrink-0">
      {/* funksiyani umumiy component qilish kerak*/}
      <div className="flex items-center gap-1">
        {Array.from({ length: review.rating }).map((_, i) => (
          <Star
            key={i}
            className="w-5 h-5 fill-[#FFC633] text-[#FFC633] dark:fill-white dark:text-white"
          />
        ))}
      </div>

      <div className="flex items-center gap-2">
        <span className="font-bold text-foreground text-[20px]">
          {review.reviewerName}
        </span>
        <span className="text-[#01AB31] text-[24px] dark:text-[#01AB31]">
          <CircleCheck />
        </span>
      </div>

      <p className="text-base font-normal text-black/60 dark:text-white/60 leading-relaxed">
        {review.comment}
      </p>
      <p className="mt-5 text-base font-medium text-[#00000099] dark:text-[#ffffff99]">
        Posted on <span></span>
        {new Date(review.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
    </div>
  );
}
