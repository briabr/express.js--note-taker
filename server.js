
const express = require("express");
const fs = require("fs");
const path = require("path");
const jsonData = require("./db/db.json")

//Express App set up
const app = express();
const PORT = process.env.PORT || 3000 ; 

app.use(express.static('public'));

// Setting up data parsing-- data in JSON format .
// middleWare
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => res.sendFile(path.join(__dirname, "/public/index.html")));
app.get("/notes", (req, res) => res.sendFile(path.join(__dirname, "/public/notes.html")));

// GET, POST, DELETE API Endpoints.
