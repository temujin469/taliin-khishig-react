import baseUrl from "../utils/axios";

export const getAllNews = async (page) => {
  const res = await baseUrl.get(
    `/news?page=${page}&sort=-createdAt&select=-content&-tags`
  );
  return res.data;
};

export const getLatestNews = async () => {
  const res = await baseUrl.get(
    "/news?sort=-createdAt&limit=5&select=-content&-tags"
  );
  return res.data;
};
