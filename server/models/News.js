const mongoose = require("mongoose");

const NewsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Номын нэрийг оруулна уу"],
      unique: true,
      trim: true,
      maxlength: [250, "Номын нэрний урт дээд тал нь 250 тэмдэгт байх ёстой."],
    },
    photo: {
      type: String,
      default: "no-photo.jpg",
    },
    content: {
      type: String,
      required: [true, "Номын тайлбарыг оруулна уу"],
      trim: true,
      maxlength: [5000, "Номын нэрний урт дээд тал нь 20 тэмдэгт байх ёстой."],
    },
    createUser: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
    review: {
      type: number,
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

module.exports = mongoose.model("News", NewsSchema);
