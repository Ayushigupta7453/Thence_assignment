import React from 'react'
import "./navbar.css";
 import { Link } from 'react-router-dom';
const Navbar = () =>{
    return (
        <nav>
       <div className='content'>
       <div><h2>Brunel</h2></div>
       <div className='content1'><Link to="/login"><span>Get projects</span></Link>
<span> | </span>
       <span className='button1'>Onboard talent</span></div>
       </div>
        </nav>
    );
}
export default Navbar;