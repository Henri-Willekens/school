
const express = require("express");
const app = express();


app.get("/", function (req, res){
    res.sendFile(__dirname + "/index.html");
});

app.listen(3007, function () {
    console.log("server is running on localhost 3007");
});