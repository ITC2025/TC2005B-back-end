// Viatico routes
let express = require("express");
let viatico_controller = require("../controllers/viatico-controller");

let router = express.Router();

router.get("/:id", viatico_controller.viatico_get_by_id);
router.get("/", viatico_controller.viatico_index);
router.patch("/:id", viatico_controller.viatico_update);
router.post("/", viatico_controller.viatico_create);
router.delete("/:id", viatico_controller.viatico_delete);

module.exports = router;