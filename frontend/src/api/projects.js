import baseUrl from "../utils/axios";

export const getAllProject = async (page) => {
  const res = await baseUrl.get(
    `/projects?page=${page}&sort=-createdAt&select=-content`
  );
  return res.data;
};

export const addProject = async ({ body, token }) => {
  let img_url;
  if (body.photo) {
    const res = await baseUrl.post("/upload", { photo: body.photo });
    img_url = res.data.imgUrl;
  }

  return await baseUrl.post(
    "/projects",
    { ...body, photo: img_url },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
