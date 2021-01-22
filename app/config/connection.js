// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************
var Sequelize = require("sequelize");
// Requiring mysql package

var sequelize = new Sequelize('starwars','root','AdalynnTatiannaKehong',{
  host: "localhost",
  port: 3306,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
})

// Setting up our connection information
// var source = {
//   localhost: {
//     host: "localhost",
//     port: 3306,
//     user: "root",
//     password: "AdalynnTatiannaKehong",
//     database: "starwars"
//   }
// };


// Creating our connection
// var connection = mysql.createConnection(source.localhost);


// // Connecting to the database.
// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection.threadId);
// });

// Exporting our connection
module.exports = sequelize;
