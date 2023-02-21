import { Footer } from "../../../Database/Sequelize.js"


export const getFooter = (req,res)=>{
    const language = req.params.language
    console.log('language', language)
    Footer.findOne({where : {language}}).then(footer => {
        // const temp = footer.toJSON()
        // temp.bottom = JSON.parse(temp.bottom)
        // temp.left = JSON.parse(temp.left)
        // temp.right = JSON.parse(temp.right)
        // res.json({footer : temp})
        res.json({footer})
    })
}