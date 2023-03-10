import Sequelize from 'sequelize';
import UserModel from '../Models/User.js';
import { userFill } from './Fillers/UserFiller.js';
import HomePageModel from '../Models/frontEnd/HomePage.js';
import homePageFiller from './Fillers/frontEnd/homePageFiller.js';
import EventModel from '../Models/frontEnd/Event.js';
import EventFiller from './Fillers/frontEnd/EventFiller.js';
import NavBarModel from '../Models/frontEnd/NavBar.js';
import { NavBarFiller } from './Fillers/frontEnd/NavBarFiller.js';
import FooterModel from '../Models/frontEnd/Footer.js';
import { FooterFiller } from './Fillers/frontEnd/FooterFiller.js';
import ActivityModel from '../Models/frontEnd/Activity.js';
import { ActivityFiller } from './Fillers/frontEnd/ActivityFiller.js';
import ProgramModel from '../Models/frontEnd/Programs.js';
import { ProgramsFiller } from './Fillers/frontEnd/ProgramsFiller.js';
import EventPageModel from '../Models/frontEnd/EventPage.js';
import { eventPageFiller } from './Fillers/frontEnd/EventPageFiller.js';
import CommentModel from '../Models/Comments.js';
import {commentFiller} from './Fillers/CommentFiller.js'
import SingleEventPageModel from '../Models/frontEnd/SingleEventPage.js';
import { singleEventPageFiller } from './Fillers/frontEnd/SingleEventFiller.js';
import AboutPageModel from '../Models/frontEnd/AboutPage.js';
import FocalPointModel from '../Models/FocalPoint.js';
import { aboutpageFiller } from './Fillers/frontEnd/AboutPageFiller.js';
import { focalPointFiller } from './Fillers/FocalPointFiller.js';
import ViewModel from '../Models/frontEnd/View.js';
import { AboutPageDoctorFiller } from './Fillers/frontEnd/DoctorAboutPageFiller.js';
import DoctorModel from '../Models/Doctors.js';
import { DoctorsFiller } from './Fillers/DoctorsFiller.js';
import { VmvPageFiller } from './Fillers/frontEnd/VmvPage.js';

const sequelize = new Sequelize('db1', 'user1', 'AVNS_kQxk7l42OZviO7zD7u6', {
  host: 'adn-do-user-7091938-0.b.db.ondigitalocean.com',
  port : 25060,
  dialect: 'mysql',
  logging: false,
})

// const sequelize = new Sequelize('adn', 'root', '', {
//   host: 'localhost',
//   dialect: 'mariadb',
//   logging: false,
// })


export const User = UserModel(sequelize)
export const HomePage = HomePageModel(sequelize)
export const Event = EventModel(sequelize)
export const EventPage = EventPageModel(sequelize)
export const Navbar = NavBarModel(sequelize)
export const Footer = FooterModel(sequelize)
export const Activity = ActivityModel(sequelize)
export const Program = ProgramModel(sequelize)
export const Comment = CommentModel(sequelize)
export const SingleEventPage = SingleEventPageModel(sequelize)
export const AboutPage = AboutPageModel(sequelize)
export const FocalPoint = FocalPointModel(sequelize)
export const View = ViewModel(sequelize)
export const Doctor = DoctorModel(sequelize)

Event.addHook('beforeCreate',(event , option)=>{
  let begin = new Date(event.begin)
  let end = new Date(event.end)

  event.beginDay = begin.getDate()
  event.endDay = end.getDate()
  console.log('hooked')
  // event.save()
})


export const dbInit = ()=>{
    return sequelize.sync({force : true}).then(()=>{
        userFill()
        homePageFiller()
        EventFiller()
        NavBarFiller()
        FooterFiller()
        ActivityFiller()
        ProgramsFiller()
        eventPageFiller()
        commentFiller()
        singleEventPageFiller()
        aboutpageFiller()
        focalPointFiller()
        // aboutpageFiller()
        AboutPageDoctorFiller()
        DoctorsFiller()
        VmvPageFiller()
        console.log('database connection successfully etablished')
    }).catch(err => console.log('database connection unsuccessfully etablished' , {err}) )
}
