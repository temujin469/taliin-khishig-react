const express = require("express");
const multer = require("multer");
const path = require("path");
const { uploadFile } = require("../controller/upload");

const router = express.Router();

/* FILE STORAGE */
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../public/assets"));
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

router.route("/").post(upload.single("photo"), uploadFile);

module.exports = router;
