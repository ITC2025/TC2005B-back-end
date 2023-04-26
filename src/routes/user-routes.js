// User routes
const express = require("express");
const user_controller = require("../controllers/user-controller");

const router = express.Router();

router.get("/:id", user_controller.user_get_by_id);
router.get("/", user_controller.user_index);
router.patch("/:id", user_controller.user_update);
router.post("/", user_controller.user_create);
router.delete("/:id", user_controller.user_delete);

module.exports = router;
