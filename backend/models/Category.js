const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Категорийн нэрийг оруулна уу"],
      unique: true,
      trim: true,
      maxlength: [
        50,
        "Категорийн нэрний урт дээд тал нь 50 тэмдэгт байх ёстой.",
      ],
    },
    description: {
      type: String,
      required: [true, "Категорийн тайлбарыг заавал оруулах ёстой."],
      maxlength: [
        500,
        "Категорийн тайлбарын урт дээд тал нь 500 тэмдэгт байх ёстой.",
      ],
    },
    photo: {
      type: String,
      default: "no-photo.jpg",
    },
    averageRating: {
      type: Number,
      min: [1, "Рэйтинг хамгийн багадаа 1 байх ёстой"],
      max: [10, "Рэйтинг хамгийн ихдээ 10 байх ёстой"],
    },
    averagePrice: Number,
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

CategorySchema.virtual("books", {
  ref: "Book",
  localField: "_id",
  foreignField: "category",
  justOne: false,
});

CategorySchema.pre("remove", async function (next) {
  console.log("removing ....");
  await this.model("Book").deleteMany({ category: this._id });
  next();
});

module.exports = mongoose.model("Category", CategorySchema);
