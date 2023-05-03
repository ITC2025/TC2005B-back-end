const express = require('express')
const morgan = require('morgan')
const db = require('./src/models')
const app_router = require("./src/routes/index");
const cookie_parser = require("cookie-parser");
const cors = require("cors");

const app = express()
const port = 3001

const multer = require("multer");
const storage = multer.diskStorage({
    destination:'uploads/',
    filename:(req,file,cb) => {
        cb(null, file.originalname); //guardar archivos con su nombre original
    }
});

app.use(multer({storage:storage, dest: 'uploads/' }).single("image"));


app.set("view engine", "ejs");
app.use(morgan('dev'))
app.use(express.json());
app.use(cookie_parser());
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));

app.use(app_router);

db.sequelize.sync()
 .then(() => {
 console.log("Synced db.");
 })
 .catch((err) => {
 console.log("Failed to sync db: " + err.message);
});


app.listen(port, () => {
 console.log(`Server listening to port ${port}`)
})
