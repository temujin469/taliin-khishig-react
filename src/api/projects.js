import baseUrl from "../utils/axios";

export const getAllProject = async (page) => {
  const res = await baseUrl.get(
    `/projects?page=${page}&sort=-createdAt&select=-content`
  );
  return res.data;
};

export const addProject = async ({ file, body, token }) => {
  let filename = null;

  if (file) {
    const res = await baseUrl.post("/upload", file);
    filename = res.data.filename;
  }

  return await baseUrl.post(
    "/projects",
    { ...body, photo: filename },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
