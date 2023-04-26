// Viatico Request routes
const express = require("express");
const viatico_request_controller = require("../controllers/viatico-request-controller");

const router = express.Router();

router.get("/:id", viatico_request_controller.viatico_request_get_by_id);
router.get("/", viatico_request_controller.viatico_request_index);
router.patch("/:id", viatico_request_controller.viatico_request_update);
router.post("/", viatico_request_controller.viatico_request_create);
router.delete("/:id", viatico_request_controller.viatico_request_delete);

module.exports = router;
