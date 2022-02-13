const express = require("express");
const {
  getAllProjects,
  createProject,
  getProjectDetails,
  updateProject,
  deleteProject,
} = require("../controllers/projectController");
const { isAuthenticatedUser, authorizedRoles } = require("../Middleware/auth");

const router = express.Router();

router.route("/projects").get(getAllProjects);
router
  .route("/admin/project/new")
  .post(isAuthenticatedUser, authorizedRoles("admin"), createProject);
router
  .route("/admin/project/:id")
  .get(getProjectDetails)
  .put(isAuthenticatedUser, authorizedRoles("admin"), updateProject)
  .delete(isAuthenticatedUser, authorizedRoles("admin"), deleteProject);

module.exports = router;
