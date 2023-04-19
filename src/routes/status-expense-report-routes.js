// Expense Report Status routes
let express = require("express");
let status_expense_report_controller = require("../controllers/status-expense-report-controller");

let router = express.Router();

router.get("/:id", status_expense_report_controller.status_expense_report_get_by_id);
router.get("/", status_expense_report_controller.status_expense_report_index);
router.patch("/:id", status_expense_report_controller.status_expense_report_update);
router.post("/", status_expense_report_controller.status_expense_report_create);
router.delete("/:id", status_expense_report_controller.status_expense_report_delete);

module.exports = router;
