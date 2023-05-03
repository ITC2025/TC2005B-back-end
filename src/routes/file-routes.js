const express = require("express");
const router = express.Router();

const { handle_expense_upload } = require("../middleware/file-middleware");

router.get("/", (req, res) => {
    res.render("file");
});

router.post("/upload", handle_expense_upload, (req,res) =>{
    res.send('uploaded!!!');
    console.log(req.file);
});

module.exports = router;
