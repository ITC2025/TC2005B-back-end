// StatusReembolso routes
const express = require("express");
const status_refund_controller = require("../controllers/status-refund-controller");

const router = express.Router();

router.get("/:id", status_refund_controller.status_refund_get_by_id);
router.get("/", status_refund_controller.status_refund_index);
router.patch("/:id", status_refund_controller.status_refund_update);
router.post("/", status_refund_controller.status_refund_create);
router.delete("/:id", status_refund_controller.status_refund_delete);

module.exports = router;
