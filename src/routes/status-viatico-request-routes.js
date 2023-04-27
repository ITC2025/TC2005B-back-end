// Viatico Request Status routes
const express = require("express");
const status_viatico_request_controller = require("../controllers/status-viatico-request-controller");

const router = express.Router();

router.get("/:id", status_viatico_request_controller.status_viatico_request_get_by_id);
router.get("/", status_viatico_request_controller.status_viatico_request_index);
router.patch("/:id", status_viatico_request_controller.status_viatico_request_update);
router.post("/", status_viatico_request_controller.status_viatico_request_create);
router.delete("/:id", status_viatico_request_controller.status_viatico_request_delete);

module.exports = router;
