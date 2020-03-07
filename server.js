const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

const Port = 3030

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/notes", function(req, res) {
  res.sendFile(path.join(__dirname, "public", "notes.html"));
});

app.get("/api/notes", function(req, res) {
    fs.readFile("./db/db.json", "utf8", function(err, data) {
      if (err) {
        throw err;
      } else {
        res.json(JSON.parse(data));
      }
    });
  });

app.listen(Port, function(err) {
  if (err) {
    throw err;
  } else {
    console.log("Listening on " + Post);
  }
});
