const connection = require("./connection");


class ORM {

    constructor(){
        
    }

    selectAll() {

        return new Promise((resolve, reject)=> {
            connection.query("SELECT * FROM burgers", (err, res) => {
                if(err){
                    reject(err);
                }
                else{
                    resolve(res);
                }
            });
        });
    }

    insertOne(toInsert){
        connection.query("INSERT INTO burgers (burger_name, devoured) SET (?)", toInsert, (err, res)=> {

            if(err)throw err;
            
            console.log("Inserted successfuly!");
        });
    }

    updateOne(toUpdate, value){
        connection.query(`UPDATE burgers AS b SET b.devoured = '${value}' WHERE b.id = '${toUpdate}'`, (err, res)=> {

            if(err)throw err;

            console.log("Inserted successfuly!");
        });
    }
}

module.exports = ORM;