import baseUrl from "../utils/axios";

export const getAllUsers = async (page, token) => {
  const res = await baseUrl.get(`/users?page=${page}&sort=-createdAt`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};
