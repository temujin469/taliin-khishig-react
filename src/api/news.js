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

export const addNews = async ({ file, body, token }) => {
  let filename = null;

  if (file) {
    const res = await baseUrl.post("/upload", file);
    filename = res.data.filename;
  }

  return await baseUrl.post(
    "/news",
    { ...body, photo: filename },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  // console.log(response.data);
};
