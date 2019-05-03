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
    res.sendFile(path.join(__dirname, "../public", "signup.html"));
    // if (randomNumber > 1) {
    //   ;
    // } else {
    //   res.render("index", { title: "Express" });
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
    if (req.body.type == "student") {
        res.render("index", { user: user });
    }
    else {
        res.render("counselorDashboard", { user: user });
    }
});
router.post("/login", passport_1.default.authenticate("local"), function (req, res, next) {
    console.log("registering the login request");
    console.log(req.body);
    if (req.body.type == "student") {
        res.render("index", { user: req.body });
    }
    else {
        res.render("counselorDashboard", { user: req.body });
    }
});
router.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
});
module.exports = router;
//# sourceMappingURL=index.js.map