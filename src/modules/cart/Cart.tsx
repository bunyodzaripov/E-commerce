import { Container, Breadcrumb, EmptyState } from "@/components";
import { useCartStore } from "@/store/cartStore";
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
        <EmptyState
          title="Your cart is empty"
          description="Browse our products and add something you like"
          action={{ label: "Continue Shopping", href: "/products" }}
        />
      ) : (
        <div className="flex flex-col md:flex-row gap-6 md:gap-10">
          {/* Cart Items */}
          <div className="flex-1 border border-gray-200 rounded-2xl px-4 md:px-6">
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
