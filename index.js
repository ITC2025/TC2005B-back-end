const express = require('express')
const morgan = require('morgan')
const db = require('./src/models')
const app_router = require("./src/routes/index");
const cookie_parser = require("cookie-parser");

const app = express()
const port = 3001

db.sequelize.sync()
 .then(() => {
 console.log("Synced db.");
 })
 .catch((err) => {
 console.log("Failed to sync db: " + err.message);
});

app.use(morgan('dev'))
app.use(express.json());
app.use(app_router);
app.use(cookie_parser());

app.listen(port, () => {
 console.log(`Server listening to port ${port}`)
})
