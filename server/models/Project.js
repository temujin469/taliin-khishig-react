const mongoose = require("mongoose");
const { slugify } = require("transliteration");

const ProjectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Прожектийн нэрийг оруулна уу"],
      unique: true,
      trim: true,
      maxlength: [
        50,
        "Прожектийн title урт дээд тал нь 50 тэмдэгт байх ёстой.",
      ],
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
    description: {
      type: String,
      required: [true, "Прожектийн тайлбарыг заавал оруулах ёстой."],
      maxlength: [
        500,
        "Прожектийн тайлбарын урт дээд тал нь 500 тэмдэгт байх ёстой.",
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
    slug: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

ProjectSchema.pre("save", function (next) {
  this.slug = slugify(this.title);
  next();
});

module.exports = mongoose.model("Projects", ProjectSchema);
