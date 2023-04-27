// Expense records routes
const express = require("express");
const expense_record_controller = require("../controllers/expense-records-controller");

const router = express.Router();

router.get("/:id", expense_record_controller.expense_record_get_by_id);
router.get("/", expense_record_controller.expense_record_index);
router.patch("/:id", expense_record_controller.expense_record_update);
router.post("/", expense_record_controller.expense_record_create);
router.delete("/:id", expense_record_controller.expense_record_delete);

module.exports = router;
