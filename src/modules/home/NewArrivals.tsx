import type { Product } from "@/@types";
import {
  Container,
  ProductCard,
  ProductSkeleton,
  Title,
  UIButton,
} from "@/components";
import { useGetProducts } from "@/hooks";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

export default function NewArrivals() {
  const { lang } = useParams<{ lang: string }>();
  const { t } = useTranslation();
  const { data, isLoading, error } = useGetProducts({ limit: 8 });

  if (error) return <p>{error.message}</p>;

  return (
    <Container className="mt-14 lg:mt-18">
      {/* New arrivals section */}
      <Title title={t("products.new_arrivals")} id="new-arrivals" />

      {/* Products */}
      {isLoading ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {Array.from({ length: 4 }).map((_, i) => (
            <ProductSkeleton key={i} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {data?.products?.slice(0, 4).map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      <div className="flex justify-center mt-6 md:mt-9 mb-20 md:mb-32 ">
        <UIButton className="w-full md:w-auto" to={`/${lang ?? "en"}/products`}>
          {t("products.view_all")}
        </UIButton>
      </div>

      {/* Top selling section */}
      <Title title={t("products.top_selling")} id="top-selling" />

      {/* Products */}

      {isLoading ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {Array.from({ length: 4 }).map((_, i) => (
            <ProductSkeleton key={i} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {data?.products?.slice(4, 8).map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      <div className="flex justify-center mt-6 md:mt-9">
        <UIButton className="w-full md:w-auto" to={`/${lang ?? "en"}/products`}>
          {t("products.view_all")}
        </UIButton>
      </div>
    </Container>
  );
}
