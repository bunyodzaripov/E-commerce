// components/common/EmptyState.tsx
import { ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface EmptyStateProps {
  title?: string;
  description?: string;
  action?: {
    label: string;
    href: string;
  };
}

export default function EmptyState({
  title = "No products found",
  description = "Try changing your filters or search query",
  action,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-20 gap-4 text-center">
      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
        <ShoppingBag className="w-8 h-8 text-gray-400" />
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-base font-semibold text-black">{title}</p>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
      {action && (
        <Link to={action.href}>
          <Button className="rounded-full bg-black text-white hover:bg-gray-900 px-8">
            {action.label}
          </Button>
        </Link>
      )}
    </div>
  );
}
