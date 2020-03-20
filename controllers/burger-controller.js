let burger = require("../models/burger.js");

module.exports = function(server){


    server.get("/", (req, res)=> {
        burger.selectAll(res);
    });
};

