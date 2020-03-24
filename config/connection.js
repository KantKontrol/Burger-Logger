const mysql = require("mysql");
require("dotenv").config();

const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true
});

const connection = await pool.connect()


module.exports = connection;