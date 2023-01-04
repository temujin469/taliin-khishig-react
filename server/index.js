const express = require("express");
const dotenv = require("dotenv");
var path = require("path");
const connectDB = require("./config/db");
const colors = require("colors");
const errorHandler = require("./middleware/error");
const logger = require("./middleware/logger");
const cookieParser = require("cookie-parser");
const cors = require("cors");
// Router оруулж ирэх
const projectsRoutes = require("./routes/projects");
const newsRoutes = require("./routes/news");
const usersRoutes = require("./routes/users");
const uploadRoutes = require("./routes/upload");

// Аппын тохиргоог process.env рүү ачаалах
dotenv.config({ path: path.resolve(__dirname, "../.env") });

const app = express();

connectDB();

// Body parser
app.use(express.json());
app.use(
  cors({
    origin: [
      "http://127.0.0.1:3001",
      "https://taliin-khishig-react.vercel.app",
    ],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(logger);
app.use("/api/v1/projects", projectsRoutes);
app.use("/api/v1/news", newsRoutes);
app.use("/api/v1/users", usersRoutes);
app.use("/api/v1/upload", uploadRoutes);

app.use(errorHandler);

if (process.env.NODE_ENV == "production") {
  app.use(express.static(path.join(__dirname, "../dist")));

  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "../dist", "index.html"));
  });
}

app.listen(
  process.env.PORT,
  console.log(`Express сэрвэр ${process.env.PORT} порт дээр аслаа... `.rainbow)
);

// process.on("unhandledRejection", (err, promise) => {
//   console.log(`Алдаа гарлаа : ${err.message}`.underline.red.bold);
//   server.close(() => {
//     process.exit(1);
//   });
// });

module.exports = app;
