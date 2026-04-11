import type { Review } from "@/@types";
import { CircleCheck, Star } from "lucide-react";

export default function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="w-90 md:w-100 border border-[#0000001a] rounded-[20px] py-7 px-8 flex flex-col gap-3 bg-white shrink-0">
      {/* funksiyani umumiy component qilish kerak*/}
      <div className="flex items-center gap-1">
        {Array.from({ length: review.rating }).map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-[#FFC633] text-[#FFC633]" />
        ))}
      </div>

      <div className="flex items-center gap-2">
        <span className="font-bold text-black text-[20px]">
          {review.reviewerName}
        </span>
        <span className="text-[#01AB31] text-[24px]">
          <CircleCheck />
        </span>
      </div>

      <p className="text-base font-normal text-black/60 leading-relaxed">
        {review.comment}
      </p>
      <p className="mt-5 text-base font-medium text-[#00000099]">
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
