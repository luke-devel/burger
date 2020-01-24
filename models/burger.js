// requires Object-Relational Mapping javascript file
var orm = require("../config/orm.js");

// creating burger var which accesses the orm.js fucntions to select, insert, and update a burger
var burger = {
    // selects all burgers on sql database
    selectAll: function (cb) {
        orm.selectAll("burgers", function (response) {
            cb(response);
        });
    },
    // inserts one burger on sql database
    insertOne: function (cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function (response) {
            cb(response);
        });
    },
    // updates one burger on sql database
    updateOne: function (objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function (response) {
            cb(response);
        });
    }
}
console.log(burger);
// exports burger variable with access to funcitons
module.exports = burger;