"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var path = require("path");
var router = express.Router();
const users_1 = require("../models/users");
// var passport = require("passport"),
//   LocalStrategy = require("passport-local").Strategy;
//how are exporting from default and exporting modules different?
const passport_1 = __importDefault(require("../config/passport"));
/* GET home page. */
router.get("/", function (req, res, next) {
    console.log("Registering the get request");
    var randomNumber = Math.random() * 2;
    console.log(randomNumber);
    // if (randomNumber > 1) {
    //   res.render("signup", { title: "Express" });
    // } else {
    //   res.render("index", { title: "Express" });
    res.sendFile(path.join(__dirname, "../public", "testform2.html"));
    //
    // }
});
router.post("/signup", function (req, res, next) {
    console.log("registering the post request");
    console.log(req.body);
    var user = new users_1.User();
    user.username = req.body.username;
    user.password = req.body.password;
    console.log(user);
    user.save();
    //imported passport code
    //
    res.redirect("category.html");
});
router.post("/login", passport_1.default.authenticate("local"), function (req, res, next) {
    console.log("registering the login request");
    // User.findOne({ where: { username: "Juan" } }).then(user => {
    //   console.log(user);
    //   // project will be the first entry of the Projects table with the title 'aProject' || null
    // });
    // Telling passport we want to use a Local Strategy. In other words,
    //we want login with a username/email and password
    //
    res.redirect("category.html");
});
module.exports = router;
//# sourceMappingURL=index.js.map