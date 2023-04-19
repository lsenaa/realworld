import { apiClient } from "../client";
import { IPostLogin, IPostRegister, IPutUser } from "./usersType";

export const postLogin = async ({ email, password }: IPostLogin) => {
  return await apiClient({
    method: "post",
    url: `/users/login`,
    data: {
      user: {
        email,
        password,
      },
    },
  });
};

export const postRegister = async ({
  username,
  email,
  password,
}: IPostRegister) => {
  return await apiClient({
    method: "post",
    url: `/users`,
    data: {
      user: {
        username,
        email,
        password,
      },
    },
  });
};

export const getUser = async () => {
  return await apiClient({
    method: "get",
    url: `/user`,
  });
};

export const putUser = async (data: { user: IPutUser }) => {
  return await apiClient({
    method: "put",
    url: "/user",
    data,
  });
};
