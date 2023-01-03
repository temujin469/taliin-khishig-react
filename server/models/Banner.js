const mongoose = require("mongoose");

const BannerSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Прожектийн нэрийг оруулна уу"],
    unique: true,
    trim: true,
    maxlength: [50, "Прожектийн title урт дээд тал нь 50 тэмдэгт байх ёстой."],
  },
  subTitle: {
    type: String,
    required: [true, "Прожектийн нэрийг оруулна уу"],
    unique: true,
    trim: true,
    maxlength: [
      200,
      "Прожектийн subtitle урт дээд тал нь 200 тэмдэгт байх ёстой.",
    ],
  },
  photo: {
    type: String,
    default: "no-photo.jpg",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Banner", BannerSchema);
