// Refund cashier routes
let express = require("express");
let refund_cashier_controller = require("../controllers/refund-cashier-controller");

let router = express.Router();

router.get("/:id", refund_cashier_controller.refund_cashier_get_by_id);
router.get("/", refund_cashier_controller.refund_cashier_index);
router.patch("/:id", refund_cashier_controller.refund_cashier_update);
router.post("/", refund_cashier_controller.refund_cashier_create);
router.delete("/:id", refund_cashier_controller.refund_cashier_delete);

module.exports = router;
