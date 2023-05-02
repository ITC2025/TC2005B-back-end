// Expense table routes
const express = require("express");
const expense_table_controller = require("../controllers/expense-table-controller");

const router = express.Router();

router.get("/:id", expense_table_controller.side_info);
router.get("/vi/:id", expense_table_controller.expense_table);
router.get("/vis/:id", expense_table_controller.sum);


module.exports = router;