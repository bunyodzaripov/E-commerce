import { Button } from "@/components/ui/button";
import { Container, Breadcrumb } from "@/components";
import { useCartStore } from "@/store/cartStore";
import { Link } from "react-router-dom";
import CartItem from "./Cartitem";
import OrderSummary from "./OrderSummary";

// ---- Main ----
export default function CartPage() {
  const { items } = useCartStore();

  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  return (
    <Container className="py-4 md:py-6">
      <hr className="border-t border-gray-200 mb-6" />

      {/* Breadcrumb */}
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Cart" }]} />

      <h1
        className="text-3xl md:text-[40px] font-black text-black uppercase mt-4 mb-8"
        style={{ fontFamily: "'Arial Black', 'Arial Bold', sans-serif" }}
      >
        Your Cart
      </h1>

      {items.length === 0 ? (
        <div className="flex flex-col items-center gap-4 py-20 text-center">
          <p className="text-gray-400 text-lg">Your cart is empty</p>
          <Link to="/products">
            <Button className="rounded-full bg-black text-white hover:bg-gray-900 px-8">
              Continue Shopping
            </Button>
          </Link>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row gap-6 md:gap-10">
          {/* Cart Items */}
          <div className="flex-1 border border-gray-200 rounded-2xl px-4 md:px-6">
            {items.map((item) => (
              <CartItem key={`${item.id}-${item.size}`} item={item} />
            ))}
          </div>

          {/* Order Summary */}
          <div className="w-full md:w-95 shrink-0 md:sticky md:top-24 h-fit">
            <OrderSummary subtotal={subtotal} />
          </div>
        </div>
      )}
    </Container>
  );
}
