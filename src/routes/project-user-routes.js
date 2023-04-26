// User routes
const express = require("express");
const project_user_controller = require("../controllers/project-user-controller");

const router = express.Router();

router.get("/:id", project_user_controller.project_user_get_by_id);
router.get("/", project_user_controller.project_user_index);
router.patch("/:id", project_user_controller.project_user_update);
router.post("/", project_user_controller.project_user_create);
router.delete("/:id", project_user_controller.project_user_delete);

module.exports = router;
