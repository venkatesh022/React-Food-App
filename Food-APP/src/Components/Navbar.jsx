import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css';

const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false);
    const toggleNavbar = () => {
        setShowLinks(!showLinks)
    }
  return (
    <React.Fragment>
        <div className="navbar">
            <div className="leftSide">
                <img src={logo} alt="" />
                {/* <div className="hiddenLinks">
                    <Link to="/">Home</Link>
                    <Link to="/">Menu</Link>
                    <Link to="/">About Us</Link>
                    <Link to="/">Contact Us</Link>
                </div> */}
            </div>
            <div className="rightSide">
                <Link to="/">Home</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/about">About Us</Link>
                <Link to="/contact">Contact Us</Link>
                <button onClick={toggleNavbar}>
                    <p><i class="fa-solid fa-bars"></i></p>                    
                </button>
            </div>
        </div>
    </React.Fragment>
  )
}

export default Navbar