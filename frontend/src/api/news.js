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

export const addNews = async ({ body, token }) => {
  let img_url;
  if (body.photo) {
    const res = await baseUrl.post("/upload", { photo: body.photo });
    img_url = res.data.imgUrl;
  }

  return await baseUrl.post(
    "/news",
    { ...body, photo: img_url },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  // console.log(response.data);
};
