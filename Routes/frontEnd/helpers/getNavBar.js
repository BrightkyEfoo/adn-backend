import { Navbar } from "../../../Database/Sequelize.js"


export const getNavBar = (req,res)=>{
    const language = req.params.language

    Navbar.findOne({where : {language}}).then(navBar => {
        const temp = navBar.toJSON()
        temp.section1 = JSON.parse(temp.section1)
        temp.section2 = JSON.parse(temp.section2)
        temp.links = JSON.parse(temp.links)
        temp.button = JSON.parse(temp.button)
        res.json({navBar : temp})
    })
}