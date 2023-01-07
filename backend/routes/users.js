const express = require("express");
const { protect, authorize } = require("../middleware/protect");

const {
  register,
  login,
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../controller/users");

const { getUserNewss } = require("../controller/news");

const router = express.Router();

//"/api/v1/users"
router.route("/register").post(register);
router.route("/login").post(login);

router.use(protect);

//"/api/v1/users"
router
  .route("/")
  .get(authorize("admin", "operator"), getUsers)
  .post(authorize("admin"), createUser);

router
  .route("/:id")
  .get(authorize("admin", "operator"), getUser)
  .put(authorize("admin"), updateUser)
  .delete(authorize("admin"), deleteUser);

router
  .route("/:id/books")
  .get(authorize("admin", "operator", "user"), getUserNewss);

module.exports = router;
