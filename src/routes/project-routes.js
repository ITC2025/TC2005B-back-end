// Project routes
let express = require("express");
let project_controller = require("../controllers/project-controller");

let router = express.Router();

router.get("/:id", project_controller.project_get_by_id);
router.post("/:id", project_controller.project_create);

router.get("/", project_controller.project_index);
router.patch("/:id", project_controller.project_update);
router.delete("/:id", project_controller.project_delete);

module.exports = router;