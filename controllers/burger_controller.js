var express = require("express");

var burger = require("../models/burger.js");

const mainLayoutView = require("../views/layouts/main.js");
const indexView = require("../views/index.js");




var router = express.Router();


router.get("/", function (req, res) {

    res.send(mainLayoutView.render(indexView.render()));

});

// exports router
module.exports = router;