import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaHome,
    FaUserAlt,
    FaUpload,
}from "react-icons/fa";
import {CgProfile} from "react-icons/cg";
import {FiLogOut} from 'react-icons/fi';
import {IoMdContacts} from 'react-icons/io';
import {AiOutlineContacts} from 'react-icons/ai'
import {BsCalendarEvent} from 'react-icons/bs'

import { NavLink, Outlet } from 'react-router-dom';
import './Sidebar.css'


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(true);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Home",
            icon:<FaHome size={"24px"}/>
        },
        {
            path:"/homeadmin/dashboard",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/homeadmin/eventlist",
            name:"EventList",
            icon:<BsCalendarEvent/>
        },
       
        {
            path:"/homeadmin/upload",
            name:"UploadEvents",
            icon:<FaUpload/>
        },
        {
            path:"/homeadmin/peoplecontacted",
            name:"Contacts",
            icon:<AiOutlineContacts size={"28px"}/>
        },
        {
            path:"/homeadmin/users",
            name:"Users",
            icon:<IoMdContacts size={"28px"}/>
        }
    ]
    return (
        <div className="Sidebar_container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
                <NavLink to={"/homeadmin/profile"}  className="link mt-10" activeclassName="active">
                           <div className="icon"><CgProfile size={"28px"}/></div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">Profile</div>
                </NavLink>
                <NavLink to={"/admin"}  className="link" activeclassName="active">
                           <div className="icon"><FiLogOut size={"28px"}/></div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">Logout</div>
                </NavLink>
           </div>
           <main>{<Outlet/>}</main>
        </div>
    );
};

export default Sidebar;