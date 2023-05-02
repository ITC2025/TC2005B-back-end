// Viatico Request routes
const express = require("express");
const viatico_request_controller = require("../controllers/viatico-request-controller");

const router = express.Router();

router.get("/:id", viatico_request_controller.viatico_request_get_by_id);
router.get("/user/:id", viatico_request_controller.viatico_request_get_by_user_id);
router.get("/pm/:id", viatico_request_controller.viatico_request_get_by_pm_id);
router.get("/project/:id", viatico_request_controller.viatico_request_get_by_project_id);
router.get("/", viatico_request_controller.viatico_request_index);
router.patch("/:id", viatico_request_controller.viatico_request_update);
router.post("/", viatico_request_controller.viatico_request_create);
router.delete("/:id", viatico_request_controller.viatico_request_delete);

router.post("/solicitar",viatico_request_controller.solicitar_viatico)

module.exports = router;
