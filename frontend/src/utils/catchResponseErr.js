export default (err) => {
  return err?.response?.data?.error?.message?.toString() || "Алдаа гарлаа";
};
