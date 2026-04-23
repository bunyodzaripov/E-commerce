import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NavBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-black text-white text-sm py-2.5 text-center relative">
      <p>
        Sign up and get 20% off to your first order.{" "}
        <Link to="#" className="font-bold underline">
          Sign Up Now
        </Link>
      </p>
      <Button
        aria-label="Close"
        variant="ghost"
        onClick={() => setIsVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
      >
        <X size={16} />
      </Button>
    </div>
  );
};

export default NavBanner;
