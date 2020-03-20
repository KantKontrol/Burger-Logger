let orm = require("../config/orm.js");

class burger {

    constructor(){

    }

    selectAll(res){
        orm.selectAll(res);
    }

    insert(res, name, devoured){
        orm.insertOne(res, [name, devoured]);
    }

    update(value) {
        orm.updateOne(id, value);
    }
}


module.exports = new burger();