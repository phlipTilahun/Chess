
const router = require("express").Router();
const matchesRouter = require("./matchRouter");


router.use('/matches', matchesRouter)


module.exports = router;