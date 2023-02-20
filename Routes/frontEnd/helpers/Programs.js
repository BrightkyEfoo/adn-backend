import { Program } from "../../../Database/Sequelize.js"

export const getSomePrograms = (req,res)=>{
    const {limit} = req.query
    if(limit){
        Program.findAll({limit : parseInt(limit)}).then(programs => {
            res.json({programs})
        })
    }else{
        Program.findAll().then(programs => {
            res.json({programs})
        })
    }
    
    // res.json({msg :req.query})
}