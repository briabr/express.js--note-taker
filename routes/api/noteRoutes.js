const router = require("express").Router();



//GET /api/notes - gets all the notes
router.get('/notes', (req, res) => {
    let savedNotes = notes;
    res.json(savedNotes);
})

// GET /api/notes/:id - get oen note
// POST /api/notes - creates a note
//PUT /api/notes/:id - update a note
//DELETE /api/notes/:id - delete a note 



module.exports = router;