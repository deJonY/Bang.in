import React from 'react';
import "./Header.css";
import MyNav from "../component/MyNav";
import man from "../img/Component 3.png";

function Header() {
    return (
        <div className="bg">
            <MyNav/>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 paddingLeft">
                        <p className="Title1">Hi, Folks!</p>
                        <p className="Title2">Inovation Dedication and Sustainable Solution</p>

                        <p className="Text">
                            Lorem ipsum dolor sit amet consectetur. Nisl donec tortor volutpat id pharetra ultricies
                            mauris. Eget augue at egestas et consequat quis ultricies. At vel aenean posuere neque a
                            fermentum donec eros ut. Nullam mi egestas sed facilisis.
                        </p>

                        <button className="headerBtn">
                            <a href="#" className="headerBtnText">View Details</a>
                        </button>
                    </div>
                    <div className="col-xl-6">
                        <img src={man} alt="" className="man"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;