import { createRoot } from "react-dom/client";
import { CookiesProvider } from "react-cookie";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { Toaster } from "sonner";
import { ErrorBoundary } from "./components";
import "@/i18n";

const theme = JSON.parse(
  localStorage.getItem("theme") || '{"state":{"theme":"light"}}',
);
document.documentElement.classList.toggle("dark", theme.state.theme === "dark");

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 daqiqa — barcha query uchun
      retry: 2, // xato bo'lsa 2 marta qayta uradi
      refetchOnWindowFocus: false, // tab almashtirsa qayta so'rov ketmaydi
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <CookiesProvider defaultSetOptions={{ path: "/" }}>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ErrorBoundary>
          <App />
          <Toaster position="top-right" richColors />
        </ErrorBoundary>
      </BrowserRouter>
    </QueryClientProvider>
  </CookiesProvider>,
);
