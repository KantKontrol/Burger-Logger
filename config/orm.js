let connection = require("./connection");


class ORM {

    constructor(){
        
    }

    selectAll(res) {
            connection.query("SELECT * FROM burgers", (err, response) => {
                if(err)throw err;

                res.render("index", {
                   burger: response
                });
            });
    }

    insertOne(res, toInsert){
        connection.query("INSERT INTO burgers (burger_name, devoured) SET (?)", toInsert, (err, response)=> {

            if(err){
                throw err;
            }
            else{
                console.log("Inserted successfuly!");
                res.redirect("/");
            }
        });
    }

    updateOne(toUpdate, value){
        connection.query(`UPDATE burgers AS b SET b.devoured = '${value}' WHERE b.id = '${toUpdate}'`, (err, res)=> {

            if(err)throw err;

            console.log("Inserted successfuly!");
        });
    }
}

module.exports = new ORM();