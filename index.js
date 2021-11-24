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
    app.get('/', (req, res) => res.status(200).json(message.toString()));
    chairData = message.toString();
    var achair = JSON.parse(chairData);
    console.log(achair.device);
    console.log(achair.sensorType);
    console.log(achair.values[0]);
    console.log(achair.values[1]);
    client.end();
})

app.get("/", function (req, res){
    res.sendFile(__dirname + "/index.html");
});

app.listen(3090, function () {
    console.log("server is running on localhost 3090");
});