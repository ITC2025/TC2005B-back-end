// User routes
const express = require("express");
const viaticos_record_controller = require("../controllers/viaticos-records-controller");

const router = express.Router();

router.get("/:id", viaticos_record_controller.viaticos_record_get_by_id);
router.get("/", viaticos_record_controller.viaticos_record_index);
router.patch("/:id", viaticos_record_controller.viaticos_record_update);
router.post("/", viaticos_record_controller.viaticos_record_create);
router.delete("/:id", viaticos_record_controller.viaticos_record_delete);

module.exports = router;
