const express = require("express");
const app = express();
const port = 3000;
const mongoose = require('mongoose')
const path = require("path");

app.use(express.json());
app.use(express.urlencoded({extended:true}));

mongoose.connect('mongodb://localhost/notesModel', { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

const notesRouter = require("./routes/notesRoutes.js")();

// Express Middleware for serving static files
app.use("/public", express.static(__dirname + "/public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.use("/api", notesRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});