const express = require("express");
const { protect, authorize } = require("../middleware/protect");

const {
  getNewss,
  getNews,
  createNews,
  deleteNews,
  updateNews,
  // uploadNewsPhoto,
} = require("../controller/news.js");

const router = express.Router();

//"/api/v1/books"
router
  .route("/")
  .get(getNewss)
  .post(protect, authorize("admin", "operator"), createNews);

router
  .route("/:id")
  .get(getNews)
  .delete(protect, authorize("admin", "operator"), deleteNews)
  .put(protect, authorize("admin", "operator"), updateNews);

// router
//   .route("/:id/photo")
//   // .put(protect, authorize("admin", "operator"), uploadNewsPhoto);

module.exports = router;
