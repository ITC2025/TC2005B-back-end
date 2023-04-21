// Expense Type routes
let express = require("express");
let type_expense_controller = require("../controllers/type-expense-controller");

let router = express.Router();

router.get("/:id", type_expense_controller.type_expense_get_by_id);
router.get("/", type_expense_controller.type_expense_index);
router.patch("/:id", type_expense_controller.type_expense_update);
router.post("/", type_expense_controller.type_expense_create);
router.delete("/:id", type_expense_controller.type_expense_delete);

module.exports = router;
