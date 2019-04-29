var express = require("express");
var path = require("path");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  console.log("Registering the get request");
  res.sendFile(path.join(__dirname, "../public", "category.html"));
  //
});

module.exports = router;
