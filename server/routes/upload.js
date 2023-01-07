const express = require("express");
const { uploadFile } = require("../controller/upload");

const router = express.Router();

router.route("/").post(uploadFile);

module.exports = router;
