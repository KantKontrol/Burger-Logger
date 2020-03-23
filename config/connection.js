const mysql = require("mysql");
require("dotenv").config();

let connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: process.env.USER_NAME,
    password: process.env.USER_PASS,
    database: "eatdaburger_db"
});

connection.connect((err, res)=> {
    if(err)throw err;

    if(res){
        console.log("Connected to db at " + connection.threadId);
    }   
});

module.exports = connection;