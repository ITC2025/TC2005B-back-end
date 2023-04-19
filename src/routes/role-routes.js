// Role routes
let express = require("express");
let role_controller = require("../controllers/role-controller");

let router = express.Router();

router.get("/:id", role_controller.role_get_by_id);
router.get("/", role_controller.role_index);
router.patch("/:id", role_controller.role_update);
router.post("/", role_controller.role_create);
router.delete("/:id", role_controller.role_delete);

module.exports = router;
