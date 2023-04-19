const express = require('express')
const morgan = require('morgan')
const db = require('./src/models')
const empleado_routes = require("./src/routes/empleado-routes");
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

app.use("/user", empleado_routes);
app.use(home_routes);

app.all('*', (req, res) => {
	res.send("Not found!");
});

app.listen(port, () => {
 console.log(`Server listening to port ${port}`)
})
