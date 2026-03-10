import { useMemo } from "react";
import { useCookies } from "react-cookie";

const TOKEN_KEY = "auth_token";

const COOKIE_OPTIONS = {
  path: "/",
  maxAge: 7 * 24 * 60 * 60,
  secure: import.meta.env.PROD,
  sameSite: "strict" as const,
};

// ✅ Hook tashqarisida — pure funksiya, render ga bog'liq emas
const checkTokenValid = (token: string | null): boolean => {
  if (!token) return false;
  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    return payload.exp * 1000 > Date.now();
  } catch {
    return false;
  }
};

export const useAuth = () => {
  const [cookies, setCookie, removeCookie] = useCookies([TOKEN_KEY]);

  const token: string | null = cookies[TOKEN_KEY] ?? null;

  const setToken = (newToken: string): void => {
    setCookie(TOKEN_KEY, newToken, COOKIE_OPTIONS);
  };

  const removeToken = (): void => {
    removeCookie(TOKEN_KEY, { path: "/" });
  };

  // ✅ useMemo — faqat token o'zgarganda qayta hisoblanadi
  const isAuthenticated = useMemo(() => checkTokenValid(token), [token]);

  return {
    token,
    setToken,
    removeToken,
    isAuthenticated,
  };
};
