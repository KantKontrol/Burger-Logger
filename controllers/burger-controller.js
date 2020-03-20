let burger = require("../models/burger.js");


module.exports = function(server){


    server.get("/", (req, res)=> {

        res.render("index", burger.selectAll);
    });

};

