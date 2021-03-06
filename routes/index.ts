var express = require("express");
var path = require("path");
var router = express.Router();
import { User } from "../models/users";
import { SequelizeDb } from "../config/connections";
// var passport = require("passport"),
//   LocalStrategy = require("passport-local").Strategy;

//how are exporting from default and exporting modules different?

import passport from "../config/passport";

/* GET home page. */
router.get("/", function(req, res, next) {
  console.log("Registering the get request");
  res.sendFile(path.join(__dirname, "../public", "signup.html"));

  // if (randomNumber > 1) {
  //   ;
  // } else {
  //   res.render("index", { title: "Express" });

  //
  // }
});

router.post("/signup", function(req, res, next) {
  console.log("registering the post request");
  console.log(req.body);

  var user = new User();

  user.username = req.body.username;
  user.password = req.body.password;

  console.log(user);
  user.save();

  if (req.body.type == "student") {
    res.render("index", { user: user });
  } else {
    res.render("counselorDashboard", { user: user });
  }
});

router.post("/login", passport.authenticate("local"), function(req, res, next) {
  console.log("registering the login request");
  console.log(req.body);

  if (req.body.type == "student") {
    res.render("index", { user: req.body });
  } else {
    res.render("counselorDashboard", { user: req.body });
  }
});

router.get("/logout", function(req, res) {
  req.logout();
  res.redirect("/");
});

module.exports = router;
