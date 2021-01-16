// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  selectAll: (cb) => {
    orm.selectAll("burgers", (res) => {
      cb(res);
    });
  },
  insertOne: (cols, vals, cb) => {
    orm.insertOne("burgers", cols, vals, (res) => {
      cb(res);
    });
  },
  updateOne: (objColVals, condition, cb) => {
    orm.updateOne("burgers", objColVals, condition, (res) => {
      cb(res);
    });
  },

  deleteOne: (id, cb) => {
    orm.deleteOne("burgers", id, (res) => {
      cb(res);
    });
  },
};
// Export the database functions for the controller (burgersController.js).
module.exports = burger;
