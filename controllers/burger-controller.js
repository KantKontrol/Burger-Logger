let burger = require("../models/burger.js");

module.exports = function(server){


    server.get("/", (req, res)=> {
        burger.selectAll("burgers", (data)=> {
            res.render("index", {
                burgers: data
            });
        });
    });

    server.put("/:id", (req, res)=> {

        let id = req.body.id;
        console.log(id);
        
    });
};

