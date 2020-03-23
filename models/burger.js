let orm = require("../config/orm.js");

class burger {

    constructor(){

    }

    selectAll(table_name, cb){
        orm.selectAll(table_name, cb);
    }

    insert(res, name, devoured){
        orm.insertOne(res, [name, devoured]);
    }

    update(value) {
        orm.updateOne(id, value);
    }
}


module.exports = new burger();