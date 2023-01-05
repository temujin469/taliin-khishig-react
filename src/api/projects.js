import baseUrl from "../utils/axios";

export const getAllProject = async (page) => {
  const res = await baseUrl.get(
    `/projects?page=${page}&sort=-createdAt&select=-content`
  );
  return res.data;
};
