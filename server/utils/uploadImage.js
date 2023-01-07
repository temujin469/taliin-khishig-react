let cloudinary = require("cloudinary").v2;
const MyError = require("./myError");
const dotenv = require("dotenv");
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
// console.log("df", process.env.CLOUDINARY_NAME);

const options = {
  overwrite: true,
  invalidate: true,
  resource_type: "auto",
};

module.exports = (image) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(image, options, (err, result) => {
      if (result && result.secure_url) {
        console.log("secure url==>", result.secure_url.bgGreen);
        return resolve(result.secure_url);
      }
      return reject(new MyError(err.message, 500));
    });
  });
};
