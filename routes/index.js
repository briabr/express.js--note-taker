const router = require("express").Router();
const htmlRoutes = require("./htmlRoutes")
const apiRoutes = require("./api")

//HTML ROUTES
router.use(htmlRoutes)


//API ROUTES
router.use("/api", apiRoutes)
//GET /api/todos - gets all the todos
// GET /api/todos/:id - get oen todo
// POST /api/todos - creates a todo
//PUT /api/todos/:id - update a todo
//DELETE /api/todos/:id - delete a todo 



module.exports = router;