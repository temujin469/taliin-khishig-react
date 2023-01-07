const uploadImage = require("../utils/uploadImage");
const asyncHandler = require("express-async-handler");

exports.uploadFile = asyncHandler(async (req, res, next) => {
  // console.log("req file===>", req.body.photo);
  const url = await uploadImage(req.body.photo);

  return res.status(200).json({ success: true, imgUrl: url });
});
