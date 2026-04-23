import { Skeleton } from "@/components/ui/skeleton";

export default function ProductSkeleton() {
  return (
    <div className="flex flex-col gap-3">
      <Skeleton className="w-full h-50 md:h-65 rounded-2xl" />
      <Skeleton className="w-3/4 h-4 rounded-full" />
      <Skeleton className="w-1/2 h-4 rounded-full" />
      <Skeleton className="w-1/4 h-5 rounded-full" />
    </div>
  );
}
