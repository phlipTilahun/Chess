require('dotenv').config();
require("./data/db");


const express = require("express");
const path = require("path");
const app = express();
const routes = require("./routers");

let port = process.env.PORT;


app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use("/api", routes);
app.use(express.static(path.join(__dirname, "/public")));


const server = app.listen(port, ()=>{
    console.log("Listening on:  " + server.address().port);
});