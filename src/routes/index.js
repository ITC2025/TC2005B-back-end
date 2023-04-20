let express = require("express");

const user_routes = require("./user-routes");
const role_routes = require("./role-routes");
const office_routes = require("./office-routes");
const status_viatico_request_routes = require("./status-viatico-request-routes");
const status_expense_report_routes = require("./status-expense-report-routes");
const type_expense_routes = require("./type-expense-routes");
const home_routes = require("./home-routes");

let app_router = express.Router(); 

app_router.use("/users", user_routes);
app_router.use("/roles", role_routes);
app_router.use("/offices", office_routes);
app_router.use("/status_viatico_request", status_viatico_request_routes);
app_router.use("/status_expense_report", status_expense_report_routes);
app_router.use("/type_expense", type_expense_routes);
app_router.use(home_routes);
app_router.all('*', (req, res) => {
	res.send("Not found!");
});

module.exports = app_router;
