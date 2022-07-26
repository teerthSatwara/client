import React, { useContext } from 'react'
import './topbar.css'
import {Link} from 'react-router-dom'
import { Context } from '../../context/Context';

export default function TopBar() {
  const {user,dispatch} = useContext(Context);
  const PF = "http://localhost:5000/images/"
  const handleLogout = () =>{
    dispatch({type:"LOGOUT"})
  }
  return (
    <div className='top'>
        <div className="top-left">
        <i className="fa-brands fa-facebook-f f-box box"></i>
          <i className="fa-brands fa-twitter t-box box"></i>
          <i className="fa-brands fa-instagram i-box box"></i>
          <i className="fa-brands fa-pinterest-p p-box box"></i>
        </div>
        <div className="top-centre">
          <ul className="top-list">
            <li className="top-list-item"><Link className='link' to="/">HOME</Link></li>
            <li className="top-list-item"><Link className='link' to="/">ABOUT</Link></li>
            <li className="top-list-item"><Link className='link' to="/">CONTACT</Link></li>
            <li className="top-list-item"><Link className='link' to="/write">WRITE</Link></li>
            <li className="top-list-item" onClick={handleLogout}>{user && "LOGOUT"}</li>
          </ul>
        </div>
        <div className="top-right">
          {/* {user ? 
                (<img src="https://picsum.photos/45/45" alt="" className="top-image" />)
                :
                ( <i className="fa-solid fa-user box"></i>)} */}
          {/* {user ?( <Link to={"/setting"}>
                <img 
                  src={PF + user.profilePic} 
                  alt="" 
                  className="top-image" />
                  </Link>
                ):
                ( <ul className='top-list'>
                    <li className='top-list-item'>
                      <Link className='link' to="/register">REGISTER</Link>
                    </li>
                    <li className='top-list-item'>
                    <Link className='link' to="/login">LOGIN</Link>
                    </li>

                </ul>)} */}
                {user ?user.profilePic?( <Link to={"/setting"}>
                <img 
                  src={PF + user.profilePic} 
                  alt="" 
                  className="top-image" />
                  </Link>
                ):(<Link to={"/setting"}><i className="fa-solid fa-user box"></i></Link>):
                ( <ul className='top-list'>
                    <li className='top-list-item'>
                      <Link className='link' to="/register">REGISTER</Link>
                    </li>
                    <li className='top-list-item'>
                    <Link className='link' to="/login">LOGIN</Link>
                    </li>

                </ul>)}
         
         
          
          
        </div>
    </div>
  )
}

