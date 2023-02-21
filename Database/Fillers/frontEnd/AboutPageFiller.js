import { AboutPage } from "../../Sequelize.js"

const aboutPage = [
    {
        language : 'en',
        head : {
            title : 'About Us',
            image : 'https://adn-backend-mj63t.ondigitalocean.app/public/images/background.jpg',
        },
        section1:{
            image : 'https://adn-backend-mj63t.ondigitalocean.app/public/images/background2.png',
            title : 'This is who we are',
            main : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non augue magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque semper mi nec dolor facilisis, et cursus nulla ullamcorper. Suspendisse lobortis fermentum vestibulum. Quisque tincidunt orci sit amet finibus feugiat. Nulla facilisi.',
            button : {
                title : 'MORE',
                link : 'http://localhost:3000'
            }
        },
        section2:{
            image : 'https://adn-backend-mj63t.ondigitalocean.app/public/images/pdg.jpg',
            main : {
                title : 'Genesis',
                text : [
                    {
                        type : 'p',
                        value : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non augue magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque semper mi nec dolor facilisis, et cursus nulla ullamcorper. Suspendisse lobortis fermentum vestibulum. Quisque tincidunt orci sit amet finibus feugiat. Nulla facilisi. Quisque ornare velit eget arcu interdum molestie. Nunc metus lorem, maximus a lorem eu, pretium cursus nulla. Maecenas iaculis elementum nibh et fermentum.',
                    },
                    {
                        type : 'h',
                        value : 'The Team'
                    },
                    {
                        type : 'p',
                        value : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non augue magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque semper mi nec dolor facilisis, et cursus nulla ullamcorper. Suspendisse lobortis fermentum vestibulum. Quisque tincidunt orci sit amet finibus feugiat. Nulla facilisi. Quisque ornare velit eget arcu interdum molestie. Nunc metus lorem, maximus a lorem eu, pretium cursus nulla. Maecenas iaculis elementum nibh et fermentum.',
                    },
                    {
                        type : 'h',
                        value : 'The Mission'
                    },
                    {
                        type : 'p',
                        value : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non augue magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque semper mi nec dolor facilisis, et cursus nulla ullamcorper. Suspendisse lobortis fermentum vestibulum. Quisque tincidunt orci sit amet finibus feugiat. Nulla facilisi. Quisque ornare velit eget arcu interdum molestie. Nunc metus lorem, maximus a lorem eu, pretium cursus nulla. Maecenas iaculis elementum nibh et fermentum.',
                    }
                ]
            }
        },
        section3 : {
            title : 'Focal Points By Country'
        }
    }
]


export const aboutpageFiller = ()=> {
    aboutPage.map(page => {
        AboutPage.create({...page}).then(Page => {
            console.log('page', Page.toJSON())
        })
    })
}
