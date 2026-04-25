import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PaginationProps {
  current: number;
  total: number;
  onChange: (page: number) => void;
}

export default function Pagination({
  current,
  total,
  onChange,
}: PaginationProps) {
  const getPages = () => {
    if (total <= 5) return Array.from({ length: total }, (_, i) => i + 1);
    if (current <= 3) return [1, 2, 3, "...", total];
    if (current >= total - 2) return [1, "...", total - 2, total - 1, total];
    return [1, "...", current - 1, current, current + 1, "...", total];
  };

  return (
    <div className="flex items-center justify-center gap-2 mt-8 md:mt-12">
      <Button
        variant="outline"
        className="rounded-lg text-sm gap-1"
        onClick={() => onChange(current - 1)}
        disabled={current === 1}
      >
        <ChevronLeft className="w-4 h-4" />
      </Button>

      <div className="flex items-center gap-1">
        {getPages().map((page, i) =>
          page === "..." ? (
            <span key={i} className="px-2 text-gray-400 dark:text-gray-500">
              ...
            </span>
          ) : (
            <button
              key={i}
              onClick={() => onChange(page as number)}
              className={`w-8 h-8 rounded-lg text-sm font-medium transition-all ${
                current === page
                  ? "bg-gray-100 dark:bg-gray-800 text-foreground"
                  : "text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-400"
              }`}
            >
              {page}
            </button>
          ),
        )}
      </div>

      <Button
        variant="outline"
        className="rounded-lg text-sm gap-1"
        onClick={() => onChange(current + 1)}
        disabled={current === total}
      >
        <ChevronRight className="w-4 h-4" />
      </Button>
    </div>
  );
}
