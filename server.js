const express = require("express");
const exhbs = require("express-handlebars");
let path = require("path");



let server = express();
const PORT = process.env.PORT || 8080;

server.use(express.urlencoded({ extended: true }));
server.use(express.json());


server.engine("hbs", exhbs({ defaultLayout: "main" }));
server.set("view engine", "hbs");

//ROUTES

require("./controllers/burger-controller.js")(server);



server.listen(PORT, (err)=> {

    if(err)throw err;

    console.log("Listening on port: " + PORT);
});