const router = require("express").Router();
const noteRoutes = require("./noteRoutes")


router.use("/todos", noteRoutes);

module.exports = router;