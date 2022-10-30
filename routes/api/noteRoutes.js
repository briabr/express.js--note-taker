const router = require("express").Router();
const path = require('path')
const fs = require('fs')
// npm package that allows for unique ids to be created
var uniqid = require('uniqid');

//GET /api/notes - gets all the notes
// GET /api/notes should read the db.json file and return all saved notes as JSON.

router.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../db/db.json'));
  });
// GET /api/notes/:id - get one note

// POST /api/notes - creates a note
// POST /api/notes should receive a new note to save on the request body, 
// add it to the db.json file, and then return the new note to the client. 
router.post('/api/notes', (req, res) => {
    let dbJson = fs.readFileSync('db/db.json');
    dbJson = JSON.parse(dbJson);
    res.json(dbJson);
    // creating body for note
    let bodyNote = {
      title: req.body.title,
      text: req.body.text,
    }
    // pushing created note to be written in the db.json file
    dbJson.push(bodyNote);
    fs.writeFileSync('db/db.json', JSON.stringify(dbJson));
    res.json(dbJson);

  });

//PUT /api/notes/:id - update a note
//DELETE /api/notes/:id - delete a note 




module.exports = router;