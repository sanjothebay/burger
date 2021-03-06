// Import MySQL connection.
var connection = require("../config/connection.js");

function printQuestionMarks(num) {
  var arr = [];
  for (let i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}

function objToSql(object) {
  var arr = [];

  for (var key in object) {
    var value = object[key];
    if (Object.hasOwnProperty.call(object, key)) {
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value);
    }
  }
  return arr.toString();
}

var orm = {
  selectAll: (tableInput, cb) => {
    var queryString = `SELECT * FROM ${tableInput}`;
    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  insertOne: (table, cols, vals, cb) => {
    //var printQuestionMarksFunction = printQuestionMarks();
    var numQuestionMarks = vals.length;
    var queryString = `INSERT INTO ${table} (${cols.toString()}) VALUES (${printQuestionMarks(numQuestionMarks)})`;
    console.log(queryString);

    connection.query(queryString, vals, function (err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },

  updateOne: (table, objColVals, setValue, condition, cb) => {

    var queryString = `UPDATE ${table} SET ${objColVals} = ${setValue} WHERE ${condition}`;
    console.log(queryString);
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  deleteOne: (table, id, cb) => {
    const queryString = `DELETE FROM ${table} WHERE id = ${id}`;
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
};

// Export the orm object for the model (buger.js).
module.exports = orm;
