export const env = {
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL as string,
  API_TIMEOUT: Number(import.meta.env.VITE_API_TIMEOUT) || 10000,
} as const;
