import type { Product } from "@/@types";
import { Badge } from "@/components/ui/badge";
import { Star, StarHalf } from "lucide-react";
import { Link, useParams } from "react-router-dom";

export default function ProductCard({ product }: { product: Product }) {
  const { lang } = useParams<{ lang: string }>();
  // Discounted price
  const discountedPrice = product.discountPercentage
    ? Math.round(product.price * (1 - product.discountPercentage / 100))
    : null;

  return (
    <Link to={`/${lang ?? "en"}/product/${product.id}`}>
      <div className="flex flex-col gap-3 cursor-pointer group">
        {/* Image */}
        <div className="bg-[#F0EEED] rounded-2xl overflow-hidden flex items-center justify-center p-4">
          <img
            src={product.images[0]}
            alt={product.title}
            className="w-full h-50 md:h-65 object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Title */}
        <p className="font-bold text-black text-sm md:text-base leading-snug">
          {product.title}
        </p>

        {/* Rating */}
        <RatingStars rating={product.rating} />

        {/* Price */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-lg md:text-xl font-bold text-black">
            ${discountedPrice ?? product.price}
          </span>
          {discountedPrice && (
            <span className="text-sm md:text-base text-gray-400 line-through">
              ${product.price}
            </span>
          )}
          {product.discountPercentage && (
            <Badge className="bg-red-100 text-red-500 text-xs font-semibold rounded-full px-2 py-0.5 hover:bg-red-100">
              -{product.discountPercentage}%
            </Badge>
          )}
        </div>
      </div>
    </Link>
  );
}

// Rating Stars
function RatingStars({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;

  return (
    <div className="flex items-center gap-1">
      <div className="flex items-center">
        {Array.from({ length: fullStars }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
        {hasHalf && (
          <StarHalf className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        )}
      </div>
      <span className="text-xs md:text-sm text-gray-500">{rating}/5</span>
    </div>
  );
}
