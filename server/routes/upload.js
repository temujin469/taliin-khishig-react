import express from "express";
import multer from "multer";
import { uploadFile } from "../controller/upload";

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../../public/upload");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.route("/").post(upload.single("file"), uploadFile);

export default router;
