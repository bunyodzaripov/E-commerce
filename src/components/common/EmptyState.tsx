// components/common/EmptyState.tsx
import { ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

interface EmptyStateProps {
  title?: string;
  description?: string;
  action?: {
    label: string;
    href: string;
  };
}

export default function EmptyState({
  title,
  description,
  action,
}: EmptyStateProps) {
  const { t } = useTranslation();

  const displayTitle = title || t("empty.title");
  const displayDescription = description || t("empty.description");

  return (
    <div className="flex flex-col items-center justify-center py-20 gap-4 text-center">
      <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
        <ShoppingBag className="w-8 h-8 text-gray-400 dark:text-gray-600" />
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-base font-semibold text-foreground">
          {displayTitle}
        </p>
        <p className="text-sm text-gray-400 dark:text-gray-600 ">
          {displayDescription}
        </p>
      </div>
      {action && (
        <Link to={action.href}>
          <Button className="rounded-full bg-foreground text-background hover:bg-gray-900 dark:hover:bg-gray-700 px-8 py-3 cursor-pointer">
            {action.label}
          </Button>
        </Link>
      )}
    </div>
  );
}
