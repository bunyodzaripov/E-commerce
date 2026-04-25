import { Container, Breadcrumb, EmptyState } from "@/components";
import { useCartStore } from "@/store/cartStore";
import CartItem from "./Cartitem";
import OrderSummary from "./OrderSummary";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

// ---- Main ----
export default function CartPage() {
  const { items } = useCartStore();
  const { t } = useTranslation();

  const { lang } = useParams<{ lang: string }>();

  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  return (
    <Container className="py-4 md:py-6">
      <hr className="border-t border-gray-200 dark:border-gray-800 mb-6" />

      {/* Breadcrumb */}
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Cart" }]} />

      <h1 className="text-3xl font-display md:text-[40px] font-bold text-foreground uppercase mt-4 mb-8">
        {t("cart.title")}
      </h1>

      {items.length === 0 ? (
        <EmptyState
          title={t("cart.empty")}
          description={t("cart.description")}
          action={{ label: t("cart.action"), href: `/${lang}/products` }}
        />
      ) : (
        <div className="flex flex-col md:flex-row gap-6 md:gap-10">
          {/* Cart Items */}
          <div className="flex-1 border border-gray-200 dark:border-gray-800 rounded-2xl px-4 md:px-6">
            {items.map((item) => (
              <CartItem key={`${item.id}-${item.size}`} item={item} />
            ))}
          </div>

          {/* Order Summary */}
          <div className=" md:sticky md:top-24">
            <OrderSummary subtotal={subtotal} />
          </div>
        </div>
      )}
    </Container>
  );
}
