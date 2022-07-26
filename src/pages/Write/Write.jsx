import axios from 'axios';
import React, { useContext, useState } from 'react'
import './write.css'
import {Context} from "../../context/Context"



export default function Write() {

    const [title, setTitle] = useState("");
    const [desc,setDesc] = useState("");
    const [file, setFile] = useState("");
    const {user} = useContext(Context);


    const handleSubmit = async (e)=>{

        e.preventDefault();
        const newPost = {
            username:user.username,
            title,
            desc,
        };
        //Only if image file is there
        //************************* */
        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;//to prevent different image with same name
            data.append("name", filename);
            data.append("file", file);
            newPost.photo = filename;
            try {
                await axios.post("/upload", data);
              } catch (err) {
                  
              }
            }
            try {
              const res = await axios.post("/posts", newPost);
              window.location.replace("/post/" + res.data._id);
            } catch (err) {}
          };
        //*********************************** */

    


  return (
   <div className="write">
      {file && (
        <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
      )}
       <form className="write-form" onSubmit={handleSubmit}>
           <div className="write-form-grp">
               <label htmlFor="add-file">
                   <i className="write-form-icon fas fa-plus"></i>
               </label>
               <input type="file" onChange={e=>setFile(e.target.files[0])}  id="add-file" style={{display:"none"}}/>
               <input type="text" onChange={e=>setTitle(e.target.value)} className='write-inp' placeholder='Title' id="write-title" autoFocus={true} />
           </div>
           <div className="write-form-grp">
               <textarea placeholder='Tell your story'onChange={e=>setDesc(e.target.value)} type="text" className="write-inp write-text"></textarea>
               <button type='submit' className="write-submit">Publish</button>
           </div>
       </form>
   </div>
  )
}
