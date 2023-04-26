// User routes
let express = require("express");
let user_controller = require("../controllers/user-controller");

let router = express.Router();

router.get("/viaticos/:id",user_controller.userViaticos);
router.get("/saldo/:id", user_controller.userSaldoGet);

router.get("/:id", user_controller.user_get_by_id);
router.get("/", user_controller.user_index);
router.patch("/:id", user_controller.user_update);
router.post("/", user_controller.user_create);
router.delete("/:id", user_controller.user_delete);

module.exports = router;
