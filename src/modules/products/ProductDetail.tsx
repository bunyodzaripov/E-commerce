import { useState } from "react";
import { useParams } from "react-router-dom";
import { Star, StarHalf, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Container,
  Breadcrumb,
  ReviewCard,
  UIButton,
  ProductSkeleton,
} from "@/components";
import { useGetProductDetails } from "@/hooks";
import type { Review } from "@/@types";
import { useCartStore } from "@/store/cartStore";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";

// ---- Rating Stars ----
function RatingStars({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: full }).map((_, i) => (
        <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
      ))}
      {half && <StarHalf className="w-6 h-6 fill-yellow-400 text-yellow-400" />}
    </div>
  );
}

// ---- Main ----
export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const { data: product, isLoading } = useGetProductDetails(Number(id));
  const { t } = useTranslation();

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [showAllReviews, setShowAllReviews] = useState(false);

  const sizes = ["Small", "Medium", "Large", "X-Large"];

  // Cart add functions
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    try {
      addItem({
        id: product.id,
        title: product.title,
        price: discountedPrice ?? product.price,
        image: product.images[0],
        size: selectedSize,
        color: product.color || "",
        quantity,
      });
      toast.success(t("toast.added"));
    } catch {
      toast.error(t("toast.error"));
    }
  };

  const discountedPrice = product?.discountPercentage
    ? Math.round(product.price * (1 - product.discountPercentage / 100))
    : null;

  const visibleReviews = showAllReviews
    ? product?.reviews
    : product?.reviews?.slice(0, 6);

  if (isLoading) {
    return (
      <Container className="py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {Array.from({ length: 4 }).map((_, i) => (
            <ProductSkeleton key={i} />
          ))}
        </div>
      </Container>
    );
  }

  if (!product) return null;

  // Tabs
  const tabs = [
    { id: "product-details", label: t("product_detail.details") },
    { id: "reviews", label: t("product_detail.reviews") },
    { id: "faqs", label: t("product_detail.faqs") },
  ];

  // Product Specs
  const productSpecs = [
    { label: t("details_info.brand"), value: product.brand },
    { label: t("details_info.category"), value: product.category },
    {
      label: t("details_info.stock"),
      value: t("details_info.stock_value", { count: product.stock }),
    },
    { label: t("details_info.sku"), value: product.sku },
    {
      label: t("details_info.weight"),
      value: t("details_info.weight_value", { amount: product.weight }),
    },
  ];

  return (
    <Container className="py-4 md:py-6">
      <hr className="border-t border-gray-200 dark:border-gray-800 mb-6" />

      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: product.category, href: `/products/${product.category}` },
          { label: product.title },
        ]}
      />

      {/* Product Info */}
      <div className="flex flex-col md:flex-row gap-5 md:gap-10 mt-9">
        {/* Images */}
        <div className="flex flex-col-reverse md:flex-row gap-4 md:w-[60%]">
          {/* Thumbnails */}
          <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible">
            {product.images?.slice(0, 3).map((img: string, i: number) => (
              <button
                key={i}
                onClick={() => setSelectedImage(i)}
                className={`shrink-0 w-27.5 h-26.5 md:w-38 md:h-42 rounded-[20px] bg-[#F0EEED] dark:bg-[#1E1E1E] overflow-hidden border transition-all ${
                  selectedImage === i
                    ? "border-foreground"
                    : "border-transparent"
                }`}
              >
                <img
                  src={img}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          {/* Main Image */}
          <div className="flex-1 bg-[#F0EEED] dark:bg-[#1E1E1E] rounded-[20px] overflow-hidden aspect-square">
            <img
              src={product.images?.[selectedImage]}
              alt={product.title}
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Details */}
        <div className="flex flex-col gap-4 md:w-[40%]">
          <h1 className="font-display text-2xl md:text-4xl lg:text-[40px] text-foreground uppercase ">
            {product.title}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <RatingStars rating={product.rating} />
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {product.rating}/5
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-3">
            <span className="text-2xl md:text-3xl font-bold text-foreground">
              ${discountedPrice ?? product.price}
            </span>
            {discountedPrice && (
              <>
                <span className="text-2xl md:text-3xl text-gray-400 dark:text-gray-600 line-through">
                  ${product.price}
                </span>
                <Badge className="bg-red-100 dark:bg-red-900 text-red-500 dark:text-red-300 rounded-full h-full w-auto">
                  -{Math.round(product.discountPercentage)}%
                </Badge>
              </>
            )}
          </div>

          {/* Description */}
          <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 leading-relaxed">
            {product.description}
          </p>

          <hr className="border-gray-200 dark:border-gray-800" />

          {/* Size */}
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
              {t("products.size")}
            </p>
            <div className="flex flex-wrap gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-5 py-2 rounded-full text-sm font-medium border transition-all ${
                    selectedSize === size
                      ? "bg-foreground text-background border-foreground"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border-transparent hover:border-gray-300 dark:hover:border-gray-700"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <hr className="border-gray-200 dark:border-gray-800" />

          {/* Quantity + Add to Cart */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-4 bg-gray-100 dark:bg-gray-800 rounded-full px-5 py-1 md:py-3">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="text-foreground"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="text-base font-medium w-4 text-center">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="text-foreground"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
            <UIButton
              className="bg-foreground text-background hover:bg-gray-900 dark:hover:bg-gray-200"
              onClick={handleAddToCart}
            >
              {t("product_detail.add_to_cart")}
            </UIButton>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-14 md:mt-20">
        <Tabs defaultValue="reviews">
          <TabsList className="w-full border-b border-gray-200 dark:border-gray-800 bg-transparent rounded-none h-auto">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className="py-4 text-sm md:text-base text-gray-400 dark:text-gray-300 rounded-full"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Product Details Tab */}
          <TabsContent value="product-details" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {productSpecs.map(({ label, value }) => (
                <div
                  key={label}
                  className="flex items-center justify-between bg-gray-50 dark:bg-gray-800 rounded-2xl px-5 py-4"
                >
                  <span className="text-sm text-gray-400 dark:text-gray-500">
                    {label}
                  </span>
                  <span className="text-sm font-semibold text-foreground">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Reviews Tab */}
          <TabsContent value="reviews" className="mt-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-foreground">
                {t("product_detail.reviews_title")}{" "}
                <span className="text-gray-400 dark:text-gray-500 font-normal text-base">
                  ({product.reviews?.length})
                </span>
              </h3>
              <Button className="rounded-full bg-foreground text-background hover:bg-gray-900 dark:hover:bg-gray-200 text-sm px-6">
                {t("product_detail.write_review")}
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
              {visibleReviews?.map((review: Review, i: number) => (
                <ReviewCard key={i} review={review} />
              ))}
            </div>

            {product.reviews?.length > 6 && (
              <div className="flex justify-center mt-8">
                <Button
                  variant="outline"
                  className="rounded-full px-10"
                  onClick={() => setShowAllReviews(!showAllReviews)}
                >
                  {showAllReviews ? "Show Less" : "Load More Reviews"}
                </Button>
              </div>
            )}
          </TabsContent>

          {/* FAQs Tab */}
          <TabsContent value="faqs" className="mt-6">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {t("product_detail.no_faq")}
            </p>
          </TabsContent>
        </Tabs>
      </div>
    </Container>
  );
}
