var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", (req, res) => {
  burger.selectAll((data) => {
    var hbsObject = {
      burgers: data,
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

router.put("api/burger/:id", (req, res) => {
  var condition = "id =" + req.params.id;

  burger.updateOne(
    {
      devoured: req.body.devoured,
    },
    condition,
    (result) => {
      if (result.changedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    }
  );
});
// Export routes for server.js to use.
module.exports = router;
