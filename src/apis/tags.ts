import { apiClient } from "./client";

export const getTags = async () => {
  return await apiClient({
    method: "get",
    url: `/tags`,
  });
};
