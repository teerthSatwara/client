import React from 'react'
import './sidebar.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'


export default function SideBar() {
    const [cats,setCats]= useState([]);

    useEffect(()=>{
        const getCats = async ()=>{
            const res= await axios.get("/cat")
            setCats(res.data)
        };
        getCats();
    },[])
  return (
   <div className="side-bar">
     <div className="side-bar-item">
         <span className="side-bar-title">
             ABOUT ME
         </span>
         <img src="https://picsum.photos/200/300" alt="" className="sidebar-img" />
         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates quasi autem illo veniam eaque placeat velit facilis omnis in earum optio voluptate, quae esse accusamus? Ad esse harum cum qui nulla quisquam ea saepe eius.</p>
     </div>
     <div className="side-bar-item">
         <span className="side-bar-title">CATEGORIES</span>
         <ul className="sidebar-categories">
             {cats.map(c=>(
                 <Link to={`?cat=${c.name}`} className="link">
                    <li className="sidebar-list-items">{c.name}</li>
                 </Link>

             ))}
             
         </ul>
     </div>
     <div className="side-bar-item">
         <span className="side-bar-title">FOLLOW US</span>
         <div className="sidebar-social">
         <i className="fa-brands fa-facebook-f sidebar-icon"></i>
          <i className="fa-brands fa-twitter sidebar-icon"></i>
          <i className="fa-brands fa-instagram sidebar-icon"></i>
          <i className="fa-brands fa-pinterest-p sidebar-icon" ></i>
         </div>
     </div>
   </div>
  )
}
