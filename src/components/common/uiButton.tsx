import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface UIButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function UIButton({
  children,
  onClick,
  className,
}: UIButtonProps) {
  return (
    <Button
      variant="default"
      onClick={onClick}
      className={cn(
        "w-fit rounded-full bg-white border border-gray-300 text-black hover:bg-gray-100 px-30.25 md:px-16.75 py-6 text-sm md:text-base font-medium transition-all duration-300 cursor-pointer",
        className,
      )}
    >
      {children}
    </Button>
  );
}
