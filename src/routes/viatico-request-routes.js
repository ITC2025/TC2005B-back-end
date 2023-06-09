// Viatico Request routes
const express = require("express");
const viatico_request_controller = require("../controllers/viatico-request-controller");

const router = express.Router();


router.get("/:id", viatico_request_controller.viatico_request_get_by_id);
router.get("/user/:id", viatico_request_controller.viatico_request_get_by_user_id);
router.get("/pm/:id", viatico_request_controller.viatico_request_get_by_pm_id);
router.get("/pm/:id/:code", viatico_request_controller.viatico_request_get_by_project);
router.post("/", viatico_request_controller.viatico_request_create);
router.delete("/:id", viatico_request_controller.viatico_request_delete);


router.get("/admin", viatico_request_controller.project_admin);

router.patch("/:id", viatico_request_controller.viatico_request_update);
router.get("/", viatico_request_controller.viatico_request_index);
router.get("/comentario/:id",viatico_request_controller.comRechazo);
router.get("/refBancaria/:id",viatico_request_controller.refBank);
router.post("/solicitar",viatico_request_controller.solicitar_viatico);

module.exports = router;
