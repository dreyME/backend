const router = require("express").Router();

//Services router
const noteRouter = require("./Note");

router.use("/", noteRouter);

module.exports = router;