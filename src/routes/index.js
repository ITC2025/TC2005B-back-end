const express = require("express");

const file_routes = require("./file-routes");
const login_routes = require("./login-routes");
const auth_routes = require("./auth-routes");
const user_routes = require("./user-routes");
const role_routes = require("./role-routes");
const office_routes = require("./office-routes");
const status_viatico_request_routes = require("./status-viatico-request-routes");
const status_expense_report_routes = require("./status-expense-report-routes");
const type_expense_routes = require("./type-expense-routes");
const home_routes = require("./home-routes");
const status_refund_routes = require("./status-refund-routes");
const accound_routes = require("./account-routes");
const project_routes = require("./project-routes");
const viatico_request_routes = require("./viatico-request-routes");
const viatico_routes = require("./viatico-routes");
const expense_report_routes = require("./expense-report-routes");
const expense_records_routes = require("./expense-records-routes");
const project_user_routes = require("./project-user-routes");
const refund_cashier_routes = require("./refund-cashier-routes");
const refund_user_routes = require("./refund-user-routes");
const viaticos_records_routes = require("./viaticos-records-routes");
const expense_table_routes = require("./expense-table-routes");

const app_router = express.Router(); 

app_router.use("/", login_routes);
app_router.use("/file", file_routes);
app_router.use("/auth", auth_routes);
app_router.use("/users", user_routes);
app_router.use("/roles", role_routes);
app_router.use("/offices", office_routes);
app_router.use("/status_viatico_request", status_viatico_request_routes);
app_router.use("/status_expense_report", status_expense_report_routes);
app_router.use("/type_expense", type_expense_routes);
app_router.use("/status_refund", status_refund_routes);
app_router.use("/accounts", accound_routes);
app_router.use("/projects", project_routes);
app_router.use("/viatico_request", viatico_request_routes);
app_router.use("/viaticos", viatico_routes);
app_router.use("/expense_reports", expense_report_routes);
app_router.use("/expense_records", expense_records_routes);
app_router.use("/project_user", project_user_routes);
app_router.use("/refund_cashier", refund_cashier_routes);
app_router.use("/refund_user", refund_user_routes);
app_router.use("/viaticos_records", viaticos_records_routes);
app_router.use("/expenses_table", expense_table_routes);


app_router.use(home_routes);

app_router.all('*', (req, res) => {
	res.status(404).json({
		status: "Not Found",
		payload: null
	});
});

module.exports = app_router;
