const mysql = require("mysql2");

// Connect to database
const db = mysql.createConnection({
    host: 'localhost',
    // Your MySQL username,
    user: 'nico',
    // Your MySQL password
    password: 'Lakers13!',
    database: 'election'
  });

  module.exports = db;