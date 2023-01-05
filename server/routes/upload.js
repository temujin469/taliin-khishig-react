const express = require("express");
const multer = require("multer");
const { uploadFile } = require("../controller/upload");

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../dist/upload");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.route("/").post(upload.single("photo"), uploadFile);

module.exports = router;
