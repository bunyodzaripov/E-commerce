import { useMutation } from "@tanstack/react-query";
import { auth } from "@/services/auth";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "@/store/auth";
import { tokenStorage } from "@/lib/token";
import { useTranslation } from "react-i18next";

export const useLogin = () => {
  const { setUser } = useAuthStore();
  const { t } = useTranslation();

  const navigate = useNavigate();

  return useMutation({
    mutationFn: auth.login,

    onSuccess: (data) => {
      setUser(data);
      navigate("/");
      tokenStorage.set(data.accessToken, data.refreshToken);
      toast.success(t("toast.login", { name: data.firstName }));
    },

    onError: (error) => {
      toast.error(error.message);
    },
  });
};
