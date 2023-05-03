const express = require('express')
const morgan = require('morgan')
const db = require('./src/models')
const app_router = require("./src/routes/index");
const cookie_parser = require("cookie-parser");
const cors = require("cors");
const multer = require("multer");
const path = require("path");

const app = express()
const port = 3001

const storage = multer.diskStorage({
    destination: "data/expense_report_images",
    filename: (req, file, cb) => {
        cb(null, "expense_report_" + Date.now() + path.extname(file.originalname)); 
    }
});

const upload = multer({storage: storage});

app.set("view engine", "ejs");
app.set("expense_report_storage", storage);
app.set("expense_report_upload", upload.single("expense_report_file"));

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

