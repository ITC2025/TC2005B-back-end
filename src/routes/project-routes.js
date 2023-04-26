// Project routes
const express = require("express");
const project_controller = require("../controllers/project-controller");

const router = express.Router();

router.get("/:id", project_controller.project_get_by_id);
router.get("/", project_controller.project_index);
router.patch("/:id", project_controller.project_update);
router.post("/", project_controller.project_create);
router.delete("/:id", project_controller.project_delete);

module.exports = router;
