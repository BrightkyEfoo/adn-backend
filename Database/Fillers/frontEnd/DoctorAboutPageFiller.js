import { View } from "../../Sequelize.js"

const doctorsAboutPages = [
    {
        language : 'EN',
        name : 'doctoraboutpage',
        content : {
            title : 'Board of Directors',
            image : 'https://adn-backend-mj63t.ondigitalocean.app/public/images/background.jpg',
            button : 'more'
        }
    }
]

export const AboutPageDoctorFiller = ()=>{
    doctorsAboutPages.forEach((el , i)=>{
        View.create(el).then(view => {
            console.log('view', view.toJSON())
        }).catch(err => {
            console.log('err', err)
        })
    }) 
}