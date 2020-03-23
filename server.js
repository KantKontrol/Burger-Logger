const express = require("express");
const exhbs = require("express-handlebars");
let path = require("path");


let server = express();
const PORT = process.env.PORT || 8000;

server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(express.static(path.join(__dirname, "/public")));


server.engine("handlebars", exhbs({ defaultLayout: "main" }));
server.set("view engine", "handlebars");

//ROUTES

require("./controllers/burger-controller.js")(server);



server.listen(PORT, (err)=> {

    if(err)throw err;

    console.log("Listening on port: " + PORT);
});