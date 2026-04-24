import type { CartItem } from "@/@types";
import { useCartStore } from "@/store/cartStore";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";

export default function CartItem({ item }: { item: CartItem }) {
  const { removeItem, updateQuantity } = useCartStore();

  const { t } = useTranslation();

  const handleRemove = () => {
    removeItem(item.id, item.size);
    toast.success(t("toast.removed"));
  };
  return (
    <div className="flex items-center gap-4 py-5 border-b border-gray-100 last:border-none">
      {/* Rasm */}
      <div className="w-20 h-20 md:w-24 md:h-24 bg-gray-100 rounded-2xl overflow-hidden shrink-0">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-contain p-2"
        />
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-bold text-black text-sm md:text-base leading-snug truncate">
            {item.title}
          </h3>
          <button
            onClick={handleRemove}
            className="text-red-400 hover:text-red-600 transition-colors shrink-0"
          >
            <Trash2 className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        </div>

        <div className="flex flex-col gap-0.5 mt-1">
          <p className="text-xs text-gray-400">
            {t("products.size")}:{" "}
            <span className="text-gray-600">{item.size}</span>
          </p>
          {item.color && (
            <p className="text-xs text-gray-400">
              {t("products.colors")}:{" "}
              <span className="text-gray-600">{item.color}</span>
            </p>
          )}
        </div>

        <div className="flex items-center justify-between mt-3">
          <span className="text-base md:text-lg font-bold text-black">
            ${item.price}
          </span>

          {/* Quantity */}
          <div className="flex items-center gap-3 bg-gray-100 rounded-full px-4 py-2">
            <button
              onClick={() =>
                updateQuantity(
                  item.id,
                  item.size,
                  Math.max(1, item.quantity - 1),
                )
              }
            >
              <Minus className="w-3 h-3" />
            </button>
            <span className="text-sm font-medium w-4 text-center">
              {item.quantity}
            </span>
            <button
              onClick={() =>
                updateQuantity(item.id, item.size, item.quantity + 1)
              }
            >
              <Plus className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
