'use strict'

const { Model} = require('sequelize')

module.exports = (sequelize,DataTypes) =>{

    class movieTicket extends Model {

        static associate(modules) {

        }
    }

    movieTicket.init({
        ticketNo:DataTypes.INTEGER,
        movieName:DataTypes.STRING,
        price:DataTypes.STRING
    },{
        sequelize,
        modelName: 'movieTicket',
        tableName: 'movieTicket',
        timestamps: false
    })
    movieTicket.associate = function(models)
    {

    }
    return movieTicket
}