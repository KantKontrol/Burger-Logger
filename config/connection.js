const mysql = require("mysql");


let connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'nodeuser',
    password: 'nodeuser',
    database: "eatdaburger_db"
});

module.exports = connection.connect((err, res)=> {
    if(err)throw err;

    if(res){
        console.log("Connected to db at " + connection.threadId);
        return;
    }   
});