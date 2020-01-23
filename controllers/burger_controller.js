var express = require("express");

var burger = require("../models/burger.js");

const index = require("../views/index.js");


var router = express.Router();


router.get("/", function (req, res) {

    res.send(index.render());

});

// exports router
module.exports = router;