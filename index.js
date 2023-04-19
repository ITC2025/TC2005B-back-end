const express = require('express')
const morgan = require('morgan')
const db = require('./src/models')
const user_routes = require("./src/routes/user-routes");
const role_routes = require("./src/routes/role-routes");
const office_routes = require("./src/routes/office-routes");
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
app.use(home_routes);

app.all('*', (req, res) => {
	res.send("Not found!");
});

app.listen(port, () => {
 console.log(`Server listening to port ${port}`)
})
