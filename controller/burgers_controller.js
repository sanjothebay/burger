var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function (req, res) {
  burger.selectAll((data) => {
    var hbsObject = {
      burgers: data,
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function (req, res) {
  burger.insertOne(
    ["burger_name"],
    [req.body.name],
    function(result) {
      res.json({ id: result.instertid });
    }
  );
});

router.put("/api/burgers/:id", function (req, res) {
  var condition = "id =" + req.params.id;

  burger.updateOne( 
    
  
      req.body.objColVals,
      req.body.setValue,
      condition,
      
    function (result) {
      if (result.changedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    }
  );
});

// router.delete("/api/burgers/", function (req, res) {
//   const id = req.params.id;
//   cat.delete(id, function (results) {
//     if (results.affectedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     }
//     res.status(200).end();
//   });
// });
// Export routes for server.js to use.
module.exports = router;
