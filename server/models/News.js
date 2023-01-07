const mongoose = require("mongoose");
const { slugify } = require("transliteration");

const NewsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "мэдээний нэрийг оруулна уу"],
      unique: true,
      trim: true,
      maxlength: [
        200,
        "мэдээний нэрний урт дээд тал нь 250 тэмдэгт байх ёстой.",
      ],
    },
    photo: {
      type: String,
      default: "no-photo.jpg",
    },
    content: {
      type: String,
      required: [true, "мэдээний тайлбарыг оруулна уу"],
      trim: true,
      maxlength: [1000000, "мэдээний урт хэтэрлээ"],
    },
    createUser: {
      type: mongoose.Schema.ObjectId,
      ref: "Users",
    },
    tags: [{ type: String }],
    review: {
      type: Number,
      default: 0,
    },
    updateUser: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    slug: {
      type: String,
      unique: true,
    },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

// BookSchema.statics.computeCategoryAveragePrice = async function (catId) {
//   const obj = await this.aggregate([
//     { $match: { category: catId } },
//     { $group: { _id: "$category", avgPrice: { $avg: "$price" } } },
//   ]);

//   console.log(obj);
//   let avgPrice = null;

//   if (obj.length > 0) avgPrice = obj[0].avgPrice;

//   await this.model("Category").findByIdAndUpdate(catId, {
//     averagePrice: avgPrice,
//   });

//   return obj;
// };

// BookSchema.post("save", function () {
//   this.constructor.computeCategoryAveragePrice(this.category);
// });

// BookSchema.post("remove", function () {
//   this.constructor.computeCategoryAveragePrice(this.category);
// });

NewsSchema.pre("save", function (next) {
  this.slug = slugify(this.title);
  next();
});

module.exports = mongoose.model("News", NewsSchema);
