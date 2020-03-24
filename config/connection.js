const mysql = require("mysql");
require("dotenv").config();

let connection;

if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{
     connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: "eatdaburger_db"
    });
}

connection.connect((err, res)=> {
    if(err)throw err;

    if(res){
        console.log("Connected to db at " + connection.threadId);
    }   
});

module.exports = connection;