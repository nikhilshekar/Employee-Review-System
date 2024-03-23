const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const url = process.env.DB_URL;
// Connection to mongodb.
mongoose.connect(url);

const db = mongoose.connection; // db store the connection

// cheacking the connection
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("DATABASE connection is Established");
});

// exporting the connection.
module.exports = db;
