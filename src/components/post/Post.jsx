import React from 'react'
import { Link } from 'react-router-dom'
import './post.css'

export default function Post({post}) {
  const PF = "http://localhost:5000/images/"
  return (
   <div className="post">
       {post.photo &&(
       <img src={PF+post.photo} alt="" className="post-img" />)}
       <div className="post-info">
         <div className="post-cats">{
           post.categories.map((c)=>(
             <span className="post-cat">{c.name}</span>
             
           ))
         }
          
          
         </div>
         <Link className="link" to={`/post/${post._id}`}>
            <span className="post-title">{post.title}</span>
         </Link>
         <hr />
         <span className="time">
           {new Date(post.createdAt).toDateString()}
         </span>
         
       </div>
       <p className="post-desc">
         {post.desc}
       </p>
   </div>
   
  )
}
