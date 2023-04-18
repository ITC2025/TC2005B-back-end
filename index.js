const express = require('express')
const morgan = require('morgan')
const db = require('./src/models')

const app = express()
const port = 3000

db.sequelize.sync({force:true})
 .then(() => {
 console.log("Synced db.");
 })
 .catch((err) => {
 console.log("Failed to sync db: " + err.message);
});

app.use(morgan('dev'))
app.use(express.json());


app.get('/', (req, res) => {
 res.send('Hello World!')
})

app.listen(port, () => {
 console.log(`Example app listening on port ${port}`)
})