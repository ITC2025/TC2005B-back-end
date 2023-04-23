const express = require('express')
const morgan = require('morgan')
const db = require('./src/models')
const app_router = require("./src/routes/index");

const app = express()
const port = 3001 //Dejen esto en el puerto 3001 por favor

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

app.listen(port, () => {
 console.log(`Server listening to port ${port}`)
})
