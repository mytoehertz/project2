var express = require("express");
var path = require("path");
var router = express.Router();
/* GET home page. */
router.get("/", function (req, res, next) {
    console.log("Registering the get request");
    var randomNumber = Math.random() * 2;
    console.log(randomNumber);
    if (randomNumber > 1) {
        res.render("signup", { title: "Express" });
    }
    else {
        res.render("index", { title: "Express" });
        // res.sendFile(path.join(__dirname, "../public", "category.html"));
        //
    }
});
module.exports = router;
//# sourceMappingURL=index.js.map