let burger = require("../models/burger.js");

module.exports = function(server){


    server.get("/", (req, res)=> {
        burger.selectAll("burgers", function(data) {
            res.render("index", {
                burger: data
            });
        });
    });

    server.post("/api/burgers/:id", (req, res)=> {

        let id = req.body.id;
        
        burger.update(id, true, ()=> {
            res.redirect("/");
        });
        
    });
};

