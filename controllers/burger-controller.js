let burger = require("../models/burger.js");

module.exports = function(server){


    server.get("/", (req, res)=> {
        console.log(burger);

        res.render("index", burger.selectAll());
    });
};

