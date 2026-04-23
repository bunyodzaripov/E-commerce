import api from "./api";

interface LoginParams {
  username: string;
  password: string;
}

export const auth = {
  login: (params: LoginParams) =>
    api
      .post("/user/login", {
        ...params,
        expiresInMins: 60,
      })
      .then((r) => r.data),
  refresh: (refreshToken: string) =>
    api
      .post("/auth/refresh", {
        refreshToken,
        expiresInMins: 60,
      })
      .then((r) => r.data),
};
