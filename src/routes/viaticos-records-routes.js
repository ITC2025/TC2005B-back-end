// User routes
let express = require("express");
let viaticos_record_controller = require("../controllers/viaticos-records-controller");

let router = express.Router();

router.get("/:id", viaticos_record_controller.viaticos_record_get_by_id);
router.get("/", viaticos_record_controller.viaticos_record_index);
router.patch("/:id", viaticos_record_controller.viaticos_record_update);
router.post("/", viaticos_record_controller.viaticos_record_create);
router.delete("/:id", viaticos_record_controller.viaticos_record_delete);

module.exports = router;
