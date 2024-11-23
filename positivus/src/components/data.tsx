import { GoGoal } from "react-icons/go";
import { GrPlan } from "react-icons/gr";
import { IoIosStats, 
    IoIosSettings, 
    IoIosPerson, 
    IoIosPersonAdd,
    IoIosEyeOff,
    IoIosLogIn,
    IoIosLogOut
 } from "react-icons/io";

import { FaChartBar,
    FaCalendarAlt, 
    FaFacebookMessenger, 
    FaUsersCog,
    FaListAlt
 } from "react-icons/fa";
import { style } from "framer-motion/client";



 export const Links  = [
    {
        href:'#',
        Icon:FaChartBar,
        text:"Dashboard"
    },
    {
        href:'#',
        Icon:FaCalendarAlt,
        text:"Kanban",
        badge:{
            text:'4',
            color:'bg-blue-100 text-blue-800'
        }
    },
    {
        href:'#',
        Icon:FaFacebookMessenger,
        text:"Inbox",
        badge:{
            text:'4',
            color:'bg-blue-100 text-blue-800'
        }
    },
    {
        href:'#',
        Icon:FaUsersCog,
        text:"Users"
    },
    {
        href:'#',
        Icon:FaListAlt,
        text:"Products"
    },
    {
        href:'#',
        Icon:IoIosLogIn,
        text:"Sign In"
    },
    {
        href:'#',
        Icon:IoIosLogOut,
        text:"Sign Up"
    }
 ]

 export const employeeData = [
   {
     title:"Total Employees",
     icon:IoIosPerson,
     count:200,
     bgColor:"bg-gray-100"
   },
   {
    title:"On Leave",
    icon:IoIosEyeOff,
    count:15,
    bgColor:"bg-blue-100"
  },
  {
    title:"New Joinee",
    icon:IoIosPersonAdd,
    count:25,
    bgColor:"bg-yellow-100"
  }
  
 ]

 export const shortcutLink = [
    {
        title:"Goal",
        Icon:GoGoal
    },
    {
        title:"Plan",
        Icon:GrPlan
    },
    {
        title:"Stats",
        Icon:IoIosStats
    },
    {
        title:"Setting",
        icon:IoIosSettings
    },
    
 ]
 export const users = [
    {
        name:"Robert Fox",
        country:"USA",
        role:"Python Developer",
        image:"/images/staff/user1.png",
        bgColor:"bg-yellow-100"
    },
    {
        name:"Jane Doe",
        country:"USA",
        role:"Frontend Developer",
        image:"/images/staff/user2.png",
        bgColor:"bg-blue-100"
    }
 ]
 export const events = [
    {
        date:"01 Aug",
        title:"Upcoming Event",
        description:"Join us for our annual conference"
        },
        {
        date:"15 Sept",
        title:"Annual Conference",
        description:"Join us for our annual conference"
        },
    {
    date:"01 Aug",
    title:"Upcoming Event",
    description:"Connect with professionals in your field."
    }
 ]

 