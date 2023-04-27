// Notification routes
const express = require("express");
const notification_controller = require("../controllers/notification-controller");

const router = express.Router();

router.get("/:id", notification_controller.notification_get_by_id);
router.get("/", notification_controller.notification_index);
router.patch("/:id", notification_controller.notification_update);
router.post("/", notification_controller.notification_create);
router.delete("/:id", notification_controller.notification_delete);

module.exports = router;
