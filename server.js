<<<<<<< HEAD
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const mysql = require('mysql');
const dotenv = require('dotenv');
=======
const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
const mysql2 = require("mysql2");
const dotenv = require("dotenv");
const cors = require("cors"); // Import CORS middleware
>>>>>>> mehdi

// Load environment variables
dotenv.config();

// Create MySQL connection pool
<<<<<<< HEAD
const pool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
=======
const pool = mysql2.createPool({
  connectionLimit: 10,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
>>>>>>> mehdi
});

// Check database connection
pool.getConnection((err, connection) => {
<<<<<<< HEAD
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Connected to MySQL database');
    connection.release();
=======
  if (err) {
    console.error("Error connecting to database:", err);
    return;
  }
  console.log("Connected to MySQL database");
  connection.release();
>>>>>>> mehdi
});

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
<<<<<<< HEAD

// Routes
app.use('/api', routes);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running http://localhost:${PORT}`);
=======
app.use(cors()); // Enable CORS for all routes

// Routes
app.use("/api", routes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running http://localhost:${PORT}`);
>>>>>>> mehdi
});
