"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connections_1 = __importDefault(require("./config/connections"));
require("dotenv").config();
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var hbs = require("hbs");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var studentRouter = require("./routes/students");
var counselorRouter = require("./routes/counselors");
var categoryRouter = require("./routes/categories");
var conversationRouter = require("./routes/conversations");
var messageRouter = require("./routes/messages");
var signupRouter = require("./routes/sign_up.js");
var sequelize = new connections_1.default();
sequelize.LoadMessageSenders();
var app = express();
// view engine setup
var session = require("express-session");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");
app.use(logger("dev"));
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
//passport middleware
var passport = require("passport"), LocalStrategy = require("passport-local").Strategy;
app.use(session({ secret: "cats" }));
app.use(passport.initialize());
app.use(passport.session());
//Routing info
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/students", studentRouter);
app.use("/counselors", counselorRouter);
app.use("/categories", categoryRouter);
app.use("/conversations", conversationRouter);
app.use("/messages", messageRouter);
//passport config:
// passport.use(
//   new LocalStrategy(function(username, password, done) {
//     User.findOne({ username: username }, function(err, user) {
//       if (err) {
//         return done(err);
//       }
//       if (!user) {
//         return done(null, false, { message: "Incorrect username." });
//       }
//       if (!user.validPassword(password)) {
//         return done(null, false, { message: "Incorrect password." });
//       }
//       return done(null, user);
//     });
//   })
// );
//SWAGGER
//https://github.com/pgroot/express-swagger-generator
const expressSwagger = require('express-swagger-generator')(app);
//Currently breaking the app!
let options = {
    swaggerDefinition: {
        info: {
            description: 'This is a sample server',
            title: 'Swagger',
            version: '1.0.0',
        },
        host: 'localhost:3000',
        basePath: '/',
        produces: [
            "application/json",
            "application/xml"
        ],
        schemes: ['http', 'https'],
        securityDefinitions: {
            JWT: {
                type: 'apiKey',
                in: 'header',
                name: 'Authorization',
                description: "",
            }
        }
    },
    basedir: __dirname,
    files: ['./routes/**/*.js'] //Path to the API handle folder
};
expressSwagger(options);
//
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});
// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.render("error");
});
module.exports = app;
//# sourceMappingURL=app.js.map