import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useParams } from "react-router-dom";
import { Trans } from "react-i18next";

const NavBanner = () => {
  const { lang } = useParams<{ lang: string }>();
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-black text-white text-sm py-2.5 text-center relative">
      <p>
        <Trans
          i18nKey="nav.navbanner"
          components={{
            1: (
              <Link
                to={`/${lang ?? "en"}/login`}
                className="font-bold underline"
              />
            ),
          }}
        />
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
