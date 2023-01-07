const News = require("../models/News");
const MyError = require("../utils/myError");
const asyncHandler = require("express-async-handler");
const paginate = require("../utils/paginate");

// api/v1/Newss
exports.getNewss = asyncHandler(async (req, res, next) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 6;
  const sort = req.query.sort;
  const select = req.query.select;

  ["select", "sort", "page", "limit"].forEach((el) => delete req.query[el]);

  const pagination = await paginate(page, limit, News);

  const newss = await News.find(req.query, select)
    .populate({ path: "createUser", select: "_id name role" })
    .sort(sort)
    .skip(pagination.start - 1)
    .limit(limit);

  res.status(200).json({
    success: true,
    count: newss.length,
    data: newss,
    pagination,
  });
});

exports.getUserNewss = asyncHandler(async (req, res, next) => {
  req.query.createUser = req.userId;
  return this.getNewss(req, res, next);
});

exports.getNews = asyncHandler(async (req, res, next) => {
  const news = await News.findOne({ slug: req.params.id });

  if (!news) {
    throw new MyError(req.params.id + " ID-тэй мэдээ байхгүй байна.", 404);
  }

  news.review++;
  news.save();

  res.status(200).json({
    success: true,
    data: news,
  });
});

exports.createNews = asyncHandler(async (req, res, next) => {
  req.body.createUser = req.userId;

  const news = await News.create(req.body);

  res.status(200).json({
    success: true,
    data: news,
  });
});

exports.deleteNews = asyncHandler(async (req, res, next) => {
  const news = await News.findById(req.params.id);

  if (!news) {
    throw new MyError(req.params.id + " ID-тэй мэдээ байхгүй байна.", 404);
  }

  if (news.createUser.toString() !== req.userId && req.userRole !== "admin") {
    throw new MyError("Та зөвхөн өөрийнхөө мэдээг л засварлах эрхтэй", 403);
  }

  news.remove();

  res.status(200).json({
    success: true,
    data: news,
    message: "amjilttai ustlaa",
  });
});

exports.updateNews = asyncHandler(async (req, res, next) => {
  const news = await News.findById(req.params.id);

  if (!news) {
    throw new MyError(req.params.id + " ID-тэй мэдээ байхгүйээээ.", 400);
  }

  if (news.createUser.toString() !== req.userId && req.userRole !== "admin") {
    throw new MyError("Та зөвхөн өөрийнхөө мэдээыг л засварлах эрхтэй", 403);
  }

  req.body.updateUser = req.userId;

  for (let attr in req.body) {
    news[attr] = req.body[attr];
  }

  news.save();

  res.status(200).json({
    success: true,
    data: news,
  });
});

// // PUT:  api/v1/Newss/:id/photo
// exports.uploadNewsPhoto = asyncHandler(async (req, res, next) => {
//   const news = await News.findById(req.params.id);

//   if (!news) {
//     throw new MyError(req.params.id + " ID-тэй мэдээ байхгүйээ.", 400);
//   }

//   // image upload

//   const file = req.files.file;

//   if (!file.mimetype.startsWith("image")) {
//     throw new MyError("Та зураг upload хийнэ үү.", 400);
//   }

//   if (file.size > process.env.MAX_UPLOAD_FILE_SIZE) {
//     throw new MyError("Таны зурагны хэмжээ хэтэрсэн байна.", 400);
//   }

//   file.name = `photo_${req.params.id}${path.parse(file.name).ext}`;

//   file.mv(`../../public/upload/image/${file.name}`, (err) => {
//     if (err) {
//       throw new MyError(
//         "Файлыг хуулах явцад алдаа гарлаа. Алдаа : " + err.message,
//         400
//       );
//     }

//     news.photo = file.name;
//     news.save();

//     res.status(200).json({
//       success: true,
//       data: file.name,
//     });
//   });
// });
