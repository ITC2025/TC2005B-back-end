// Viatico routes
const express = require("express");
const viatico_controller = require("../controllers/viatico-controller");

const router = express.Router();

router.get("/:id", viatico_controller.viatico_get_by_id);
router.get(
  "/viaticosSolicitud/:id",
  viatico_controller.viatico_get_expenses_by_ID_solicitud_viatico
);
router.get("/", viatico_controller.viatico_index);
router.patch("/:id", viatico_controller.viatico_update);
router.post("/", viatico_controller.viatico_create);
router.delete("/:id", viatico_controller.viatico_delete);

module.exports = router;
