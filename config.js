const dotenv = require("dotenv")
const path = require("path")
const route = path.join(__dirname,"envFiles/dev.env")

dotenv.config(
    {
        path:route
    }
)
module.exports={
    PORT : process.env.PORT,
    HOST : process.env.HOST,
    DB_USERNAME : process.env.DB_USERNAME,
    PASSWORD : process.env.PASSWORD,
    DATABASE : process.env.DATABASE,
    DIALECT : process.env.DIALECT
}