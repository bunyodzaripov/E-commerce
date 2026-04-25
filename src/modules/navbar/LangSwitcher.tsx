import { useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import i18n from "@/i18n";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Check } from "lucide-react";
import { En, Ru, Uz } from "@/assets";

// Rasmlarni import qiling

const languages = [
  { code: "en", label: "English", flag: En },
  { code: "uz", label: "O'zbek", flag: Uz },
  { code: "ru", label: "Русский", flag: Ru },
];

export default function LangSwitcher() {
  const { lang } = useParams<{ lang: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const [currentLang, setCurrentLang] = useState(lang || "en");

  const currentLanguage = languages.find((l) => l.code === currentLang);

  const handleChange = (code: string) => {
    i18n.changeLanguage(code);
    localStorage.setItem("lang", code);
    setCurrentLang(code);
    const newPath = location.pathname.replace(`/${lang}`, `/${code}`);
    navigate(newPath);
  };

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger className="flex items-center cursor-pointer gap-1.5 outline-none hover:opacity-70 transition-opacity">
        {/* Tanlangan til bayrog'i */}
        <img
          src={currentLanguage?.flag}
          alt={currentLanguage?.label}
          className="w-6 h-4 object-cover rounded-sm"
        />
        <span className="text-sm font-medium uppercase text-foreground">
          {currentLang}
        </span>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-44 rounded-2xl p-2">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleChange(language.code)}
            className="flex items-center justify-between rounded-xl px-3 py-2.5 cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <img
                src={language.flag}
                alt={language.label}
                className="w-6 h-4 object-cover rounded-sm"
              />
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
