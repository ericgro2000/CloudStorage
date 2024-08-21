import React from 'react';
import './navbar.css'
import Logo from '../assets/imgs/cloudyimg.jpeg'
import {NavLink} from "react-router-dom";
const Navbar = () => {
    return (
        <div className="navbar">
            <div className="container">
                <img src={Logo} alt="" className="navbar__logo"/>
                <div className="navbar__header">Cloudy</div>
                <div className="navbar__login"><NavLink to="/login">Login</NavLink></div>
                <div className="navbar__registration"><NavLink to="/registration">Registration</NavLink></div>
            </div>
        </div>
    );
};

export default Navbar;