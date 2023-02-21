import { Router } from "express";
import { FocalPoint } from "../../../Database/Sequelize.js";

export const focalPointRouter = Router()

const getAllFocalPoints = (req,res)=>{
    const {limit} = req.query

    FocalPoint.findAll({limit : limit || 100}).then(focalPoints =>{
        if(focalPoints){
            return res.json({msg : 'succesfully getted focalPoints' , focalPoints})
        }else {
            return res.status(404).json({msg :'nothing founded'})
        }
    }).catch(err => {
        res.status(400).json({msg : 'something went wrong' , err})
    })
}

focalPointRouter.get('/' , getAllFocalPoints)

