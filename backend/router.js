const express = require("express");
const router = express.Router();

// GET
router.get("/", (req, res) => {
    res.send("server is up and running");
});

module.exports = router;