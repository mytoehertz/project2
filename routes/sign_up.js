var express = require("express");
var UserModel = require("../models/users.js");
var router = express.Router();
var passport = require("passport"), LocalStrategy = require("passport-local").Strategy;
/* GET home page. */
router.get("/", function (req, res, next) {
    try {
        res.status(200).send({
            message: "success",
            status: res.status,
            resource: "YES!!!"
        });
    }
    catch (e) {
        res.status(500).send({
            message: "failed",
            status: res.status,
            resource: "Server Error"
        });
    }
});
router.post("/signup", function (req, res, next) {
    console.log("registering the post request");
    console.log(req);
    var user = new UserModel(req.username, req.passport);
    console.log(user);
    res.redirect("category.html");
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
});
module.exports = router;
//# sourceMappingURL=sign_up.js.map