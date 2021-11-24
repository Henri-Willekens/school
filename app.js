const express = require("express");
const app = express();
var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://localhost');

client.on('connect', function () {
    client.subscribe('esp/test', function (err) {

    })
})

client.on('message', function (topic, message){
    //message is buffer
    console.log(message.toString());
    app.get('/',(req, res) -> res.status(200).json(message.toString()));
    client.end();
})

app.get("/", function (req, res){
    res.sendFile(__dirname + "/index.html");
});

app.listen(3000, function () {
    console.log("server is running on localhost 3000");
});