// Import MySQL connection.
var connection = require("../config/connection.js");


var orm = {

selectAll: (tableInput, cb ) => {
    var queryString = `SELECT * FROM ${tableInput}`;
    connection.query(queryString, (err,result) => {
        if (err) {
            throw err;
        }
        cb(result);
    });
},


// insertOne()


// updateOne()


};


// Export the orm object for the model (cat.js).
module.exports = orm;