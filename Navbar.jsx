import React from 'react'
import "./Navbar.css"
import { useState } from 'react';
//import { Link } from 'react-router-dom';

const Navbar = () => {

  const[menu , setMenu] = useState("Affiliates");
  return (
    <div className='Navbar'>
      <div className='nav-logo'>
       <h4 className='cblack'> C</h4>
       <p>Chatbase</p> 
       </div>
     <ul className='Nav-menu'>
     <li onClick={()=>{setMenu("Affiliates")}}>Affiliates{menu==="Affiliates" ? <hr/>: <></>}</li>
     <li onClick={()=>{setMenu("Pricing")}}>Pricing</li>
     <li onClick={()=>{setMenu("Resources")}}>Resources</li>
     </ul>
        <div className='Nav-login-cart'>
          <button>Log in</button>
          <h3>try for Free <span aria-hidden="true">→</span></h3>
        </div>
    </div>
  )
}

export default Navbar