import React, { useContext } from 'react'
import TopBar from './components/topbar/topbar';
import Home from './pages/Home/Home'
import Single from './pages/Single/Single';
import Write from './pages/Write/Write';
import Setting from './pages/Set/Setting';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

import { Context } from './context/Context';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";



function App() {
  const {user} = useContext(Context);
  
  return (
    <Router>
      <TopBar />
     
      
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/register" element={user ? <Home /> : <Register/>}/>
        <Route exact path="/post/:postId" element={<Single />}/>
        <Route exact path="/write" element={user ? <Write /> : <Register/>}/>
        <Route exact path="setting" element ={user ? <Setting /> : <Register/>}/>
        <Route exact path="/Login" element ={user ? <Home /> : <Login />}/>          
    
      </Routes>

    </Router>


  );
}

export default App;
