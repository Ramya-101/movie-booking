const express = require("express");
const app = express()
const config = require("../config")

const movieRoute = require("./routes/movie-booking.route")
app.use("/",movieRoute)


app.listen(config.PORT, function error(error){
    if(error){
        console.log(" ...error while running server")
    }else{
        console.log(`--- server running in ${config.PORT}`)
    }
})

