var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", (req, res) => {
  burger.selectAll((data) => {
    var hbsObject = {
      burger: data,
    };
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", (req, res) => {
  burger.insertOne(
    ["name", "devoured"],
    [req.body.name, req.body.devoured],
    (result) => {
      res.json({ id: result.instertid });
    }
  );
});

router.put("api/burger/:id", )
// Export routes for server.js to use.
module.exports = router;
