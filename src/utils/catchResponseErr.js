export default (err) => {
  return err?.response?.data?.error?.message || "Алдаа гарлаа";
};
