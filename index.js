const express = require('express')
const morgan = require('morgan')
const db = require('./src/models')
const user_routes = require("./src/routes/user-routes");
const role_routes = require("./src/routes/role-routes");
const office_routes = require("./src/routes/office-routes");
const status_viatico_request_routes = require("./src/routes/status-viatico-request-routes");
const status_expense_report_routes = require("./src/routes/status-expense-report-routes");
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
app.use(home_routes);

app.all('*', (req, res) => {
	res.send("Not found!");
});

app.listen(port, () => {
 console.log(`Server listening to port ${port}`)
})
