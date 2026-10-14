const router = require("express").Router()
const controller = require("../controller/movie-booking.controller")
router.post("/list",controller.list)

module.exports=router