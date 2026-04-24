import { useAuthStore } from "@/store/auth";
import { tokenStorage } from "@/lib/token";
import { useNavigate, useParams } from "react-router-dom";
import { LogOut, LogIn, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";

export default function UserMenu() {
  const { lang } = useParams<{ lang: string }>();
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();

  const { t } = useTranslation();

  const handleLogout = () => {
    tokenStorage.remove();
    logout();
    toast.success(t("toast.logout"));
    navigate(`/${lang ?? "en"}`);
  };

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger
        aria-label="Open user menu"
        className="flex items-center cursor-pointer text-black hover:opacity-70 transition-opacity outline-none"
      >
        {user?.image ? (
          <img
            src={user.image}
            alt={user.firstName}
            className="w-7 h-7 rounded-full object-cover"
          />
        ) : (
          <User size={24} />
        )}
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-56 rounded-2xl p-2">
        {user ? (
          <>
            {/* User info */}
            <div className="flex items-center gap-3 px-3 py-3">
              <img
                src={user.image}
                alt={user.firstName}
                className="w-10 h-10 rounded-full object-cover shrink-0"
              />
              <div className="flex flex-col min-w-0">
                <span className="text-sm font-semibold text-black truncate">
                  {user.firstName} {user.lastName}
                </span>
                <span className="text-xs text-gray-400 truncate">
                  {user.email}
                </span>
              </div>
            </div>

            <DropdownMenuSeparator />

            {/* Logout */}
            <DropdownMenuItem
              onClick={handleLogout}
              className="flex items-center gap-2 text-red-500 hover:text-red-600 hover:bg-red-50 rounded-xl cursor-pointer px-3 py-2.5"
            >
              <LogOut className="w-4 h-4" />
              <span className="text-sm font-medium">{t("nav.logout")}</span>
            </DropdownMenuItem>
          </>
        ) : (
          // Login bo'lmagan
          <DropdownMenuItem
            onClick={() => navigate(`/${lang ?? "en"}/login`)}
            className="flex items-center gap-2 rounded-xl cursor-pointer px-3 py-2.5"
          >
            <LogIn className="w-4 h-4" />
            <span className="text-sm font-medium">{t("nav.login")}</span>
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
