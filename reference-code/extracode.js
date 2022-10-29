const PORT = process.env.PORT || 3001;
const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const apiRoutes = require('./apiRoutes');
const htmlRoutes = require('../routes/htmlRoutes');

app.use(express.urlencoded({
    extended: true
}));

app.use(express.static('public'));
app.use(express.json());
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});



// const express = require("express");
// const fs = require("fs");
// const path = require("path");
// const jsonData = require("./db/db.json")

// //Express App set up
// const app = express();
// const PORT = process.env.PORT || 3000 ; 

// app.use(express.static('public'));

// // Setting up data parsing-- data in JSON format .
// // middleWare
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// app.get("/", (req, res) => res.sendFile(path.join(__dirname, "/public/index.html")));
// app.get("/notes", (req, res) => res.sendFile(path.join(__dirname, "/public/notes.html")));

// // GET, POST, DELETE API Endpoints.
