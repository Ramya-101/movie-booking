
const tables = require("../models/index")

exports.list = async(req,res,next)=>{
try{
let list = await tables.movieTicket.findAll({
    where:{

    }
})
    return res.status(200).json({
        error:false,
        result:list,
        message:"list"
    })
}catch(error){
    next(error)
}
}