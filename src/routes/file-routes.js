const express = require("express");
const router = express.Router();


router.get("/", (req, res) => {
    
    res.render("file");
});

router.post("/upload", (req,res) =>{
    res.send('uploaded!!!');
    console.log(req.file);
});

module.exports = router;
