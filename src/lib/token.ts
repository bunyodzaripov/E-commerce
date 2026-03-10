import { Cookies } from "react-cookie";

const cookies = new Cookies();

const TOKEN_KEY = "auth_token";

const COOKIE_OPTIONS = {
  path: "/",
  // Necha kun saqlansin
  maxAge: 7 * 24 * 60 * 60, // 7 kun (soniyalarda)
  // Productionda HTTPS majburiy
  secure: import.meta.env.PROD,
  // CSRF dan himoya
  sameSite: "strict" as const,
};

export const tokenStorage = {
  // Token saqlash
  set: (token: string): void => {
    cookies.set(TOKEN_KEY, token, COOKIE_OPTIONS);
  },

  // Token olish
  get: (): string | null => {
    return cookies.get(TOKEN_KEY) ?? null;
  },

  // Token o'chirish
  remove: (): void => {
    cookies.remove(TOKEN_KEY, { path: "/" });
  },

  // Token muddatini tekshirish
  isValid: (): boolean => {
    const token = cookies.get(TOKEN_KEY);
    if (!token) return false;

    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      return payload.exp * 1000 > Date.now();
    } catch {
      return false;
    }
  },
};
