// Router para empleado:
let express = require("express");
let empleado_controller = require("../controllers/empleado-controller");

let router = express.Router();

router.get("/", empleado_controller.empleado_index);
router.post("/", empleado_controller.empleado_crear);

module.exports = router;
