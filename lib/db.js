var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "expressfirst",
  password: "!@#123QWEasdzxc",
  database: "expressfirst",
});
connection.connect(function (error) {
  if (!!error) {
    console.log(error);
  } else {
    console.log("Connected..!");
  }
});

module.exports = connection;
