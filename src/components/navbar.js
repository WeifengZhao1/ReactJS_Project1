import React from "react";
import { Outlet,Link } from "react-router-dom";
import './navbar.css';

const Navbar = function(){
    return(
        <>
        <nav className="header">
            <a className="ui teal inverted segment" href={"/"} target="" rel="noreferrer">Weifeng React Project</a>
            <div className="">
                <button className="ui button"> <Link to ="/">Home</Link></button>
                <button className="ui button"> <Link to ="/search">Searcher</Link></button>
                <button className="ui button"> <Link to ="/location">Geolocation</Link></button>
                <button className="ui button"> <Link to ="/contact-us">Contact Us</Link></button>
            </div>
        </nav>
        <Outlet/>
        </>
    )
}

export default Navbar