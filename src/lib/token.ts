import { Cookies } from "react-cookie";

const cookies = new Cookies();
const ACCESS_TOKEN_KEY = "access_token";
const REFRESH_TOKEN_KEY = "refresh_token";

const COOKIE_OPTIONS = {
  path: "/",
  maxAge: 7 * 24 * 60 * 60,
};

export const tokenStorage = {
  // Token saqlash
  set: (accessToken: string, refreshToken: string): void => {
    cookies.set(ACCESS_TOKEN_KEY, accessToken, COOKIE_OPTIONS);
    cookies.set(REFRESH_TOKEN_KEY, refreshToken, COOKIE_OPTIONS);
  },

  // Access token olish
  get: (): string | null => {
    return cookies.get(ACCESS_TOKEN_KEY) ?? null;
  },

  // Refresh token olish
  getRefresh: (): string | null => {
    return cookies.get(REFRESH_TOKEN_KEY) ?? null;
  },

  // Tokenlarni o'chirish
  remove: (): void => {
    cookies.remove(ACCESS_TOKEN_KEY, { path: "/" });
    cookies.remove(REFRESH_TOKEN_KEY, { path: "/" });
  },

  // Access token muddatini tekshirish
  isValid: (): boolean => {
    const token = cookies.get(ACCESS_TOKEN_KEY);
    if (!token) return false;

    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      return payload.exp * 1000 > Date.now();
    } catch {
      return false;
    }
  },
};
