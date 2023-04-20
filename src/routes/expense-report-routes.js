// Expense report routes
let express = require("express");
let expense_report_controller = require("../controllers/expense-report-controller");

let router = express.Router();

router.get("/:id", expense_report_controller.expense_report_get_by_id);
router.get("/", expense_report_controller.expense_report_index);
router.patch("/:id", expense_report_controller.expense_report_update);
router.post("/", expense_report_controller.expense_report_create);
router.delete("/:id", expense_report_controller.expense_report_delete);

module.exports = router;
