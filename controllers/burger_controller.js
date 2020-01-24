var express = require("express");

var burger = require("../models/burger.js");

const mainLayoutView = require("../views/layouts/main.js");
const indexView = require("../views/index.js");




var router = express.Router();


router.get("/", function (req, res) {
    let newObj;
    burger.selectAll(function (data) {
        newObj = {
            burgers: data
        };
        console.log(newObj.burgers[0]);
    })
    res.send(mainLayoutView.render(indexView.render()));

});

router.post("/", function (req, res) {
    // Adds a new burger to the database
    burger.insertOne(
        ["burger_name"], [req.body.burger_name], function () {
            // redirects to the homepage
            res.redirect("/");
        });
});


// exports router
module.exports = router;