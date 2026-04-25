import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface UIButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  to?: string;
}

export default function UIButton({
  children,
  onClick,
  className,
  to,
}: UIButtonProps) {
  const button = (
    <Button
      variant="default"
      onClick={onClick}
      className={cn(
        "w-fit rounded-full bg-background border border-[#0000001a] dark:border-[#ffffff1a]  text-foreground hover:bg-gray-200 dark:hover:bg-gray-800 px-8 md:px-12 py-4 md:py-6 text-sm md:text-base font-medium transition-all duration-300 cursor-pointer",
        className,
      )}
    >
      {children}
    </Button>
  );

  if (to) {
    return <Link to={to}>{button}</Link>;
  }

  return button;
}
