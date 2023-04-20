const express = require('express')
const morgan = require('morgan')
const db = require('./src/models')
const user_routes = require("./src/routes/user-routes");
const role_routes = require("./src/routes/role-routes");
const office_routes = require("./src/routes/office-routes");
const status_viatico_request_routes = require("./src/routes/status-viatico-request-routes");
const status_expense_report_routes = require("./src/routes/status-expense-report-routes");
const status_refund_routes = require("./src/routes/status-refund-routes");
const accound_routes = require("./src/routes/account-routes");
const notification_routes = require("./src/routes/notification-routes");
const project_routes = require("./src/routes/project-routes");
const viatico_request_routes = require("./src/routes/viatico-request-routes");
const viatico_routes = require("./src/routes/viatico-routes");
const type_expense_routes = require("./src/routes/type-expense-routes");
const home_routes = require("./src/routes/home-routes");

const app = express()
const port = 3000

db.sequelize.sync()
 .then(() => {
 console.log("Synced db.");
 })
 .catch((err) => {
 console.log("Failed to sync db: " + err.message);
});

app.use(morgan('dev'))
app.use(express.json());

app.use("/users", user_routes);
app.use("/roles", role_routes);
app.use("/offices", office_routes);
app.use("/status_viatico_request", status_viatico_request_routes);
app.use("/status_expense_report", status_expense_report_routes);
app.use("/type_expense", type_expense_routes);
app.use("/status_refund", status_refund_routes);
app.use("/accounts", accound_routes);
app.use("/notifications", notification_routes);
app.use("/projects", project_routes);
app.use("/viatico_request", viatico_request_routes);
app.use("/viaticos", viatico_routes);
app.use(home_routes);

app.all('*', (req, res) => {
	res.send("Not found!");
});

app.listen(port, () => {
 console.log(`Server listening to port ${port}`)
})
