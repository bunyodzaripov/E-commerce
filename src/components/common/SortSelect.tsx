import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";

interface SortSelectProps {
  sortBy: string;
  order: "asc" | "desc";
  onChange: (sortBy: string, order: "asc" | "desc") => void;
}

export default function SortSelect({
  sortBy,
  order,
  onChange,
}: SortSelectProps) {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  const sortOptions = [
    {
      label: t("sort.options.popular"),
      sortBy: "rating",
      order: "desc",
    },
    {
      label: t("sort.options.price_low"),
      sortBy: "price",
      order: "asc",
    },
    {
      label: t("sort.options.price_high"),
      sortBy: "price",
      order: "desc",
    },
    {
      label: t("sort.options.alphabetical"),
      sortBy: "title",
      order: "asc",
    },
  ];

  const selected = sortOptions.find(
    (o) => o.sortBy === sortBy && o.order === order,
  );

  return (
    <div className="hidden md:flex relative text-sm md:text-base text-gray-500 dark:text-gray-400">
      {t("sort.label")}
      <button
        onClick={() => setOpen(!open)}
        className="font-semibold text-foreground flex items-center gap-1 ml-1"
      >
        {selected?.label ?? "Most Popular"} <ChevronDown className="w-4 h-4" />
      </button>
      {open && (
        <div className="absolute top-8 right-0 bg-background border border-gray-200 dark:border-gray-700 rounded-xl shadow-md z-10 w-48">
          {sortOptions.map((option) => (
            <button
              key={option.label}
              onClick={() => {
                onChange(option.sortBy, option.order as "asc" | "desc");
                setOpen(false);
              }}
              className="w-full text-left px-4 py-2.5 text-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
