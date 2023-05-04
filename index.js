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
    destination: "data/reporte_gastos",
    filename: (req, file, cb) => {
        if (file.fieldname == "imagen") {
            cb(null, "reporte_gasto_imagen_" + Date.now() + path.extname(file.originalname));
        } else { 
            cb(null, "reporte_gasto_factura_" + Date.now() + path.extname(file.originalname));
        }
    }
});

const upload = multer({storage: storage}).fields([
    { name: "imagen", maxCount: 1 }, 
    { name: "xml", maxCount: 1 }
]);

app.set("expense_report_upload", upload);

app.use(express.static('data'));
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

