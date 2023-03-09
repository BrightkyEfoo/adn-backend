import { Doctor } from "../../../../Database/Sequelize.js"

export const getAllDoctors = (req,res)=>{
    Doctor.findAll().then(doctors => {
        res.json({msg : 'success' , doctors})
    }).catch(err => {
        res.status(400).json({msg : 'wrong' , err})
    })
}