import { useMutation } from "@tanstack/react-query";
import { auth } from "@/services/auth";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "@/store/auth";
import { tokenStorage } from "@/lib/token";

export const useLogin = () => {
  const { setUser } = useAuthStore();

  const navigate = useNavigate();

  return useMutation({
    mutationFn: auth.login,

    onSuccess: (data) => {
      setUser(data);
      navigate("/");
      tokenStorage.set(data.accessToken, data.refreshToken);
      toast.success(`Welcome back, ${data.firstName}!`);
    },

    onError: (error) => {
      toast.error(error.message);
    },
  });
};
