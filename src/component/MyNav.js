import React from 'react';
import logo from "../img/logo_master.png";
import "../component/MyNav.css";

function MyNav() {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-sm">
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="" className="nav-img"/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Service</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Product</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
                <button className="navBtn">
                    <a href="#" className="navBtnText">Register</a>
                </button>
            </nav>

        </div>
    );
}

export default MyNav;