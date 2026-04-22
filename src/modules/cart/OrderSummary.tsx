import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cart } from "@/services";
import { useCartStore } from "@/store/cartStore";
import { ArrowRight, Tag } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

// ---- Order Summary ----
export default function OrderSummary({ subtotal }: { subtotal: number }) {
  const [promo, setPromo] = useState("");
  const discount = Math.round(subtotal * 0.2);
  const delivery = 15;
  const total = subtotal - discount + delivery;
  const { items, clearCart } = useCartStore();

  const handleCheckout = async () => {
    try {
      await cart.checkout(items);
      clearCart();
      toast.success("Order placed successfully!");
    } catch {
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="border border-gray-200 rounded-2xl p-6 flex flex-col gap-5 h-fit">
      <h2 className="text-xl font-bold text-black">Order Summary</h2>

      <div className="flex flex-col gap-3">
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Subtotal</span>
          <span className="font-semibold text-black">${subtotal}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Discount (-20%)</span>
          <span className="font-semibold text-red-500">-${discount}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Delivery Fee</span>
          <span className="font-semibold text-black">${delivery}</span>
        </div>
      </div>

      <hr className="border-gray-200" />

      <div className="flex justify-between">
        <span className="font-semibold text-black">Total</span>
        <span className="text-xl font-black text-black">${total}</span>
      </div>

      {/* Promo code */}
      <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-1">
        <Tag className="w-4 h-4 text-gray-400 shrink-0" />
        <Input
          placeholder="Add promo code"
          value={promo}
          onChange={(e) => setPromo(e.target.value)}
          className="border-none bg-transparent shadow-none p-0 h-9 text-sm focus-visible:ring-0"
        />
        <Button
          size="sm"
          className="rounded-full bg-black text-white hover:bg-gray-900 text-xs px-4 shrink-0"
        >
          Apply
        </Button>
      </div>

      {/* Checkout */}
      <Button
        onClick={handleCheckout}
        className="w-full rounded-full bg-black text-white hover:bg-gray-900 h-12 gap-2 text-base"
      >
        Go to Checkout <ArrowRight className="w-4 h-4" />
      </Button>
    </div>
  );
}
