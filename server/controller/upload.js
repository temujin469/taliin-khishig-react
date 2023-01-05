exports.uploadFile = (req, res) => {
  const file = req.file;
  return res.status(200).json({ success: true, filename: file.filename });
};
