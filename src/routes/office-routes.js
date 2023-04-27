// Office routes
const express = require("express");
const office_controller = require("../controllers/office-controller");

const router = express.Router();

router.get("/:id", office_controller.office_get_by_id);
router.get("/", office_controller.office_index);
router.patch("/:id", office_controller.office_update);
router.post("/", office_controller.office_create);
router.delete("/:id", office_controller.office_delete);

module.exports = router;
