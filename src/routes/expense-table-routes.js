// Expense table routes
const express = require("express");
const expense_table_controller = require("../controllers/expense-table-controller");

const router = express.Router();

router.get("/:id", expense_table_controller.side_info);
router.get("/user/:id", expense_table_controller.expense_table_user);
router.get("/pm/:id", expense_table_controller.expense_table_pm);
router.get("/admin/:id", expense_table_controller.expense_table_admin);
router.get("/vis/:id", expense_table_controller.sum);
router.get("/img/:id", expense_table_controller.expense_image);


module.exports = router;