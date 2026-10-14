const mysql = require("mysql2")
const config = require("../../config")
const Sequelize = require("sequelize")
const fs = require("fs")
const path = require("path")
const basename = path.basename(__filename);


const tables = {}

let sequelize = new Sequelize(
        config.DATABASE,
        config.DB_USERNAME,
        config.PASSWORD,
        {
            "host": config.HOST,
            "dialect": config.DIALECT,
        }
    )


fs.readdirSync(__dirname)
  .filter(file =>
    file !== basename &&
    file.endsWith(".js") &&
    !file.startsWith(".")
  )
  .forEach(file => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    
    tables[model.name] = model;
  });


Object.values(tables).forEach(model => {
    if(tables[model]?.associate){
  tables[model].associate(tables);
    }
});



tables.sequelize = sequelize;

const db = mysql.createConnection({
    host: config.HOST,
    user: config.DB_USERNAME,
    password: config.PASSWORD,
    database: config.DATABASE,
    port: config.DB_PORT
})

db.connect(function (error){
    if(error){
        console.log("Db connection not connected",error)
    }else{
        console.log("db connected")
    }
})

module.exports = db;
module.exports = tables;