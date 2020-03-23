let orm = require("../config/orm.js");

class burger {

    constructor(){

    }

    selectAll(table_name, cb){
        orm.selectAll(table_name, cb);
    }

    insert(name, devoured, cb){
        orm.insertOne(["burgers", burger_name, name, devoured, devoured], cb);
    }

    update(id, value, cb) {
        orm.updateOne("burgers", "devoured", value, "id", id, cb);
    }
}


module.exports = new burger();