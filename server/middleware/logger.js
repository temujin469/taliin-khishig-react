const logger = (req, res, next) => {
  console.log(
    `${req.method} ${req.protocol}://${req.hostname}${req.originalUrl}`.green
  );
  next();
};

module.exports = logger;
