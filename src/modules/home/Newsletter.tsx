import { Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { UIButton } from "@/components";
import { useTranslation } from "react-i18next";

export default function Newsletter() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-40 bg-black rounded-[20px] py-8 lg:py-9 px-6 lg:px-10">
      <h2 className="font-display text-[24px] md:text-[32px] lg:text-[40px] font-bold text-white uppercase leading-tight tracking-tight">
        {t("footer.newsletter")}
      </h2>

      <div className="flex flex-col gap-2 w-full lg:max-w-87.5">
        <div className="relative">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input
            type="email"
            placeholder={t("footer.placeholder")}
            className="rounded-full pl-10 pr-4 py-3 bg-white text-black placeholder:text-gray-400 border-none text-sm h-10 md:h-12"
          />
        </div>
        <UIButton className="w-auto h-10 md:h-12">
          {t("footer.subscribe")}
        </UIButton>
      </div>
    </div>
  );
}
