"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = __importDefault(require("../models/users"));
var passport = require("passport"), LocalStrategy = require("passport-local").Strategy;
passport.use(new LocalStrategy(
// Our user will sign in using an email, rather than a "username"
function (username, password, done) {
    // When a user tries to sign in this code runs
    users_1.default.findOne({
        where: {
            username: username
        }
    }).then(function (dbUser) {
        console.log("We're in then loop");
        console.log(dbUser);
        // If there's no user with the given email
        if (!dbUser) {
            return done(null, false, {
                message: "Incorrect email."
            });
        }
        // If there is a user with the given email, but the password the user gives us is incorrect
        else if (dbUser.password != password) {
            return done(null, false, {
                message: "Incorrect password."
            });
        }
        // If none of the above, return the user
        return done(null, dbUser);
    });
}));
//
// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
// Just consider this part boilerplate needed to make it all work
passport.serializeUser(function (user, cb) {
    cb(null, user);
});
//
passport.deserializeUser(function (obj, cb) {
    cb(null, obj);
});
//
// Exporting our configured passport
module.exports = passport;
exports.default = passport;
//# sourceMappingURL=passport.js.map