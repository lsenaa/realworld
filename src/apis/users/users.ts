import { apiClient } from "../client";
import { IPostLogin, IPostRegister, IPutUser } from "./usersType";

export const postLogin = async ({ email, password }: IPostLogin) => {
  const { data } = await apiClient.post(`/users/login`, {
    user: { email, password },
  });
  return data;
};

export const postRegister = async ({
  username,
  email,
  password,
}: IPostRegister) => {
  try {
    const { data } = await apiClient.post(`/users`, {
      user: { username, email, password },
    });
    return data;
  } catch (e) {
    console.error(e);
  }
};

export const getUser = async () => {
  try {
    const data = await apiClient.get(`/user`);
    return data;
  } catch (e) {
    console.error(e);
  }
};

export const putUser = async (user: IPutUser) => {
  try {
    const data = await apiClient.put(`/user`, { user });
    return data;
  } catch (e) {
    console.error(e);
  }
};
