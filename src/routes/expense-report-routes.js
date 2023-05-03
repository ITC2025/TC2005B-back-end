// Expense report routes
const express = require("express");
const expense_report_controller = require("../controllers/expense-report-controller");
const { handle_expense_upload } = require("../middleware/file-middleware");

const router = express.Router();

router.get("/:id", expense_report_controller.expense_report_get_by_id);
router.get("/", expense_report_controller.expense_report_index);
router.get("/pm/:id", expense_report_controller.expense_report_pm_get_by_viatico_id);
router.patch("/:id", expense_report_controller.expense_report_update);
router.post("/", handle_expense_upload, expense_report_controller.expense_report_create);
router.patch("/choice/:id", expense_report_controller.expense_report_patch_status);
router.delete("/:id", expense_report_controller.expense_report_delete);
router.post("/crear", expense_report_controller.crear_reporte);

module.exports = router;
