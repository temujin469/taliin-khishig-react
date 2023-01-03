const express = require("express");
const router = express.Router();
const { protect, authorize } = require("../middleware/protect");

const {
  getProjects,
  getProject,
  createProject,
  updateProject,
  deleteProject,
} = require("../controller/projects");

//"/api/v1/projects"
router
  .route("/")
  .get(getProjects)
  .post(protect, authorize("admin"), createProject);

router
  .route("/:id")
  .get(getProject)
  .put(protect, authorize("admin", "operator"), updateProject)
  .delete(protect, authorize("admin"), deleteProject);

module.exports = router;
