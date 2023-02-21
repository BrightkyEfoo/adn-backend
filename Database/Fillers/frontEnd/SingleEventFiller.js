import { SingleEventPage } from "../../Sequelize.js"

const events = [
    {
        language : 'EN',
        detailsSection : {
            date : 'DATE',
            time : 'TIME',
            localTime : 'LOCAL TIME',
            moreInfo : 'MORE INFO',
            location : 'LOCATION',
            category : 'CATEGORY',
            organizer : 'ORGANIZER',
            button : 'Registration'
        },
        commentSection : {
            title : 'Laisser un commentaire',
            subTitle : 'Your email address will not be published. Required fields are marked *',
            placeholders : ['Comment' , 'Name', 'Email', 'Website'],
            toCheck : 'Save my name, email, and website in this browser for the next time I comment.',
            button : 'Post comment'
        }
    }
]

export const singleEventPageFiller = ()=>{
    events.forEach(el => {
        SingleEventPage.create(el).then(singleEventPage => console.log('singleEventPage', singleEventPage) )
    })
}