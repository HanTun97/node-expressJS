const express = require("express");

let router = express.Router();

router.get("/api", (req, res, next) => {
    res.send("This is a get request /api");
});

router.get("/", (req, res, next) => {
    res.send("This is a get request");
});


router.post("/", (req, res, next) => {
    res.send("This is a post request");
});

module.exports = router;