var express = require("express");

var burger = require("../models/burger.js");

var index = require("../views/index.js");


var router = express.Router();


router.get("/", function (req, res) {

    res.render(index.render());

});

// exports router
module.exports = router;