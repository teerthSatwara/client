import axios from 'axios';
import {useEffect,useState,useContext} from 'react'
import {useLocation}from 'react-router'
import './singlepost.css'
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context';

const PF = "http://localhost:5000/images/";

export default function () {

    const [title,setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [update,setUpdate] = useState(false)


    const handleUpdate = async () => {
        try {
          await axios.put(`/posts/${post._id}`, {
            username: user.username,
            title,
            desc,
          });
          setUpdate(false)
        } catch (err) {}
      };

    const handleDelete = async ()=>{
        try{
            await axios.delete("/posts/"+path,{data:{username:user.username}})
            window.location.replace("/");
            
        }catch(err){

        }
        

    }
    const {user} = useContext(Context)
    const location = useLocation();
    const path = location.pathname.split("/")[2]

    const [post, setPost] = useState({});

    useEffect(()=>{
        const getPost = async ()=>{
            const res = await axios.get("/posts/"+path)

            setPost(res.data)
        }

        getPost()
    },[path]);



    return (
        <div className='single-post'>
            <div className="single-post-wrapper">{
                post.photo && (
                    <img src={PF + post.photo} alt="" className="single-post-img" />

                )}
                {update ? (<input onChange={(e) => setTitle(e.target.value)} className='singlePostTitleInput' type="text" value={title} autoFocus/>):(

                    <h1 className="single-post-title">
                    {title}
                    { post.username===user?.username  && (
                        
                        <div className="single-post-edit">
                        <i className="fa-solid fa-pen-to-square single-post-icon"onClick={()=>setUpdate(true)}></i>
                        <i className="fa-solid fa-trash-can single-post-icon" onClick={handleDelete}></i>
                        </div>
                    )}
                    </h1>
                )}
                <div className="single-post-info">
                    <span className='single-post-author'>
                        Author: 
                        <Link to={`/?user=${post.username}`} className="link">
                            
                            <strong>{post.username}</strong>

                        </Link>
                    </span>
                    <span className="single-post-date">
                        {new Date(post.createdAt).toDateString()}
                    </span>

                </div>
                {update ? (<textarea className='singlePostDescInput' value={desc}
            onChange={(e) => setDesc(e.target.value)}/>):(

                    <p className='single-post-desc'>
                    
                    {desc}
                    </p>
                )}
                {update && (
          <button className="singlePostButton" onClick={handleUpdate}>
            Update
          </button>
        )}
                

            </div>

        </div>
    )
}
