var express = require("express");
var path = require("path");
var router = express.Router();
var UserModel = require("../models/users.js").User;
var passport = require("passport"),
  LocalStrategy = require("passport-local").Strategy;

/* GET home page. */
router.get("/", function(req, res, next) {
  console.log("Registering the get request");
  var randomNumber = Math.random() * 2;

  console.log(randomNumber);

  // if (randomNumber > 1) {
  //   res.render("signup", { title: "Express" });
  // } else {
  //   res.render("index", { title: "Express" });
  res.sendFile(path.join(__dirname, "../public", "testform.html"));
  //
  // }
});

router.post("/signup", function(req, res, next) {
  console.log("registering the post request");
  console.log(req.body);

  var user = new UserModel(req.body.username, req.body.password);

  console.log(user);

  // res.redirect("category.html");

  if (!user.username || user.username == undefined) {
    return res.status(422).json({
      errors: {
        email: "is required"
      }
    });
  }

  if (!user.password || user.password == undefined) {
    return res.status(422).json({
      errors: {
        password: "is required"
      }
    });
  }

  user.save().then(() => res.json({ user: user.toAuthJSON() }));
});

//   passport.use(
//     new LocalStrategy(function(username, password, done) {
//       User.findOne({ username: username }, function(err, user) {
//         if (err) {
//           return done(err);
//         }
//         if (!user) {
//           return done(null, false, { message: "Incorrect username." });
//         }
//         if (!user.validPassword(password)) {
//           return done(null, false, { message: "Incorrect password." });
//         }
//         return done(null, user);
//         console.log("everything finished");
//       });
//     })
//   );

module.exports = router;
