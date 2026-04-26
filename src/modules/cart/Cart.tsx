import { motion } from "framer-motion";
import {
  Container,
  Breadcrumb,
  EmptyState,
  AnimatedSection,
} from "@/components";
import { useCartStore } from "@/store/cartStore";
import CartItem from "./Cartitem";
import OrderSummary from "./OrderSummary";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

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

      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Cart" }]} />

      {/* Sarlavha */}
      <motion.h1
        className="text-3xl font-display md:text-[40px] font-bold text-foreground uppercase mt-4 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        {t("cart.title")}
      </motion.h1>

      {items.length === 0 ? (
        <AnimatedSection direction="fade">
          <EmptyState
            title={t("cart.empty")}
            description={t("cart.description")}
            action={{ label: t("cart.action"), href: `/${lang}/products` }}
          />
        </AnimatedSection>
      ) : (
        <div className="flex flex-col md:flex-row gap-6 md:gap-10">
          {/* Cart Items — chapdan */}
          <motion.div
            className="flex-1 border border-gray-200 dark:border-gray-800 rounded-2xl px-4 md:px-6"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {items.map((item, i) => (
              <motion.div
                key={`${item.id}-${item.size}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <CartItem item={item} />
              </motion.div>
            ))}
          </motion.div>

          {/* Order Summary — o'ngdan */}
          <motion.div
            className="md:sticky md:top-24"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <OrderSummary subtotal={subtotal} />
          </motion.div>
        </div>
      )}
    </Container>
  );
}
