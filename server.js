const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

const Port = 3030


app.listen(Port, function(err) {
  if (err) {
    throw err;
  } else {
    console.log("Listening on " + Post);
  }
});
