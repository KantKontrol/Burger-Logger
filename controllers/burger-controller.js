let burger = require("../models/burger.js");
let path = require("path");

module.exports = function(server){

    server.get("/", (req, res)=> {
        burger.selectAll("burgers", function(data) {

            data.forEach(e => e.imageURL = "img/burg1.jpg");
            
            res.render("index", {
                burger: data
            });
        });
    });

    server.put("/api/burgers/:id", (req, res)=> {

        let id = req.body.id;
        
        burger.update(id, true, ()=> {
            res.status(200).end();
        });
        
    });

    server.post("/api/burgers", (req, res)=> {

        let burgerName = req.body.burger_name;

        burger.insert(burgerName, ()=> {
            res.status(200).end();
        });
    });
};

