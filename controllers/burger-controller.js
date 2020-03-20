let burger = require("../models/burger.js");

module.exports = function(server){


    server.get("/", (req, res)=> {
        burger.selectAll(res);
    });

    server.put("/:id", (req, res)=> {

        let id = req.body.id;
        console.log(id);
        
    });
};

