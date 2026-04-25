import { useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import i18n from "@/i18n";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Check, Globe } from "lucide-react";

const languages = [
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "uz", label: "O'zbek", flag: "🇺🇿" },
  { code: "ru", label: "Русский", flag: "🇷🇺" },
];

export default function LangSwitcher() {
  const { lang } = useParams<{ lang: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const [currentLang, setCurrentLang] = useState(lang || "en");

  const handleChange = (code: string) => {
    i18n.changeLanguage(code);
    localStorage.setItem("lang", code);
    setCurrentLang(code);

    // /en/products → /uz/products
    const newPath = location.pathname.replace(`/${lang}`, `/${code}`);
    navigate(newPath);
  };

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger className="flex items-center cursor-pointer gap-1.5 text-foreground hover:text-gray-600 dark:hover:text-gray-400 outline-none">
        <Globe className="w-5 h-5" />
        <span className="text-sm font-medium uppercase">{currentLang}</span>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-44 rounded-2xl p-2">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleChange(language.code)}
            className="flex items-center justify-between rounded-xl px-3 py-2.5 cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <span>{language.flag}</span>
              <span className="text-sm font-medium">{language.label}</span>
            </div>
            {currentLang === language.code && (
              <Check className="w-4 h-4 text-foreground" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
