import { useState } from "react";
import { ChevronDown, ChevronUp, Sliders } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import { UIButton } from "@/components";
import { useGetCategories } from "@/hooks";
import { useNavigate, useParams } from "react-router-dom";

// ---- Types ----
interface FilterState {
  priceRange: [number, number];
  colors: string[];
  sizes: string[];
  dressStyles: string[];
}

interface FilterSidebarProps {
  filters: FilterState;
  onChange: (filters: FilterState) => void;
}

const colors = [
  { value: "green", bg: "bg-green-500" },
  { value: "red", bg: "bg-red-500" },
  { value: "yellow", bg: "bg-yellow-400" },
  { value: "orange", bg: "bg-orange-500" },
  { value: "cyan", bg: "bg-cyan-400" },
  { value: "blue", bg: "bg-blue-600" },
  { value: "purple", bg: "bg-purple-500" },
  { value: "pink", bg: "bg-pink-400" },
  { value: "white", bg: "bg-white border border-gray-300" },
  { value: "black", bg: "bg-black" },
];

const sizes = [
  "XX-Small",
  "X-Small",
  "Small",
  "Medium",
  "Large",
  "X-Large",
  "XX-Large",
  "2X-Large",
  "4X-Large",
];

const dressStyles = ["Casual", "Formal", "Party", "Gym"];

// ---- Section wrapper ----
function FilterSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(true);
  return (
    <div className="border-t border-gray-200 py-4">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full text-[20px] font-bold text-black"
      >
        {title}
        {open ? (
          <ChevronUp className="w-4 h-4" />
        ) : (
          <ChevronDown className="w-4 h-4" />
        )}
      </button>
      {open && <div className="mt-4">{children}</div>}
    </div>
  );
}

// ---- Main ----
export default function FilterSidebar({
  filters,
  onChange,
}: FilterSidebarProps) {
  const toggle = <T,>(arr: T[], val: T): T[] =>
    arr.includes(val) ? arr.filter((v) => v !== val) : [...arr, val];

  // Filter categories
  const { data: categories } = useGetCategories();
  const { category: activeCategory } = useParams<{ category: string }>();
  const navigate = useNavigate();

  return (
    <div className="w-full border border-gray-200 rounded-2xl py-5 px-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <span className="text-[20px] font-normal text-black">Filters</span>
        <Sliders className="w-6 h-6 text-gray-500" />
      </div>

      {/* Categories */}
      <FilterSection title="Categories">
        <div className="py-4 flex flex-col gap-3">
          {categories?.map((cat: { slug: string; name: string }) => (
            <button
              key={cat.slug}
              onClick={() => navigate(`/products/${cat.slug}`)}
              className={`flex items-center justify-between text-sm transition-colors ${
                activeCategory === cat.slug
                  ? "text-black font-semibold"
                  : "text-gray-500 hover:text-black"
              }`}
            >
              {cat.name}
              <ChevronDown className="w-4 h-4 -rotate-90" />
            </button>
          ))}
        </div>
      </FilterSection>

      {/* Price */}
      <FilterSection title="Price">
        <Slider
          min={0}
          max={500}
          step={10}
          value={filters.priceRange}
          onValueChange={(val) =>
            onChange({ ...filters, priceRange: val as [number, number] })
          }
          className="mt-2"
        />
        <div className="flex justify-between text-sm font-medium text-black mt-2">
          <span>${filters.priceRange[0]}</span>
          <span>${filters.priceRange[1]}</span>
        </div>
      </FilterSection>

      {/* Colors */}
      <FilterSection title="Colors">
        <div className="flex flex-wrap gap-4">
          {colors.map((color) => (
            <button
              key={color.value}
              onClick={() =>
                onChange({
                  ...filters,
                  colors: toggle(filters.colors, color.value),
                })
              }
              className={cn(
                "w-9 h-9 rounded-full transition-all",
                color.bg,
                filters.colors.includes(color.value) &&
                  "ring-2 ring-offset-2 ring-black",
              )}
            />
          ))}
        </div>
      </FilterSection>

      {/* Sizes */}
      <FilterSection title="Size">
        <div className="flex flex-wrap gap-2">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() =>
                onChange({ ...filters, sizes: toggle(filters.sizes, size) })
              }
              className={cn(
                "px-5 py-2.5 rounded-full text-sm border transition-all",
                filters.sizes.includes(size)
                  ? "bg-black text-white border-black"
                  : "bg-gray-100 text-gray-600 border-transparent hover:border-gray-300",
              )}
            >
              {size}
            </button>
          ))}
        </div>
      </FilterSection>

      {/* Dress Style */}
      <FilterSection title="Dress Style">
        <div className="flex flex-col gap-5">
          {dressStyles.map((style) => (
            <button
              key={style}
              className="flex items-center justify-between text-base font-normal text-gray-500 hover:text-black transition-colors"
            >
              {style}
              <ChevronDown className="w-4 h-4 -rotate-90" />
            </button>
          ))}
        </div>
      </FilterSection>

      {/* Apply */}
      <UIButton className="w-full bg-black text-white hover:bg-gray-800 hover:text-white my-6">
        Apply Filter
      </UIButton>
    </div>
  );
}
