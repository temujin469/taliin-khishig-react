exports.uploadFile = (req, res) => {
  const file = req.file;
  console.log("file==>", file);
  return res.status(200).json({ success: true, fileName: file.filename });
};
