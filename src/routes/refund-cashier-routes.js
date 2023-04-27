// Refund cashier routes
const express = require("express");
const refund_cashier_controller = require("../controllers/refund-cashier-controller");

const router = express.Router();

router.get("/:id", refund_cashier_controller.refund_cashier_get_by_id);
router.get("/", refund_cashier_controller.refund_cashier_index);
router.patch("/:id", refund_cashier_controller.refund_cashier_update);
router.post("/", refund_cashier_controller.refund_cashier_create);
router.delete("/:id", refund_cashier_controller.refund_cashier_delete);

module.exports = router;
