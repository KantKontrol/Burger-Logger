let orm = require("../config/orm.js");

class burger {

    constructor(){

    }

    async selectAll(){
        let burgers = await orm.selectAll();
        console.log(burgers);
        let bObj = {};
        burgers.forEach(e => {

            bObj.id = e.id;
            bObj.name = e.burger_name;
            bObj.devoured = e.devoured;
        });

        return bObj;
    }

    async insert(name, devoured){
        orm.insertOne([name, devoured]);
    }

    update(value) {
        orm.updateOne(id, value);
    }
}


module.exports = new burger();