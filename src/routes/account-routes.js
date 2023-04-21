// Account routes
let express = require("express");
let account_controller = require("../controllers/account-controller");

let router = express.Router();

router.get("/:id", account_controller.account_get_by_id);
router.get("/", account_controller.account_index);
router.patch("/:id", account_controller.account_update);
router.post("/", account_controller.account_create);
router.delete("/:id", account_controller.account_delete);

module.exports = router;