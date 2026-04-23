import { ShoppingBag } from "lucide-react";

export default function PageLoader() {
  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        {/* Tashqi ring */}
        <div className="relative w-20 h-20">
          <div className="absolute inset-0 rounded-full border-4 border-gray-100" />
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-black animate-spin" />
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-b-gray-300 animate-spin [animation-duration:1.5s]" />

          {/* Ichki icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <ShoppingBag className="w-7 h-7 text-black" />
          </div>
        </div>

        {/* Matn */}
        <div className="flex flex-col items-center gap-1">
          <span
            className="text-lg font-black text-black uppercase tracking-widest"
            style={{ fontFamily: "'Arial Black', 'Arial Bold', sans-serif" }}
          >
            Shop.co
          </span>

          {/* Nuqtalar animatsiyasi */}
          <div className="flex items-center gap-1.5 mt-1">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-1.5 h-1.5 bg-black rounded-full animate-bounce"
                style={{ animationDelay: `${i * 0.15}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
