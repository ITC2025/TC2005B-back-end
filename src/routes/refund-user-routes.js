// Refund user routes
let express = require("express");
let refund_user_controller = require("../controllers/refund-user-controller");

let router = express.Router();

router.get("/:id", refund_user_controller.refund_user_get_by_id);
router.get("/", refund_user_controller.refund_user_index);
router.patch("/:id", refund_user_controller.refund_user_update);
router.post("/", refund_user_controller.refund_user_create);
router.delete("/:id", refund_user_controller.refund_user_delete);

module.exports = router;
