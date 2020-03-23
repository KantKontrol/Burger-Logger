let connection = require("./connection");


class ORM {

    constructor(){
        
    }

    selectAll(table_name, cb) {
            connection.query("SELECT * FROM ??", table_name, (err, res) => {
                if(err)throw err;

                cb(res);
            });
    }

    insertOne(toInsert, cb){
        connection.query("INSERT INTO ?? SET ? = ? AND ? = ?", toInsert, (err, response)=> {

            if(err){
                throw err;
            }
            else{
                console.log("Inserted successfuly!");
                cb();
            }
        });
    }

    updateOne(table_name, colToChange, newValue, testCol, testVal, cb){
        connection.query(`UPDATE ?? SET ?? = ? WHERE ?? = ?`, [table_name, colToChange, newValue, testCol, testVal], (err, res)=> {

            if(err)throw err;

            cb();
        });
    }
}

module.exports = new ORM();