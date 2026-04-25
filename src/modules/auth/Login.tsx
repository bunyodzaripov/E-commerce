import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useLogin } from "@/hooks";
import { useTranslation } from "react-i18next";

export default function LoginPage() {
  const { mutate, isPending } = useLogin();
  const { t } = useTranslation();

  const [form, setForm] = useState({ username: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // name atributi tarjima qilinmasligi kerak, aks holda state yangilanmaydi
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    if (!form.username || !form.password) {
      toast.info(t("toast.info"));
      return;
    }
    mutate(form);
  };

  const stats = [
    { value: "200+", label: t("hero.stats.brands") },
    { value: "2,000+", label: t("hero.stats.products") },
    { value: "30,000+", label: t("hero.stats.customers") },
  ];

  return (
    <div className="min-h-screen flex">
      {/* Left Side: Banner (Hidden on mobile) */}
      <div className="hidden md:flex w-1/2 bg-foreground flex-col justify-between p-12">
        <Link to="/" className="flex items-center gap-2 w-fit">
          <ShoppingBag className="w-6 h-6 text-background" />
          <span className="text-background text-2xl font-bold uppercase tracking-tight">
            Shop.co
          </span>
        </Link>

        <div className="flex flex-col gap-6">
          <h1 className="font-display text-5xl font-bold text-background uppercase leading-tight text-balance">
            {t("hero.title")}
          </h1>
          <p className="text-gray-400 dark:text-gray-500 text-sm leading-relaxed max-w-md">
            {t("hero.description")}
          </p>
        </div>

        <div className="flex gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <span className="text-background text-2xl font-bold">
                {stat.value}
              </span>
              <span className="text-gray-500 dark:text-gray-400 text-xs">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Right Side: Login Form */}
      <div className="flex-1 flex items-center justify-center px-6 md:px-16 bg-background">
        <div className="w-full max-w-md flex flex-col gap-8">
          <Link to="/" className="flex md:hidden items-center gap-2 mb-4">
            <ShoppingBag className="w-5 h-5 text-foreground" />
            <span className="text-foreground text-xl font-bold uppercase">
              Shop.co
            </span>
          </Link>

          <div className="flex flex-col gap-2">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground uppercase">
              {t("auth.login_title")}
            </h2>
            <p className="text-sm text-gray-400 dark:text-gray-500">
              {t("auth.login_subtitle")}
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {/* Username */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-foreground">
                {t("auth.username_label")}
              </label>
              <Input
                name="username" // Name statik qolishi shart
                placeholder={t("auth.username_placeholder")}
                value={form.username}
                onChange={handleChange}
                className="h-12 rounded-xl border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 focus:bg-background transition-all"
              />
            </div>

            {/* Password */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-foreground">
                {t("auth.password_label")}
              </label>
              <div className="relative">
                <Input
                  name="password" // Name statik qolishi shart
                  type={showPassword ? "text" : "password"}
                  placeholder={t("auth.password_placeholder")}
                  value={form.password}
                  onChange={handleChange}
                  onKeyDown={(e) => e.key === "Enter" && handleLogin()}
                  className="h-12 rounded-xl border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 focus:bg-background pr-12 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 hover:text-foreground transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Login button */}
            <Button
              onClick={handleLogin}
              disabled={isPending}
              className="w-full h-12 cursor-pointer rounded-full bg-foreground text-background hover:bg-gray-900 dark:hover:bg-gray-700 font-semibold text-base mt-2 transition-all duration-300"
            >
              {isPending ? t("auth.logging_in") : t("auth.login_button")}
            </Button>
          </div>

          {/* Demo credentials */}
          <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-4 flex flex-col gap-1">
            <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              {t("auth.demo_title")}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {t("auth.username_label")}:{" "}
              <span className="font-semibold text-foreground">emilys</span>
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {t("auth.password_label")}:{" "}
              <span className="font-semibold text-foreground">emilyspass</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
