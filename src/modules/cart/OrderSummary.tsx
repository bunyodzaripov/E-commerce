import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cart } from "@/services";
import { useCartStore } from "@/store/cartStore";
import { ArrowRight, Tag } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";

// ---- Order Summary ----
export default function OrderSummary({ subtotal }: { subtotal: number }) {
  const [promo, setPromo] = useState("");
  const discount = Math.round(subtotal * 0.2);
  const delivery = 15;
  const total = subtotal - discount + delivery;
  const { items, clearCart } = useCartStore();

  const { t } = useTranslation();

  const handleCheckout = async () => {
    try {
      await cart.checkout(items);
      clearCart();
      toast.success(t("toast.ordered"));
    } catch {
      toast.error(t("toast.error"));
    }
  };

  return (
    <div className="border border-gray-200 dark:border-gray-800 rounded-2xl p-6 flex flex-col gap-5 h-fit">
      <h2 className="font-display text-xl font-bold text-foreground">
        {t("cart.orderSummary")}
      </h2>

      <div className="flex flex-col gap-3">
        <div className="flex justify-between text-sm">
          <span className="text-gray-500 dark:text-gray-400">
            {t("cart.subtotal")}
          </span>
          <span className="font-semibold text-foreground">${subtotal}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-500 dark:text-gray-400">
            {t("cart.discount")} (-20%)
          </span>
          <span className="font-semibold text-red-500 dark:text-red-400">
            -${discount}
          </span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-500 dark:text-gray-400">
            {t("cart.delivery")}
          </span>
          <span className="font-semibold text-foreground">${delivery}</span>
        </div>
      </div>

      <hr className="border-gray-200 dark:border-gray-800" />

      <div className="flex justify-between">
        <span className="font-semibold text-foreground">{t("cart.total")}</span>
        <span className="text-xl font-bold text-foreground">${total}</span>
      </div>

      {/* Promo code */}
      <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 rounded-full px-4 py-1">
        <Tag className="w-4 h-4 text-gray-400 dark:text-gray-500 shrink-0" />
        <Input
          placeholder={t("cart.promo")}
          value={promo}
          onChange={(e) => setPromo(e.target.value)}
          className="border-none bg-transparent shadow-none p-0 h-9 text-sm focus-visible:ring-0"
        />
        <Button
          size="sm"
          className="rounded-full bg-foreground text-background hover:bg-gray-900 dark:hover:bg-gray-700 text-xs px-4 shrink-0"
        >
          {t("cart.apply")}
        </Button>
      </div>

      {/* Checkout */}
      <Button
        onClick={handleCheckout}
        className="w-full cursor-pointer rounded-full bg-foreground text-background hover:bg-gray-900 dark:hover:bg-gray-700 h-12 gap-2 text-base"
      >
        {t("cart.checkout")} <ArrowRight className="w-4 h-4" />
      </Button>
    </div>
  );
}
