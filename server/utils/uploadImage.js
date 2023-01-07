let cloudinary = require("cloudinary").v2;
const MyError = require("./myError");

cloudinary.config({
  // cloud_name: process.env.CLOUDINARY_NAME,
  // api_key: process.env.CLOUDINARY_API_KEY,
  // api_secret: process.env.CLOUDINARY_API_SECRET,
  cloud_name: "dqgg1rnar",
  api_key: "263926512931731",
  api_secret: "BpSP9R7cx7z8J8XJ6aNwKd-37QM",
  secure: true,
});

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
